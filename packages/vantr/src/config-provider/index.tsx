import * as React from 'react';
import { useMemo } from '../hooks';
import { ConfigContext, ConfigConsumerProps } from './context';

export { ConfigContext };
export type { ConfigConsumerProps };

export const configConsumerProps = ['rootPrefixCls', 'getPrefixCls'];

export interface ConfigProviderProps {
  /**
   * 设置统一样式前缀, 注意：需要配合 less 变量 @vanr-prefix 使用
   * @default vanr
   */
  prefixCls?: string;
}

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
}

export const defaultPrefixCls = 'vanr';
let globalPrefixCls: string;

const setGlobalConfig = (params: Pick<ConfigProviderProps, 'prefixCls'>) => {
  if (params.prefixCls !== undefined) {
    globalPrefixCls = params.prefixCls;
  }
};

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

export const globalConfig = () => ({
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getRootPrefixCls: (rootPrefixCls?: string, customizePrefixCls?: string) => {
    // Customize rootPrefixCls is first priority
    if (rootPrefixCls) {
      return rootPrefixCls;
    }

    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }

    // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
    if (customizePrefixCls && customizePrefixCls.includes('-')) {
      return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
    }

    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
});

const ProviderChildren: React.FC<ProviderChildrenProps> = (props) => {
  const { parentContext, children } = props;

  const getPrefixCls = React.useCallback(
    (suffixCls: string, customizePrefixCls?: string) => {
      const { prefixCls } = props;

      if (customizePrefixCls) return customizePrefixCls;

      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');

      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls],
  );

  const config = {
    ...parentContext,
    getPrefixCls,
  };

  const memoedConfig = useMemo(
    () => config,
    config,
    (prevConfig: Record<string, unknown>, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return (
        prevKeys.length !== currentKeys.length ||
        prevKeys.some((key) => prevConfig[key] !== currentConfig[key])
      );
    },
  );

  return <ConfigContext.Provider value={memoedConfig}>{children}</ConfigContext.Provider>;
};

const ConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
  config: typeof setGlobalConfig;
} = (props) => {
  const context = React.useContext(ConfigContext);
  return <ProviderChildren parentContext={context} {...props} />;
};

ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.config = setGlobalConfig;

export default ConfigProvider;

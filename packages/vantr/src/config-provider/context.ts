import * as React from 'react';

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `vanr-${suffixCls}` : 'vanr';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;

import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_internal';
import { ConfigContext } from '../config-provider';
import '@vantr/styles/lib/divider';

export interface DividerProps extends BaseProps {
  /**
   * 是否使用虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 内容位置
   * @default center
   */
  position?: 'center' | 'left' | 'right';
}

const Divider: React.FC<DividerProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    dashed = false,
    position = 'center',
    children,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('divider', customizePrefixCls);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${dashed}`]: dashed,
    [`${prefixCls}-hairline`]: true,
    [`${prefixCls}-content-${position}`]: !!children,
    [className]: !!className,
  });
  return (
    <div role='separator' className={classes} style={style}>
      {children}
    </div>
  );
};

export default Divider;

import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_internal';
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

const prefixCls = 'vanr-divider';

const Divider: React.FC<DividerProps> = (props) => {
  const { className, style, dashed = false, position = 'center', children } = props;

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

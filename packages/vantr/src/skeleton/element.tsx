import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseShapeProps } from '../_internal';

export interface SkeletonElementProps extends BaseProps {
  prefixCls?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /**
   * 占位组件形状
   * @default true
   */
  shape?: Omit<BaseShapeProps, 'square'>;
  /**
   * 是否展示动画效果
   * @default true
   */
  active?: boolean;
}

const Element = (props: SkeletonElementProps) => {
  const { prefixCls, className, style, size, shape } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-${shape}`]: !!shape,
    [className]: !!className,
  });

  return <span className={classes} style={style} />;
};

export default Element;

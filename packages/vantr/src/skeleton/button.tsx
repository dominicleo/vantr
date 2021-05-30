import * as React from 'react';
import classNames from 'classnames';
import Element, { SkeletonElementProps } from './element';

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'prefixCls' | 'size'> {
  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 按钮占位组件尺寸
   * @defaukt md
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
}

const prefixCls = 'vanr-skeleton';

const SkeletonButton = (props: SkeletonButtonProps) => {
  const { className, style, active, block, ...rest } = props;

  const classes = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [className]: !!className,
  });

  const elementClasses = classNames({
    [`${prefixCls}-button-block`]: block,
  });

  return (
    <div className={classes} style={style}>
      <Element prefixCls={`${prefixCls}-button`} className={elementClasses} {...rest} />
    </div>
  );
};

SkeletonButton.defaultProps = {
  active: true,
  size: 'md',
  shape: 'round',
};

export default SkeletonButton;

import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_internal';

export interface SkeletonTitleProps extends BaseProps {
  /**
   * 设置标题占位图的宽度
   */
  width?: number | string;
}

const prefixCls = 'vanr-skeleton-title';

const SkeletonTitle = ({ className, width, style }: SkeletonTitleProps) => (
  <h3 className={classNames(prefixCls, { [className]: !!className })} style={{ width, ...style }} />
);

export default SkeletonTitle;

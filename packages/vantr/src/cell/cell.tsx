import classNames from 'classnames';
import * as React from 'react';
import { BaseProps } from '../_internal';
import CellGroup from './cell-group';
import { TouchFeedback } from '../rmc';
import '@vantr/styles/lib/cell';

export interface CellProps extends Omit<BaseProps, 'activeClassName'> {
  /**
   * 单元格大小
   */
  size?: 'large';
  /**
   * 左侧图标
   */
  icon?: React.ReactNode;
  /**
   * 是否显示内边框
   * @default true
   */
  border?: boolean;
  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: boolean;
  /**
   * 子元素垂直对齐
   * @default middle
   */
  align?: 'top' | 'middle' | 'bottom';
  /**
   * 右边内容
   */
  extra?: React.ReactNode;
  /**
   * 辅助说明
   */
  brief?: React.ReactNode;
  /**
   * 箭头方向
   * @default right
   */
  arrow?: 'up' | 'down' | 'left' | 'right' | true;
  /**
   * 点击单元格时触发
   */
  onPress?: (event: React.SyntheticEvent) => void;
}

const prefixCls = 'vanr-cell';

const Cell: React.FC<CellProps> & { Group: typeof CellGroup } = (props) => {
  const {
    className,
    style,
    icon,
    size,
    extra,
    brief,
    align = 'middle',
    required,
    children,
    onPress,
  } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-${align}`]: true,
    [`${prefixCls}-required`]: required,
    [className]: !!className,
  });

  return (
    <TouchFeedback onPress={onPress} activeClassName={`${prefixCls}-active`} disabled={!onPress}>
      <div className={classes} style={style}>
        {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
        {children && (
          <div className={`${prefixCls}-content`}>
            {children}
            {brief && <div className={`${prefixCls}-brief`}>{brief}</div>}
          </div>
        )}
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    </TouchFeedback>
  );
};

Cell.displayName = 'Cell';
Cell.Group = CellGroup;

export default Cell;

import classNames from 'classnames';
import * as React from 'react';
import { BaseProps } from '../_internal';
import '@vantr/styles/lib/cell-group';

export interface CellGroupProps extends BaseProps {
  /**
   * 是否为圆角
   */
  radius?: boolean;
  /**
   * 分组标题
   */
  title?: React.ReactNode;
  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean;
}

const prefixCls = 'vanr-cell-group';

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { className, style, radius = false, title, border = true, children } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}-radius`]: radius,
    [className]: !!className,
  });

  return (
    <div className={classes} style={style}>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={classNames(`${prefixCls}-body`, { ['vanr-hairline-top-bottom']: border })}>
        {children}
      </div>
    </div>
  );
};

CellGroup.displayName = 'CellGroup';

export default CellGroup;

import classNames from 'classnames';
import * as React from 'react';
import { BaseProps } from '../_internal';
import '@vantr/styles/lib/cell-group';

const prefixCls = 'vanr-cell-group';

export interface CellGroupProps extends Omit<BaseProps, 'activeClassName'> {
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

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { className, style, title, border = true, children } = props;

  const classes = classNames(prefixCls, {}, className);

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

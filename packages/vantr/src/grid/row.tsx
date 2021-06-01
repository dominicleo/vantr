import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import { BaseProps, tuple } from '../_internal';
import { useFlexGapSupport } from '../hooks';
import RowContext from './RowContext';
import '@vantr/styles/lib/row';

const RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
export type RowAlign = typeof RowAligns[number];
const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');
export type RowJustify = typeof RowJustify[number];

export interface RowProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * 栅格间隔，可以写成像素值或者使用数组形式同时设置 `[水平间距, 垂直间距]`
   * @default 0
   */
  gutter?: number | [number, number];
  /**
   * 垂直对齐方式
   * @default top
   */
  align?: RowAlign;
  /**
   * 水平排列方式
   * @default start
   */
  justify?: RowJustify;
  /**
   * 是否自动换行
   * @default true
   */
  wrap?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    gutter = 0,
    style,
    justify,
    align,
    wrap,
    children,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('row', customizePrefixCls);

  const supportFlexGap = useFlexGapSupport();

  const getGutter = (): [number, number] => {
    const results: [number, number] = [0, 0];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach((g, index) => {
      results[index] = g || 0;
    });
    return results;
  };

  const gutters = getGutter();
  const classes = classNames(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${justify}`]: justify,
    [`${prefixCls}-${align}`]: align,
    [className]: !!className,
  });

  const rowStyle: React.CSSProperties = {};
  const horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  const rowContext = React.useMemo(
    () => ({ gutter: gutters, wrap, supportFlexGap }),
    [gutters, wrap, supportFlexGap],
  );

  return (
    <RowContext.Provider value={rowContext}>
      <div ref={ref} className={classes} style={{ ...rowStyle, ...style }}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';

export default Row;

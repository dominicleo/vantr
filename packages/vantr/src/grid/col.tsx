import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_internal';
import { ConfigContext } from '../config-provider';
import RowContext from './RowContext';
import '@vantr/styles/lib/col';

type ColSpanType = number | string;

type FlexType = number | 'none' | 'auto' | string;

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}
export interface ColProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    span,
    order,
    offset,
    push,
    pull,
    children,
    flex,
    ...others
  } = props;
  const { gutter, wrap, supportFlexGap } = React.useContext(RowContext);

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('col', customizePrefixCls);

  let sizeClassObj = {};
  sizes.forEach((size) => {
    let sizeProps: ColSize = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
    };
  });

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    },
    className,
    sizeClassObj,
  );

  const mergedStyle: React.CSSProperties = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (flex === 'auto' && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return (
    <div {...others} style={{ ...mergedStyle, ...style }} className={classes} ref={ref}>
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;

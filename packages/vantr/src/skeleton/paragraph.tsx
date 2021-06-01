import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_internal';

type widthUnit = number | string;

export interface SkeletonParagraphProps extends BaseProps {
  /**
   * 设置段落占位图的宽度
   */
  width?: widthUnit | Array<widthUnit>;
  /**
   * 设置段落占位图的行数
   */
  rows?: number;
}

const prefixCls = 'vanr-skeleton-paragraph';

const SkeletonParagraph = (props: SkeletonParagraphProps) => {
  const getWidth = (index: number) => {
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  const { className, style, rows } = props;
  const rowList = [...Array(rows)].map((_, index) => (
    <li key={index} style={{ width: getWidth(index) }} />
  ));
  return (
    <ul className={classNames(prefixCls, className)} style={style}>
      {rowList}
    </ul>
  );
};

export default SkeletonParagraph;

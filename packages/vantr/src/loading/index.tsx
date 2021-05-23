import classNames from 'classnames';
import * as React from 'react';
import { tuple, BaseProps } from '../_internal';
import '@vantr/styles/lib/loading';

const prefixCls = 'vanr-loading';

const LoadingTypes = tuple('circular', 'spinner');
export type LoadingType = typeof LoadingTypes[number];

const LoadingSizes = tuple('lg', 'md', 'sm', 'xs');
export type LoadingSize = typeof LoadingSizes[number];

export interface LoadingProps extends Omit<BaseProps, 'activeClassName'> {
  /**
   * 设置加载组件类型
   * @default circular
   */
  type?: LoadingType;
  /**
   * 设置加载组件大小
   * @default md
   */
  size?: LoadingSize;
  /**
   * 设置加载组件颜色
   */
  color?: string;
  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const {
    className,
    style,
    type = 'circular',
    size = 'md',
    color,
    vertical = false,
    children,
  } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-vertical`]: vertical,
    },
    className,
  );

  const colorStyle = { color: !!color && color };

  const renderText = () => {
    if (children) {
      return (
        <span className={`${prefixCls}-text`} style={colorStyle}>
          {children}
        </span>
      );
    }
  };

  const SpinIcon = Array.from(Array(12).keys()).map((_, index) => <i key={index} />);

  const CircularIcon = (
    <svg className={`${prefixCls}-circular`} viewBox='25 25 50 50'>
      <circle cx='50' cy='50' r='20' fill='none' />
    </svg>
  );

  return (
    <div className={classes} style={style}>
      <span className={`${prefixCls}-spinner ${prefixCls}-spinner-${type}`} style={colorStyle}>
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
      {renderText()}
    </div>
  );
};

Loading.displayName = 'Loading';

export default Loading;

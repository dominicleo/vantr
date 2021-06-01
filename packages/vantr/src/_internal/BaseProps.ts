import { tuple } from '.';

export interface BaseProps {
  /**
   * 设置统一样式前缀
   */
  prefixCls?: string;
  /**
   * 组件样式名
   * @description.en-US Set component className
   */
  className?: string;

  /**
   * 组件样式
   * @description.en-US Set component CSSProperties
   */
  style?: React.CSSProperties;
}

export interface BaseActiveProps {
  /**
   * 组件激活样式名
   * @description.en-US Set component active className
   */
  activeClassName?: string;
  /**
   * 组件激活样式
   * @description.en-US Set component active CSSProperties
   */
  activeStyle?: React.CSSProperties;
}

const Shapes = tuple('square', 'round', 'circle');
export type BaseShapeProps = typeof Shapes[number];

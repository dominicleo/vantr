import * as React from 'react';
import classNames from 'classnames';
import { Loading } from 'vantr';
import { tuple, BaseProps } from '../_internal';
import { TouchFeedback } from '../rmc';
import { useTracker } from '../hooks';
import type { LoadingType } from '../loading';
import '@vantr/styles/lib/button';

const ButtonTypes = tuple('default', 'primary', 'success', 'warning', 'danger');
export type ButtonType = typeof ButtonTypes[number];
const ButtonSizes = tuple('lg', 'md', 'sm', 'xs');
export type ButtonSize = typeof ButtonSizes[number];

export interface ButtonProps extends BaseProps {
  /**
   * 设置按钮类型
   * @description.en-US Can be set to `default` `primary` `success` `warning` `danger`
   * @default default
   */
  type?: ButtonType;
  /**
   * 设置按钮大小
   * @description.en-US Set the size of button
   * @default md
   */
  size?: ButtonSize;
  /**
   * 设置按钮的图标组件
   * @description.en-US Set the icon component of button
   */
  icon?: React.ReactNode;
  /**
   * 设置按钮的图标显示位置
   * @description.en-US Set the icon display of the button
   * @default left
   */
  iconPosition?: 'left' | 'right';
  /**
   * 按钮颜色, 支持传入 `linear-gradient` 渐变色
   * @description.en-US Button color, support `linear-gradient` gradient color
   */
  color?: string;
  /**
   * 是否为块级元素
   * @description.en-US Option to fit button width to its parent width
   * @default false
   */
  block?: boolean;
  /**
   * 是否为幽灵按钮
   * @description.en-US Make background transparent and invert text and border colors
   * @default false
   */
  ghost?: boolean;
  /**
   * 设置按钮形状
   * @description.en-US Can be set button shape
   */
  shape?: 'circle' | 'round';
  /**
   * 设置按钮载入状态
   * @description.en-US Set the loading status of button
   * @default false
   */
  loading?: boolean;
  /**
   * 设置按钮加载状态显示文本
   * @description.en-US Set button loading status display text
   */
  loadingText?: string;
  /**
   * 设置按钮加载状态显示图标类型
   * @description.en-US Set button loading status display icon type
   * @default circular
   */
  loadingType?: LoadingType;
  /**
   * 按钮失效状态
   * @description.en-US Disabled state of button
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮根节点的 HTML 标签
   * @type string
   * @description.en-US The HTML tag of the button root node
   * @default button
   */
  tag?: keyof HTMLElementTagNameMap;

  /**
   * 原生 button 标签的 type 属性
   * @description.en-US Set the original html type of button, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
   * @default button
   */
  htmlType?: React.ButtonHTMLAttributes<Element>['type'];
  /**
   * 按钮点击事件
   * @description.en-US Button click event
   */
  onPress?: (event: React.SyntheticEvent) => void;
}

const prefixCls = 'vanr-button';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    activeClassName,
    style,
    type = 'default',
    size = 'md',
    icon,
    iconPosition = 'left',
    shape,
    ghost = false,
    block = false,
    color,
    disabled = false,
    loading = false,
    loadingType = 'circular',
    loadingText,
    tag = 'button',
    onPress,
    children,
    ...rest
  } = props;

  const buttonRef = React.useRef<HTMLElement>();

  const log = useTracker(Button.displayName, {
    type,
  });

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: true,
    [`${prefixCls}-${shape}`]: !!shape,
    [`${prefixCls}-${size}`]: true,
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-disabled`]: disabled,
    [className]: !!className,
  });

  const activeClasses = classNames(`${prefixCls}-active`, { [activeClassName]: !!activeClassName });

  const handlePress = (event: React.SyntheticEvent) => {
    onPress && onPress(event);
    buttonRef.current?.click();
    log('onPress');
  };

  const getStyle = () => {
    const s: React.CSSProperties = { ...style };

    if (!color) return;

    s.color = ghost ? color : 'white';

    if (!ghost) {
      s.background = color;
    }

    if (color.includes('gradient')) {
      s.border = 0;
    } else {
      s.borderColor = color;
    }

    return s;
  };

  const renderIcon = () => {
    if (loading) {
      return <Loading className={`${prefixCls}-loading`} type={loadingType} size={size} />;
    }

    if (icon) {
      return <div className={`${prefixCls}-icon`}>{icon}</div>;
    }
  };

  const renderText = () => {
    let text;

    if (loading) {
      text = loadingText;
    } else {
      text = children;
    }

    if (text) {
      return <span className={`${prefixCls}-text`}>{text}</span>;
    }
  };

  const content = (
    <div className={`${prefixCls}-content`}>
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </div>
  );

  return (
    <TouchFeedback
      onPress={handlePress}
      activeClassName={activeClasses}
      disabled={loading || disabled}
    >
      {React.createElement(
        tag,
        {
          ...rest,
          ref: buttonRef,
          style: getStyle(),
          className: classes,
          disabled,
          role: 'button',
          'aria-disabled': disabled,
        },
        content,
      )}
    </TouchFeedback>
  );
};

Button.displayName = 'Button';

export default Button;

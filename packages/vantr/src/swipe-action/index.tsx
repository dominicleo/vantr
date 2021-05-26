import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { ButtonProps } from '../button';
import { BaseProps } from '../_internal';
import '@vantr/styles/lib/swipe-action';
import { useClickAway } from '../hooks';
import Gesture from 'rc-gesture';
import { Ref } from 'react';

// export interface SwipeActionButtonProps extends BaseProps {
//   text: React.ReactNode;
//   onPress?: (events?: React.SyntheticEvent) => void;
// }

export interface SwipeActionProps extends BaseProps {
  /**
   * 是否禁用滑动
   * @default false
   */
  disabled?: boolean;
  /**
   * 按下按钮后自动隐藏
   * @default false
   */
  autoClose?: boolean;
  /**
   * 左侧滑动区域的内容
   */
  left?: React.ReactNode;
  /**
   * 右侧滑动区域的内容
   */
  right?: React.ReactNode;
  /**
   * 打开时触发
   */
  onOpen?: () => void;
  /**
   * 关闭时触发
   */
  onClose?: () => void;
}

const prefixCls = 'vanr-swipe-action';

const SwipeAction: React.FC<SwipeActionProps> = (props) => {
  const { className, left, right, disabled, children, ...rest } = props;
  const { autoClose, onOpen, onClose, ...rootProps } = rest;

  const refs = React.useRef({
    openedLeft: false,
    openedRight: false,
    content: null,
    cover: null,
    left: null,
    right: null,
    btnsLeftWidth: 0,
    btnsRightWidth: 0,
    swiping: false,
    needShowLeft: false,
    needShowRight: false,
  });
  const [swiping, setSwiping] = React.useState(false);

  const getClickHandler = (position: SwipeCellPosition, stop?: boolean) => (event: MouseEvent) => {
    if (stop) {
      event.stopPropagation();
    }
    onClick(position);
  };

  const renderSideContent = (side: string) => {
    const content = props[side];
    if (content) {
      <div
        ref={refs[side]}
        className={`${prefixCls}-${side}`}
        onClick={getClickHandler(side, true)}
      >
        {content}
      </div>;
    }
  };

  const onTouchMove = () => {};
  const onPanStart = () => {};
  const onPanMove = () => {};
  const onPanEnd = () => {};
  const onSwipeLeft = () => {};
  const onSwipeRight = () => {};

  const classes = classNames(prefixCls, {
    [`${prefixCls}-swiping`]: swiping,
    [className]: !!className,
  });

  const refProps = {
    ref: (element) => (refs.current.content = element),
  };

  return (left || right) && !disabled ? (
    <div className={classes} {...rootProps}>
      {renderSideContent('left')}
      {renderSideContent('right')}
      <Gesture
        onTouchMove={onTouchMove}
        onPanStart={onPanStart}
        onPanMove={onPanMove}
        onPanEnd={onPanEnd}
        onPanCancel={onPanEnd}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        direction='horizontal'
        {...refProps}
      >
        {children}
      </Gesture>
    </div>
  ) : (
    <div {...refProps} {...rootProps}>
      {children}
    </div>
  );
};

SwipeAction.defaultProps = {
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen() {},
  onClose() {},
};

export default SwipeAction;

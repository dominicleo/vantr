import * as React from 'react';
import { withError } from '../rmc';
import '@vantr/styles/lib/swipe-action';
import classNames from 'classnames';
import { callInterceptor, BaseProps, range, preventDefault, Interceptor } from '../_internal';
import { useClickAway, useSetState, useTouch, useTracker } from '../hooks';

export type SwipeActionSide = 'left' | 'right';
export type SwipeActionPosition = SwipeActionSide | 'swipe-action' | 'outside';

type SwipeActionCallback<T> = { name: number | string; position: T };
export interface SwipeActionProps extends BaseProps {
  /**
   * 标识符, 可以在事件参数中获取到
   * @default ''
   */
  name?: number | string;
  /**
   * 左侧滑动区域的内容
   */
  left?: React.ReactNode;
  /**
   * 右侧滑动区域的内容
   */
  right?: React.ReactNode;
  /**
   * 是否禁用滑动
   */
  disabled?: boolean;
  /**
   * 是否阻止滑动事件冒泡
   * @default false
   */
  stopPropagation?: boolean;
  /**
   * 点击时触发
   * @type (position: 'left' | 'right' | 'cell' | 'outside') => void
   */
  onClick?: (position: SwipeActionPosition) => void;
  /**
   * 打开时触发
   * @type ({ name: string | number, position: 'left' | 'right' }) => void
   */
  onOpen?: (data: SwipeActionCallback<SwipeActionSide>) => void;
  /**
   * 关闭前的回调函数, 返回 `false` 可阻止关闭, 支持返回 `Promise`
   * @type ({ name: number | string, postion: 'left' | 'right' | 'cell' | 'outside'}) => Promise<boolean> | boolean
   */
  onBeforeClose?: Interceptor<SwipeActionCallback<SwipeActionPosition>>;
  /**
   * 关闭时触发
   * @type ({ name: string | number, position: 'left' | 'right' | 'cell' | 'outside' }) => void
   */
  onClose?: (data: SwipeActionCallback<SwipeActionPosition>) => void;
}

const prefixCls = 'vanr-swipe-action';

const SwipeAction: React.FC<SwipeActionProps> = (props) => {
  const {
    className,
    style,
    name = '',
    disabled = false,
    stopPropagation = false,
    onClick,
    onOpen,
    onBeforeClose,
    onClose,
    children,
  } = props;

  const root = React.useRef<HTMLDivElement>();
  const opened = React.useRef(false);
  const lockClick = React.useRef(false);
  const startOffset = React.useRef(0);

  const leftRef = React.useRef<HTMLDivElement>();
  const rightRef = React.useRef<HTMLDivElement>();

  const touch = useTouch();
  const [state, setState] = useSetState({
    offset: 0,
    dragging: false,
  });

  const log = useTracker(SwipeAction.displayName);

  const getWidthByRef = (ref: React.MutableRefObject<HTMLDivElement | undefined>) =>
    ref.current ? ref.current.getBoundingClientRect().width : 0;

  const leftWidth = getWidthByRef(leftRef);
  const rightWidth = getWidthByRef(rightRef);

  const open = (side: SwipeActionSide) => {
    opened.current = true;
    setState({ offset: side === 'left' ? leftWidth : -rightWidth });
    onOpen?.({ name, position: side });
    log('onOpen');
  };

  const close = (position: SwipeActionPosition) => {
    setState({ offset: 0 });
    if (!opened.current) return;
    opened.current = false;
    onClose?.({ name, position });
    log('onClose');
  };

  const toggle = (side: SwipeActionSide) => {
    const offset = Math.abs(state.offset);
    const THRESHOLD = 0.15;
    const threshold = opened.current ? 1 - THRESHOLD : THRESHOLD;
    const width = side === 'left' ? leftWidth : rightWidth;

    width && offset > width * threshold ? open(side) : close(side);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    if (!disabled) {
      startOffset.current = state.offset;
      touch.start(event);
    }
  };
  const onTouchMove = (event) => {
    if (props.disabled) {
      return;
    }

    const { deltaX } = touch;
    touch.move(event);

    if (touch.isHorizontal()) {
      lockClick.current = true;
      state.dragging = true;
      const isEdge = !opened.current || deltaX * startOffset.current < 0;
      isEdge && preventDefault(event, stopPropagation);

      state.offset = range(deltaX + startOffset.current, -rightWidth, leftWidth);
      setState(state);
    }
  };
  const onTouchEnd = () => {
    if (state.dragging) {
      setState({ dragging: false });
      toggle(state.offset > 0 ? 'left' : 'right');
      setTimeout(() => {
        lockClick.current = false;
      }, 0);
    }
  };

  const handleClick = (position: SwipeActionPosition) => {
    onClick?.(position);
    if (opened.current && !lockClick.current) {
      callInterceptor({
        interceptor: onBeforeClose,
        args: [{ name, position }],
        done: () => close(position),
      });
    }
  };

  const getClickHandler =
    (position: SwipeActionPosition, stop?: boolean) => (event: React.SyntheticEvent) => {
      if (stop) {
        event.stopPropagation();
      }
      handleClick(position);
    };

  const renderSideContent = (
    side: SwipeActionSide,
    ref: React.MutableRefObject<HTMLDivElement | undefined>,
  ) => {
    const content = props[side];
    if (content) {
      return (
        <div ref={ref} className={`${prefixCls}-${side}`} onClick={getClickHandler(side, true)}>
          {React.Children.map(content, (child) => child)}
        </div>
      );
    }
  };

  const wrapperStyle: React.CSSProperties = {
    transform: `translate3d(${state.offset}px, 0, 0)`,
    transitionDuration: state.dragging ? '0s' : '.6s',
  };

  useClickAway(() => handleClick('outside'), root, 'touchstart');

  return (
    <div
      ref={root}
      className={classNames(prefixCls, { [className]: !!className })}
      style={style}
      onClick={getClickHandler('swipe-action')}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
        {renderSideContent('left', leftRef)}
        {renderSideContent('right', rightRef)}
        {children}
      </div>
    </div>
  );
};

SwipeAction.displayName = 'SwipeAction';

export default withError(SwipeAction);

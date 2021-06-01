import * as React from 'react';
import { useSetState } from '.';

const MIN_DISTANCE = 10;

type Direction = '' | 'vertical' | 'horizontal';

type State = {
  startX: number;
  startY: number;
  deltaX: number;
  deltaY: number;
  offsetX: number;
  offsetY: number;
  direction: Direction;
};

const getDirection = (x: number, y: number) => {
  if (x > y && x > MIN_DISTANCE) return 'horizontal';
  if (y > x && y > MIN_DISTANCE) return 'vertical';
  return '';
};

const useTouch = () => {
  const [state, setState] = useSetState<State>({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '',
  });
  const { startX, startY, deltaX, deltaY, offsetX, offsetY, direction } = state;

  const isVertical = () => direction === 'vertical';
  const isHorizontal = () => direction === 'horizontal';
  const reset = () => setState({ deltaX: 0, deltaY: 0, offsetX: 0, offsetY: 0, direction: '' });
  const start = (event: React.TouchEvent) => {
    reset();
    setState({
      startX: event.touches[0].clientX,
      startY: event.touches[0].clientY,
    });
  };

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];

    state.deltaX = touch.clientX < 0 ? 0 : touch.clientX - startX;
    state.deltaX = touch.clientX < 0 ? 0 : touch.clientX - startX;
    state.deltaY = touch.clientY - startY;
    state.offsetX = Math.abs(deltaX);
    state.offsetY = Math.abs(deltaY);

    if (!direction) state.direction = getDirection(offsetX, offsetY);

    setState(state);
  }) as EventListener;

  return {
    start,
    move,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
};

export default useTouch;

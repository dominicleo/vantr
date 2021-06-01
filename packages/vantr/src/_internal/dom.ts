import * as React from 'react';

export type BasicTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | React.MutableRefObject<T | null | undefined>;

type TargetElement = HTMLElement | Element | Document | Window;

export function getTargetElement(
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement,
): TargetElement | undefined | null {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetElement | undefined | null;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export const canUseDocument =
  typeof window !== 'undefined' && window.document && window.document.createElement;

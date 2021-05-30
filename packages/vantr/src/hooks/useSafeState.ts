import * as React from 'react';
import useUnmountedRef from './useUnmountedRef';

function useSafeState<S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];
function useSafeState<S = undefined>(): [
  S | undefined,
  React.Dispatch<React.SetStateAction<S | undefined>>,
];

function useSafeState(initialState?) {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = React.useState(initialState);
  const setCurrentState = (currentState) => {
    if (unmountedRef.current) return;
    setState(currentState);
  };

  return [state, setCurrentState] as const;
}

export default useSafeState;

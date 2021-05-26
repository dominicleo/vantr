import * as React from 'react';
import * as hoistNonReactStatics from 'hoist-non-react-statics';
import { getTracker, baseData, LogType } from '../../tracker';

class ErrorBoundary extends React.Component<{
  onError: (error: Error) => void;
}> {
  componentDidCatch(error) {
    this.props.onError?.(error);
  }
  render() {
    return this.props.children;
  }
}

export interface IWithErrorOptions {
  readonly forwardRef: boolean;
}
export function withError<P extends object, TRef = {}, X = {}>(
  BaseComponent: React.FC<P> & X,
  options: IWithErrorOptions,
): (
  | React.MemoExoticComponent<
      React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<TRef>>
    >
  | React.NamedExoticComponent<P>
) &
  X;

export function withError<P extends object, X = {}>(
  BaseComponent: React.FC<P> & X,
): React.FC<P> & X;

export function withError<P extends object, TRef = {}>(
  BaseComponent: React.FC<P>,
  options?: IWithErrorOptions,
) {
  const Wrapped: React.ForwardRefRenderFunction<TRef, P> = (props: P, ref: React.Ref<TRef>) => {
    const handleError = React.useCallback((error) => {
      getTracker().log(BaseComponent.displayName!, {
        ...baseData,
        type: LogType.ERROR,
        c1: error?.message ?? 'unknown error',
      });
      throw error;
    }, []);

    const forwardRefProps = options?.forwardRef ? { forwardRef: ref } : {};

    return (
      <ErrorBoundary onError={handleError}>
        <BaseComponent {...props} {...forwardRefProps} />
      </ErrorBoundary>
    );
  };

  let memoComponent;
  if (options?.forwardRef) {
    memoComponent = React.memo(React.forwardRef(Wrapped));
  } else {
    memoComponent = React.memo(Wrapped);
  }

  hoistNonReactStatics(memoComponent, BaseComponent);
  memoComponent.displayName = BaseComponent.displayName;

  return memoComponent;
}

export default ErrorBoundary;

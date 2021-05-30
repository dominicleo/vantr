import { isPromise, noop } from '.';

export type Interceptor<T = any> = (...args: T[]) => Promise<boolean> | boolean;

export function callInterceptor(options: {
  interceptor?: Interceptor;
  args?: any[];
  done: () => void;
  canceled?: () => void;
}) {
  const { interceptor, args, done, canceled } = options;

  if (interceptor) {
    const returnValue = interceptor.call(null, ...args);

    if (isPromise(returnValue)) {
      returnValue
        .then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        })
        .catch(noop);
    } else if (returnValue) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}

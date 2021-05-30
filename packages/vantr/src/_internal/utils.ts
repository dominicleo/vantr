export function noop() {}

export function isDefine<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function isObject(value: unknown): value is Record<string | number, unknown> {
  return value !== null && typeof value === 'object';
}

export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return isObject(value) && isFunction(value.then) && isFunction(value.catch);
}

export function omit<T extends object, K extends keyof T>(objects: T, fields: K[]): Omit<T, K> {
  const clone = { ...objects };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }
  return clone;
}

export function range(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

import { version } from 'react';

export interface TrackerOptions {
  // vantr 版本
  version: string;
  // react 版本
  reactVersion: string;
  // 日志类型
  type: LogType;
  // 组件额外的参数
  c1?: any;
}

// 上报类型
export enum LogType {
  // 组件渲染
  RENDERED = 'RENDERED',
  // 其他自定义的错误类型
  CUSTOM = 'CUSTOM',
  // 组件内部错误
  ERROR = 'ERROR',
}

export const baseData = {
  // @ts-ignore
  version: __VERSION__,
  reactVersion: version,
};

export interface Tracker {
  log(component: string, options: TrackerOptions, ext?: any): void;
}

let tracker: Tracker | null = null;

export const setTracker = (Tracker: Tracker) => {
  if (typeof Tracker?.log === 'function') {
    tracker = Tracker;
  }
};

export const getTracker: () => Tracker = () => {
  if (typeof tracker?.log === 'function') {
    return tracker;
  }

  // 默认模拟一个空函数
  return {
    log() {},
  };
};

export default {
  setTracker,
};

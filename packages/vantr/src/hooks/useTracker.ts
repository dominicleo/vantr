import { useEffect } from 'react';
import { LogType, getTracker, TrackerOptions, baseData } from '../tracker';

export { LogType };

export default (component = 'UNKNOWN', c1?: TrackerOptions['c1']) => {
  const tracker = getTracker();
  const data: TrackerOptions = {
    ...baseData,
    type: LogType.RENDERED,
    ...(c1 ? { c1 } : {}),
  };

  useEffect(() => {
    tracker.log(component, data);
  }, []);

  return (ext: any) => {
    return tracker.log(component, { ...data, type: LogType.CUSTOM }, ext);
  };
};

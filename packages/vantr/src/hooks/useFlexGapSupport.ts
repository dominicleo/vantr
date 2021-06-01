import * as React from 'react';
import { detectFlexGapSupported } from '../_internal';

const useFlexGapSupport = () => {
  const [flexible, setFlexible] = React.useState(false);
  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);

  return flexible;
};

export default useFlexGapSupport;

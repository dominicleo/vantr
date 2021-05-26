import * as React from 'react';
import { Tracker, Button } from 'vantr';
import './index.less';

export default () => {
  const [logs, update] = React.useState([]);
  Tracker.setTracker({
    log(component, params, ext) {
      const data = [{ component, params, ext }].concat(logs);
      update(data);
    },
  });

  return (
    <div className='demo-tracker'>
      <div className='demo-tracker-title'>数据</div>
      <div className='demo-tracker-block'>
        <Button type='primary' block>
          点击查看控制台
        </Button>
      </div>
      <div className='demo-tracker-title'>日志</div>
      <div className='demo-tracker-block'>
        <pre>{JSON.stringify(logs, null, 2)}</pre>
      </div>
    </div>
  );
};

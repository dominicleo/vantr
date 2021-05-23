import * as React from 'react';
import './block.less';

const DemoBlock: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className='demo-block'>
      <div className='demo-block-title'>{title}</div>
      {children}
    </div>
  );
};

export default DemoBlock;

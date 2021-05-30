import * as React from 'react';
import { Skeleton } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-skeleton-title'>{title}</div>
      <div className='demo-skeleton-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-skeleton'>
      <Block title='基础用法'>
        <Skeleton />
      </Block>
      <Block title='显示头像'>
        <Skeleton avatar />
      </Block>
      <Block title='按钮'>
        <Skeleton.Button size='sm' />
      </Block>
    </div>
  );
};

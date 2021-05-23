import * as React from 'react';
import { Loading } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-loading-title'>{title}</div>
      <div className='demo-loading-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-loading'>
      <Block title='加载类型'>
        <Loading />
        <Loading type='spinner' />
      </Block>
      <Block title='自定义颜色'>
        <Loading color='#1989fa' />
        <Loading type='spinner' color='#1989fa' />
      </Block>
      <Block title='加载尺寸'>
        <Loading size='xs' />
        <Loading size='sm' />
        <Loading />
        <Loading size='lg' />
        <div>
          <Loading type='spinner' size='xs' />
          <Loading type='spinner' size='sm' />
          <Loading type='spinner' />
          <Loading type='spinner' size='lg' />
        </div>
      </Block>
      <Block title='加载尺寸'>
        <Loading>加载中</Loading>
      </Block>
      <Block title='垂直排列'>
        <Loading vertical>加载中...</Loading>
      </Block>
    </div>
  );
};

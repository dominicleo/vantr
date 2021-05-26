import * as React from 'react';
import { Divider } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-divider-title'>{title}</div>
      <div className='demo-divider-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-divider'>
      <Block title='基础用法'>
        <Divider />
      </Block>
      <Block title='展示文字'>
        <Divider>文字</Divider>
      </Block>
      <Block title='内容位置'>
        <Divider position='left'>文字</Divider>
        <Divider position='right'>文字</Divider>
      </Block>
      <Block title='虚线'>
        <Divider dashed>文字</Divider>
      </Block>
      <Block title='自定义样式'>
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>
          文字
        </Divider>
      </Block>
    </div>
  );
};

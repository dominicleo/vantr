import * as React from 'react';
import { Cell, SwipeAction, SwipeActionProps, Button } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-swipe-action-title'>{title}</div>
      <div className='demo-swipe-action-block'>{children}</div>
    </>
  );
};

export default () => {
  const onBeforeClose: SwipeActionProps['onBeforeClose'] = ({ position }) => {
    if (position !== 'right') return true;

    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1500);
    });
  };

  return (
    <div className='demo-swipe-action'>
      <Block title='基础用法'>
        <SwipeAction
          name='basic'
          left={
            <Button type='primary' shape='square'>
              选择
            </Button>
          }
          right={[
            <Button type='danger' shape='square'>
              删除
            </Button>,
            <Button type='primary' shape='square'>
              收藏
            </Button>,
          ]}
        >
          <Cell.Group>
            <Cell extra='内容'>单元格</Cell>
          </Cell.Group>
        </SwipeAction>
      </Block>
      <Block title='异步关闭'>
        <SwipeAction
          name='async'
          left={
            <Button type='primary' shape='square'>
              选择
            </Button>
          }
          right={
            <Button type='danger' shape='square'>
              删除
            </Button>
          }
          onBeforeClose={onBeforeClose}
        >
          <Cell.Group>
            <Cell extra='内容'>单元格</Cell>
          </Cell.Group>
        </SwipeAction>
      </Block>
    </div>
  );
};

import * as React from 'react';
import { Cell, SwipeAction } from 'vantr';
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
  return (
    <div className='demo-swipe-action'>
      <Block title='基础用法'>
        <SwipeAction>
          <Cell.Group>
            <Cell>单元格</Cell>
          </Cell.Group>
        </SwipeAction>
      </Block>
    </div>
  );
};

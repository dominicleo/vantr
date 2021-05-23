import * as React from 'react';
import { Cell } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-cell-title'>{title}</div>
      <div className='demo-cell-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-cell'>
      <Block title='基础用法'>
        <Cell.Group>
          <Cell extra='内容'>单元格</Cell>
          <Cell brief='描述信息' extra='内容'>
            单元格
          </Cell>
        </Cell.Group>
      </Block>
      <Block title='基础用法'>
        <Cell.Group>
          <Cell extra='内容' size='large'>
            单元格
          </Cell>
          <Cell extra='内容' size='large' brief='描述信息'>
            单元格
          </Cell>
        </Cell.Group>
      </Block>
      <Block title='展示箭头'>
        <Cell.Group>
          <Cell size='large' arrow>
            单元格
          </Cell>
          <Cell extra='内容' size='large' arrow>
            单元格
          </Cell>
        </Cell.Group>
      </Block>
    </div>
  );
};

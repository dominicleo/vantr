import './index.less';

import * as React from 'react';
import { Cell } from 'vantr';

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
      <Block title='单元格大小'>
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
          <Cell onPress={() => {}} arrow>
            单元格
          </Cell>
          <Cell onPress={() => {}} extra='内容' arrow>
            单元格
          </Cell>
          <Cell onPress={() => {}} extra='内容' arrow='down'>
            单元格
          </Cell>
        </Cell.Group>
      </Block>
      <Block title='分组标题'>
        <Cell.Group title='分组1'>
          <Cell arrow>单元格</Cell>
        </Cell.Group>
        <Cell.Group title='分组2'>
          <Cell arrow>单元格</Cell>
        </Cell.Group>
      </Block>
      <Block title='圆角'>
        <Cell.Group radius>
          <Cell arrow>单元格</Cell>
          <Cell arrow>单元格</Cell>
        </Cell.Group>
      </Block>
      <Block title='垂直居中对齐'>
        <Cell.Group>
          <Cell extra='内容' brief='描述信息' align='top'>
            单元格
          </Cell>
          <Cell extra='内容' brief='描述信息'>
            单元格
          </Cell>
          <Cell extra='内容' brief='描述信息' align='bottom'>
            单元格
          </Cell>
        </Cell.Group>
      </Block>
    </div>
  );
};

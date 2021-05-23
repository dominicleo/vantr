import * as React from 'react';
import { Button } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-button-title'>{title}</div>
      <div className='demo-button-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-button'>
      <Block title='按钮类型'>
        <Button type='primary'>主要按钮</Button>
        <Button type='success'>成功按钮</Button>
        <Button type='default'>默认按钮</Button>
        <Button type='warning'>警告按钮</Button>
        <Button type='danger'>危险按钮</Button>
      </Block>
      <Block title='幽灵按钮'>
        <Button type='primary' ghost>
          幽灵按钮
        </Button>
        <Button type='success' ghost>
          幽灵按钮
        </Button>
      </Block>
      <Block title='禁用状态'>
        <Button type='primary' disabled>
          禁用状态
        </Button>
        <Button type='success' disabled>
          禁用状态
        </Button>
      </Block>
      <Block title='加载状态'>
        <Button type='primary' loading />
        <Button type='primary' loadingType='spinner' loading />
        <Button type='primary' loadingText='加载中' loading />
      </Block>
      <Block title='按钮形状'>
        <Button type='primary'>方形按钮</Button>
        <Button type='primary' shape='round'>
          胶囊按钮
        </Button>
        <Button type='primary' shape='circle' loadingType='spinner' loading />
      </Block>
      <Block title='按钮尺寸'>
        <Button type='primary' size='lg'>
          大号按钮
        </Button>
        <Button type='primary'>普通按钮</Button>
        <Button type='primary' size='sm'>
          小型按钮
        </Button>
        <Button type='primary' size='xs'>
          迷你按钮
        </Button>
      </Block>
      <Block title='块级元素'>
        <Button type='primary' block>
          块级元素
        </Button>
      </Block>
      <Block title='按钮颜色'>
        <Button color='#7232dd'>单色按钮</Button>
        <Button color='#7232dd' ghost>
          单色按钮
        </Button>
        <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>渐变色按钮</Button>
      </Block>
    </div>
  );
};

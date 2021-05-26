---
toc: false
defaultShowCode: false
title: Button 按钮
nav:
  title: 组件
  path: /components
---

## Button 按钮

按钮用于触发一个操作，如提交表单

<code src="./demo/index.tsx" hidden></code>

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type='primary'>主要按钮</Button>
      <Button type='success'>成功按钮</Button>
      <Button type='default'>默认按钮</Button>
      <Button type='warning'>警告按钮</Button>
      <Button type='danger'>危险按钮</Button>
    </>
  );
};
```

### 幽灵按钮

使按钮背景透明

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type='primary' ghost>
        幽灵按钮
      </Button>
      <Button type='success' ghost>
        幽灵按钮
      </Button>
    </>
  );
};
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type='primary' disabled>
        禁用状态
      </Button>
      <Button type='success' disabled>
        禁用状态
      </Button>
    </>
  );
};
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type='primary' loading />
      <Button type='primary' loadingType='spinner' loading />
      <Button type='primary' loadingText='加载中' loading />
    </>
  );
};
```

### 按钮形状

默认为方形按钮，通过 `round` 设置胶囊按钮，通过 `circle` 设置胶囊按钮。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type='primary'>方形按钮</Button>
      <Button type='primary' shape='round'>
        胶囊按钮
      </Button>
      <Button type='primary' shape='circle' loadingType='spinner' loading />
    </>
  );
};
```

### 按钮尺寸

支持 large、small、mini 三种尺寸

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
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
    </>
  );
};
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <Button type='primary' block>
      块级元素
    </Button>
  );
};
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```tsx | pure
import * as React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button color='#7232dd'>单色按钮</Button>
      <Button color='#7232dd' ghost>
        单色按钮
      </Button>
      <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>渐变色按钮</Button>
    </>
  );
};
```

<API />

### 样式变量

组件提供了下列 [Less](https://lesscss.org/) 变量，可用于自定义样式

| 名称                             | 默认值               | 描述 |
| -------------------------------- | -------------------- | ---- |
| @button-xs-size                  | `48 * @rpx`          | -    |
| @button-xs-padding               | `0 @h-spacing-xs`    | -    |
| @button-xs-font-size             | `@font-size-xs`      | -    |
| @button-sm-size                  | `64 * @rpx`          | -    |
| @button-sm-padding               | `0 @h-spacing-sm`    | -    |
| @button-sm-font-size             | `@font-size-sm`      | -    |
| @button-md-size                  | `88 * @rpx`          | -    |
| @button-md-padding               | `0 @h-spacing-md`    | -    |
| @button-md-font-size             | `@font-size-md`      | -    |
| @button-lg-size                  | `100 * @rpx`         | -    |
| @button-lg-padding               | `0 @h-spacing-lg`    | -    |
| @button-lg-font-size             | `@font-size-lg`      | -    |
| @button-default-line-height      | `1.2`                | -    |
| @button-default-font-size        | `@font-size-md`      | -    |
| @button-default-color            | `@text-color`        | -    |
| @button-default-background-color | `@white`             | -    |
| @button-default-border-color     | `@border-color`      | -    |
| @button-primary-color            | `@white`             | -    |
| @button-primary-background-color | `@blue`              | -    |
| @button-primary-border-color     | `@blue`              | -    |
| @button-success-color            | `@white`             | -    |
| @button-success-background-color | `@green`             | -    |
| @button-success-border-color     | `@green`             | -    |
| @button-danger-color             | `@white`             | -    |
| @button-danger-background-color  | `@red`               | -    |
| @button-danger-border-color      | `@red`               | -    |
| @button-warning-color            | `@white`             | -    |
| @button-warning-background-color | `@orange`            | -    |
| @button-warning-border-color     | `@orange`            | -    |
| @button-border-width             | `@border-width-base` | -    |
| @button-border-radius            | `@border-radius-sm`  | -    |
| @button-round-border-radius      | `@border-radius-max` | -    |
| @button-ghost-background-color   | `transparent`        | -    |
| @button-disabled-opacity         | `@disabled-opacity`  | -    |
| @button-icon-size                | `1.2em`              | -    |
| @button-loading-icon-size        | `40 * @rpx`          | -    |

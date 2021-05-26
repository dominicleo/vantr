---
toc: false
title: Divider 分割线
nav:
  title: 组件
  path: /components
---

## Divider 分割线

用于将内容分隔为多个区域

<code src="./demo/index.tsx" hidden></code>

### 基础用法

默认渲染一条水平分割线

```tsx | pure
import * as React from 'react';
import { Divider } from 'vantr';

export default () => {
  return <Divider />;
};
```

### 展示文字

通过插槽在可以分割线中间插入内容

```tsx | pure
import * as React from 'react';
import { Divider } from 'vantr';

export default () => {
  return <Divider>文字</Divider>;
};
```

### 内容位置

通过 `position` 指定内容所在位置

```tsx | pure
import * as React from 'react';
import { Divider } from 'vantr';

export default () => {
  return (
    <>
      <Divider position='left'>文字</Divider>
      <Divider position='right'>文字</Divider>
    </>
  );
};
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线

```tsx | pure
import * as React from 'react';
import { Divider } from 'vantr';

export default () => {
  return <Divider dashed>文字</Divider>;
};
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式

```tsx | pure
import * as React from 'react';
import { Divider } from 'vantr';

export default () => {
  return (
    <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>文字</Divider>
  );
};
```

<API />

### 样式变量

组件提供了下列 [Less](https://lesscss.org/) 变量，可用于自定义样式

| 名称                         | 默认值            | 描述 |
| ---------------------------- | ----------------- | ---- |
| @divider-margin              | `@h-spacing-xl 0` | -    |
| @divider-text-color          | `@gray-6`         | -    |
| @divider-font-size           | `@font-size-md`   | -    |
| @divider-line-height         | `24px`            | -    |
| @divider-border-color        | `@border-color`   | -    |
| @divider-content-padding     | `@h-spacing-xl`   | -    |
| @divider-content-left-width  | `10%`             | -    |
| @divider-content-right-width | `10%`             | -    |

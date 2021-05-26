---
toc: false
title: Loading 加载
nav:
  title: 组件
  path: /components
---

## Loading 加载

加载图标，用于表示加载中的过渡状态

<code src="./demo/index.tsx" hidden></code>

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`

```tsx | pure
import * as React from 'react';
import { Loading } from 'vantr';

export default () => {
  return (
    <>
      <Loading />
      <Loading type='spinner' />
    </>
  );
};
```

### 自定义大小

通过 `size` 属性设置加载图标的大小

```tsx | pure
import * as React from 'react';
import { Loading } from 'vantr';

export default () => {
  return (
    <>
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
    </>
  );
};
```

### 加载文案

设置右侧插入加载文案

```tsx | pure
import * as React from 'react';
import { Loading } from 'vantr';

export default () => {
  return <Loading color='#1989fa'>加载中</Loading>;
};
```

垂直排列

```tsx | pure
import * as React from 'react';
import { Loading } from 'vantr';

export default () => {
  return <Loading vertical>加载中</Loading>;
};
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色

```tsx | pure
import * as React from 'react';
import { Loading } from 'vantr';

export default () => {
  return (
    <>
      <Loading color='#1989fa' vertical>
        加载中
      </Loading>
      <Loading type='spinner' color='#1989fa' vertical>
        加载中
      </Loading>
    </>
  );
};
```

<API />

### 样式变量

组件提供了下列 [Less](https://lesscss.org/) 变量，可用于自定义样式

| 名称                                | 默认值          | 描述 |
| ----------------------------------- | --------------- | ---- |
| @loading-text-color                 | `@gray-6`       | -    |
| @loading-text-font-size             | `@font-size-md` | -    |
| @loading-spinner-color              | `@gray-5`       | -    |
| @loading-spinner-size-sm            | `28 * @rpx`     | -    |
| @loading-spinner-size-md            | `40 * @rpx`     | -    |
| @loading-spinner-size-lg            | `46 * @rpx`     | -    |
| @loading-spinner-animation-duration | `0.8s`          | -    |

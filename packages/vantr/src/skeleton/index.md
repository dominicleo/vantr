---
toc: false
title: Skeleton 骨架屏
nav:
  title: 组件
  path: /components
---

## Skeleton 骨架屏

用于在内容加载过程中展示一组占位图形

<code src="./demo/index.tsx" hidden></code>

### 基础用法

默认显示标题和三行段落

```tsx | pure
import * as React from 'react';
import { Skeleton } from 'vantr';

export default () => {
  return <Skeleton />;
};
```

### 显示头像

通过 `avatar` 属性显示头像占位图

```tsx | pure
import * as React from 'react';
import { Skeleton } from 'vantr';

export default () => {
  return <Skeleton avatar />;
};
```

### 使用按钮占位

通过 `Skeleton.Button` 属性显示头像占位图

```tsx | pure
import * as React from 'react';
import { Skeleton } from 'vantr';

export default () => {
  return <Skeleton.Button size='sm' />;
};
```

<API />

### 样式变量

组件提供了下列 [Less](https://lesscss.org/) 变量，可用于自定义样式

| 名称                                 | 默认值                  | 描述 |
| ------------------------------------ | ----------------------- | ---- |
| @skeleton-paragraph-height           | `32 * @rpx`             |
| @skeleton-paragraph-background-color | `@active-color`         |
| @skeleton-paragraph-margin-top       | `@h-spacing-xl`         |
| @skeleton-title-width                | `40%`                   |
| @skeleton-avatar-size                | `64 * @rpx`             |
| @skeleton-avatar-background-color    | `@active-color`         |
| @skeleton-animation-duration         | `1.2s`                  |
| @skeleton-xs-button-size             | `@button-xs-size`       |
| @skeleton-sm-button-size             | `@button-sm-size`       |
| @skeleton-md-button-size             | `@button-md-size`       |
| @skeleton-lg-button-size             | `@button-lg-size`       |
| @skeleton-button-border-radius       | `@button-border-radius` |
| @skeleton-button-background-color    | `@active-color`         |
| @skeleton-image-size-base            | `96 * @rpx`             |

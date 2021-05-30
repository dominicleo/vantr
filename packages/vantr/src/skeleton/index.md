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

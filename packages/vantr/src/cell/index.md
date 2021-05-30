---
toc: false
title: Cell 单元格
nav:
  title: 组件
  path: /components
---

## Cell 单元格

单元格为列表中的单个展示项

<code src="./demo/index.tsx" hidden></code>

### 基础用法

`Cell` 可以单独使用，也可以与 `Cell.Group` 搭配使用 `Cell.Group` 可以为 `Cell` 提供上下外边框

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
    <Cell.Group>
      <Cell extra='内容'>单元格</Cell>
      <Cell brief='描述信息' extra='内容'>
        单元格
      </Cell>
    </Cell.Group>
  );
};
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
    <Cell.Group>
      <Cell extra='内容' size='large'>
        单元格
      </Cell>
      <Cell extra='内容' size='large' brief='描述信息'>
        单元格
      </Cell>
    </Cell.Group>
  );
};
```

### 展示箭头

可以通过 arrow 属性控制箭头方向

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
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
  );
};
```

### 分组标题

通过 `Cell.Group` 的 `title` 属性可以指定分组标题

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
    <>
      <Cell.Group title='分组1'>
        <Cell arrow>单元格</Cell>
      </Cell.Group>
      <Cell.Group title='分组2'>
        <Cell arrow>单元格</Cell>
      </Cell.Group>
    </>
  );
};
```

### 圆角

通过 `Cell.Group` 的 `radius` 属性设置圆角

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
    <Cell.Group radius>
      <Cell arrow>单元格</Cell>
      <Cell arrow>单元格</Cell>
    </Cell.Group>
  );
};
```

### 垂直居中对齐

通过 `align` 属性可以让 `Cell` 的左右内容都垂直居中对齐

```tsx | pure
import * as React from 'react';
import { Cell } from 'vantr';

export default () => {
  return (
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
  );
};
```

<API />

### 样式变量

组件提供了下列 [Less](https://lesscss.org/) 变量，可用于自定义样式

| 名称                          | 默认值                                      | 描述 |
| ----------------------------- | ------------------------------------------- | ---- |
| @cell-font-size               | `@font-size-md`                             | -    |
| @cell-line-height             | `48 * @rpx`                                 | -    |
| @cell-vertical-padding        | `20 * @rpx`                                 | -    |
| @cell-horizontal-padding      | `@h-spacing-xl`                             | -    |
| @cell-text-color              | `@text-color`                               | -    |
| @cell-background-color        | `@white`                                    | -    |
| @cell-border-color            | `@border-color`                             | -    |
| @cell-active-color            | `@active-color`                             | -    |
| @cell-required-color          | `@red`                                      | -    |
| @cell-brief-color             | `@gray-6`                                   | -    |
| @cell-brief-font-size         | `@font-size-sm`                             | -    |
| @cell-brief-line-height       | `@line-height-sm`                           | -    |
| @cell-brief-margin-top        | `@h-spacing-xs`                             | -    |
| @cell-extra-color             | `@gray-6`                                   | -    |
| @cell-icon-size               | `32 * @rpx`                                 | -    |
| @cell-right-icon-color        | `@gray-6`                                   | -    |
| @cell-large-vertical-padding  | `@h-spacing-lg`                             | -    |
| @cell-large-title-font-size   | `@font-size-lg`                             | -    |
| @cell-large-brief-font-size   | `@font-size-md`                             | -    |
| @cell-group-radius            | `@border-radius-lg`                         | -    |
| @cell-group-background-color  | `@white`                                    | -    |
| @cell-group-title-color       | `@gray-6`                                   | -    |
| @cell-group-title-padding     | `@h-spacing-xl @h-spacing-xl @h-spacing-md` | -    |
| @cell-group-title-font-size   | `@font-size-md`                             | -    |
| @cell-group-title-line-height | `32 * @rpx`                                 | -    |

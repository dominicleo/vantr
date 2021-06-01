---
toc: false
title: Grid 栅格
nav:
  title: 组件
  path: /components
---

## Grid 栅格

Grid 提供了 Row 和 Col 两个组件来进行行列布局

<code src="./demo/index.tsx" hidden></code>

### 基础用法

Layout 组件提供了 24 列栅格，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比

此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 `span` 相同

```tsx | pure
import * as React from 'react';
import { Row, Col } from 'vantr';

export default () => {
  return (
    <>
      <Row>
        <Col span={8}>span: 8</Col>
        <Col span={8}>span: 8</Col>
        <Col span={8}>span: 8</Col>
      </Row>
      <Row>
        <Col span={4}>span: 4</Col>
        <Col span={10} offset={4}>
          offset: 4, span: 10
        </Col>
      </Row>
      <Row>
        <Col offset={12} span={12}>
          offset: 12, span: 12
        </Col>
      </Row>
    </>
  );
};
```

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 `0`

```tsx | pure
import * as React from 'react';
import { Row, Col } from 'vantr';

export default () => {
  return (
    <Row gutter={20}>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
    </Row>
  );
};
```

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 `flex` 布局中的 `justify-content` 属性

```tsx | pure
import * as React from 'react';
import { Row, Col } from 'vantr';

export default () => {
  return (
    <>
      <Row justify='center'>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
      </Row>
      <Row justify='end'>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
      </Row>
      <Row justify='space-between'>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
      </Row>
      <Row justify='space-around'>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
        <Col span={6}>span: 6</Col>
      </Row>
    </>
  );
};
```

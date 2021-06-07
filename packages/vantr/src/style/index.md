---
toc: false
title: Style 内置样式
nav:
  title: 组件
  path: /components
---

## Style 内置样式

Vantr 中默认包含了一些常用样式，可以直接通过 className 的方式使用

<code src="./demo/index.tsx" hidden></code>

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现

```tsx | pure
import * as React from 'react';

export default () => {
  return (
    <>
      // 上边框
      <div class='vanr-hairline-top'></div>
      // 下边框
      <div class='vanr-hairline-bottom'></div>
      // 左边框
      <div class='vanr-hairline-left'></div>
      // 右边框
      <div class='vanr-hairline-right'></div>
      // 上下边框
      <div class='vanr-hairline-top-bottom'></div>
      // 全边框
      <div class='vanr-hairline-surround'></div>
    </>
  );
};
```

### 动画

可以通过 `rc-motion` 组件使用内置的动画

```tsx | pure
import * as React from 'react';
import CSSMotion from 'rc-motion';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <CSSMotion visible={visible} motionName='vanr-fade'>
      {({ className, style }) => (
        <div className={className} style={style}>
          Fade
        </div>
      )}
    </CSSMotion>
  );
};
```

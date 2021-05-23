---
title: 快速上手
order: 0
---

# 快速上手

通过本章节你可以了解到 Vantr 的安装方法和基本使用姿势

## 安装

可以通过 npm 或 yarn 进行安装

```bash
$ npm i vantr -S
# or
$ yarn add vantr -S
```

## 引入组件

```tsx | pure
import { Button } from 'vantr';

<Button>按钮</Button>;
```

vantr 严格按照 tree-shaking 开发模式，如上代码只会把 Button 相关代码打包

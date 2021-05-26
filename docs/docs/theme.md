---
title: 定制主题
---

# 快速上手

Vantr 提供了一套默认主题，如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制

## 样式变量

Vantr 使用了 [Less](https://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的基础样式变量，组件的样式变量请参考

```less
@vanr-prefix: vanr;

@hd: 1px;
@rpx: 0.5 * @hd;

// Color Palette
@black: #000;
@white: #fff;
@gray-1: #f7f8fa;
@gray-2: #f2f3f5;
@gray-3: #ebedf0;
@gray-4: #dcdee0;
@gray-5: #c8c9cc;
@gray-6: #969799;
@gray-7: #646566;
@gray-8: #323233;
@red: #ee0a24;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;

// Gradient Colors
@gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
@gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
@text-color: @gray-8;
@active-color: @gray-2;
@active-opacity: 0.7;
@disabled-opacity: 0.4;
@background-color: @gray-1;
@background-color-light: #fafafa;
@text-link-color: #576b95;

//水平间距
@h-spacing-xs: 8 * @rpx;
@h-spacing-sm: 12 * @rpx;
@h-spacing-md: 16 * @rpx;
@h-spacing-lg: 24 * @rpx;
@h-spacing-xl: 32 * @rpx;

//垂直间距
@v-spacing-xs: 8 * @rpx;
@v-spacing-sm: 12 * @rpx;
@v-spacing-md: 16 * @rpx;
@v-spacing-lg: 24 * @rpx;
@v-spacing-xl: 32 * @rpx;

// Font
@font-size-xs: 20 * @rpx;
@font-size-sm: 24 * @rpx;
@font-size-md: 28 * @rpx;
@font-size-lg: 32 * @rpx;
@font-weight-bold: 500;
@line-height-xs: 28 * @rpx;
@line-height-sm: 36 * @rpx;
@line-height-md: 40 * @rpx;
@line-height-lg: 44 * @rpx;
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto,
  'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
@ease-base-out: cubic-bezier(0.7, 0.3, 0.1, 1);
@ease-base-in: cubic-bezier(0.9, 0, 0.3, 0.7);
@ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
@ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
@ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
@ease-out-back: cubic-bezier(0.12, 0.4, 0.29, 1.46);
@ease-in-back: cubic-bezier(0.71, -0.46, 0.88, 0.6);
@ease-in-out-back: cubic-bezier(0.71, -0.46, 0.29, 1.46);
@ease-out-circ: cubic-bezier(0.08, 0.82, 0.17, 1);
@ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.34);
@ease-in-out-circ: cubic-bezier(0.78, 0.14, 0.15, 0.86);
@ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
@ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
@ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);

// Animation
@animation-duration-slow: 0.3s; // Modal
@animation-duration-base: 0.2s;
@animation-duration-fast: 0.1s; // Tooltip
@animation-timing-function-enter: ease-out;
@animation-timing-function-leave: ease-in;

// Border
@border-color: @gray-3;
@border-width-base: 1px;
@border-radius-xs: 2 * @rpx;
@border-radius-sm: 4 * @rpx;
@border-radius-md: 8 * @rpx;
@border-radius-lg: 16 * @rpx;
@border-radius-xl: 32 * @rpx;
@border-radius-circle: 50vh;
```

## 修改样式变量

使用 [Less](https://lesscss.org/) 提供的 `modifyVars` 即可对变量进行修改

### webpack 配置

```ts
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              // 直接覆盖变量
              'text-color': '#111',
              'border-color': '#eee',
              // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
              hack: `true; @import "your-less-file-path.less";`,
            },
          },
        },
      ],
    },
  ],
};
```

### umijs 配置

```ts
// .umirc
export default {
  theme: {
    '@text-color': '#111',
    '@border-color': '#eee',
  },
};
```

### vite 配置

```ts
// vite.config.ts
export default {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'text-color': '#111',
          'border-color': '#eee',
        },
      },
    },
  },
};
```

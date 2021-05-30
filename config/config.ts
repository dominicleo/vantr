import { defineConfig } from 'umi';

const navs = [
  {
    title: '文档',
    path: '/docs',
  },
  {
    title: '组件',
    path: '/components',
  },
  {
    title: 'Github',
    path: 'https://github.com/dominicleo/vantr',
  },
];

const components = [
  {
    title: '通用',
    children: ['button', 'cell', 'flex'],
  },
  {
    title: '反馈',
    children: ['loading', 'swipe-action'],
  },
  {
    title: '展示',
    children: ['divider', 'skeleton'],
  },
  {
    title: '其他',
    children: ['tracker'],
  },
];

export default defineConfig({
  title: 'Vantr',
  outputPath: 'build',
  mode: 'site',
  exportStatic: {},
  hash: true,
  logo: 'https://img.yzcdn.cn/vant/logo.png',
  favicon: 'https://img.yzcdn.cn/vant/logo.png',
  locales: [['zh-CN', '中文']],
  navs,
  menus: { '/components': components },
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  styles: [
    `
    .__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background: #fff;
      padding: 0 !important;
      overflow: hidden;
      font-size: 0.26rem;
    }
    .__dumi-default-device-status {
      border-bottom: 1px solid #e3e3e3;
    }
    .__dumi-default-mobile-previewer {
      font-size: initial;
    }
    .__dumi-default-layout-features {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .__dumi-default-device-status::before {
      content: 'Vantr';
      display: inline-block;
      width: 60px;
    }
    .__dumi-default-device-status span:first-child {
      display: none;
    }
  `,
  ],
  extraBabelPlugins: ['version'],
});

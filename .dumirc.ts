import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/LHooks',
  publicPath: '/LHooks/',
  outputPath: 'dist',
  favicons: ['/LHooks/logo.svg'],
  themeConfig: {
    name: 'LHooks',
    logo: '/LHooks/logo.svg',
    github: 'https://github.com/Peek-A-Booo/LHooks',
    hero: {
      actions: [
        { text: '开始使用', link: '/hooks' },
        { text: 'Github', link: 'https://github.com/Peek-A-Booo/LHooks' },
      ],
      features: [
        { title: '开箱即用', description: '使用简单，安装即使用' },
        {
          title: '类型丰富',
          description: '包含了常用的基础Hooks，能够减少项目开发时间，提升摸鱼效率',
        },
        { title: 'TypeScript', description: '使用 TypeScript 构建，提供完整的类型定义文件' },
        {
          title: '文档齐全',
          description: '功能文档内容详尽，包含各种配置参数，还附带demo调用演示',
        },
        { title: '定期更新', description: '后续会长期更新和维护，不断的添加好用的Hooks' },
      ],
    },
  },
});

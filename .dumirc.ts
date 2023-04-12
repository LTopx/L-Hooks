import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  favicons: ['/logo.svg'],
  themeConfig: {
    name: 'LHooks',
    logo: '/logo.svg',
    github: 'https://github.com/Peek-A-Booo/LHooks',
    hero: {
      actions: [
        { text: '开始使用', link: '/hooks' },
        { text: 'Github', link: 'https://github.com/Peek-A-Booo/LHooks' },
      ],
      features: [
        {
          title: '开箱即用',
          description: '使用简单，安装即使用',
          image: 'https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/hooks/box.png',
        },
        {
          title: '类型丰富',
          description: '包含了常用的基础Hooks，能够减少项目开发时间，提升摸鱼效率',
          image: 'https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/hooks/rich.png',
        },
        {
          title: 'TypeScript',
          description: '使用 TypeScript 构建，提供完整的类型定义文件',
          image: 'https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/hooks/typescript.png',
        },
        {
          title: '文档齐全',
          description: '功能文档内容详尽，包含各种配置参数，还附带demo调用演示',
          image: 'https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/hooks/doc.png',
        },
        {
          title: '定期更新',
          description: '后续会长期更新和维护，不断的添加好用的Hooks',
          image: 'https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/hooks/date.png',
        },
      ],
    },
    footerConfig: {
      bottom: 'LHooks Created by Peek-A-Booo',
      theme: 'dark',
      columns: [
        {
          title: '相关资源',
          items: [
            {
              title: 'Ant Design Pro',
              url: 'https://pro.ant.design',
              openExternal: true,
            },
            {
              title: 'Ant Design Pro Components',
              url: 'https://procomponents.ant.design',
              openExternal: true,
            },
            {
              title: 'Umi',
              description: 'React 应用开发框架',
              url: 'https://umijs.org',
              openExternal: true,
            },
            {
              title: 'Dumi',
              description: '组件/文档研发工具',
              url: 'https://d.umijs.org',
              openExternal: true,
            },
            {
              title: 'qiankun',
              description: '微前端框架啊啊啊',
              url: 'https://qiankun.umijs.org',
              openExternal: true,
            },
          ],
        },
      ],
    },
  },
});

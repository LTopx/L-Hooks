import {
  CopyrightOutlined,
  GithubOutlined,
  HistoryOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import { Footer } from 'dumi-theme-antd-style';
import React from 'react';

const footer = [
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
        description: '微前端框架',
        url: 'https://qiankun.umijs.org',
        openExternal: true,
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        icon: <MediumOutlined />,
        title: 'Medium',
        url: 'http://medium.com/ant-design/',
        openExternal: true,
      },
      {
        icon: <TwitterOutlined style={{ color: '#1DA1F2' }} />,
        title: 'Twitter',
        url: 'http://twitter.com/antdesignui',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: 'Ant Design 语雀专栏',
        url: 'https://yuque.com/ant-design/ant-design',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{ color: '#056de8' }} />,
        title: 'Ant Design 知乎专栏',
        url: 'https://www.zhihu.com/column/c_1564262000561106944',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{ color: '#056de8' }} />,
        title: '体验科技专栏',
        url: 'http://zhuanlan.zhihu.com/xtech',
        openExternal: true,
      },
    ],
  },
  {
    title: '帮助',
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/Peek-A-Booo/LHooks',
        openExternal: true,
      },
      {
        icon: <HistoryOutlined />,
        title: '更新日志',
        url: '/LHooks/change-log',
      },
    ],
  },
  {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
        alt="more products"
      />
    ),
    title: '更多产品',
    items: [
      {
        icon: (
          <img
            src="https://l-resource-1258217390.cos.ap-shanghai.myqcloud.com/icon/logo.svg"
            alt="ltops"
          />
        ),
        title: 'LTops',
        url: 'https://ltops.cn',
        description: '一款好用的浏览器桌面',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
            alt="AntV"
          />
        ),
        title: 'AntV',
        url: 'https://antv.vision',
        description: '数据可视化解决方案',
        openExternal: true,
      },
      {
        icon: <img src="https://www.eggjs.org/logo.svg" alt="Egg" />,
        title: 'Egg',
        url: 'https://eggjs.org',
        description: '企业级 Node.js 框架',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
            alt="kitchen"
          />
        ),
        title: 'Kitchen',
        description: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com',
        openExternal: true,
      },
    ],
  },
];

export default () => {
  return (
    <Footer
      bottom={
        <>
          Copyright <CopyrightOutlined style={{ fontSize: 13 }} /> 2023 LHooks
        </>
      }
      columns={footer}
    />
  );
};

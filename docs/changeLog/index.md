---
nav:
  title: 更新日志
  order: 1
toc: content
---

# 更新日志

主要记录一下各个版本的变更记录

## 发布周期

🎉🎉 看心情 🎉🎉

## 0.4.6

`2023-06-21`

### Changed

- 调整 useClipboard 实现，新增 isCopied 状态

## 0.4.5

`2023-04-24`

### Changed

- 调整 useClipboard 实现，兼容 navigator 和 textarea 两种方式

## 0.4.4

`2023-04-12`

### Fixed

- 修复 useAtom 和 useLocalAtom 新老值的比较逻辑问题

### Add

- useFetch 新增支持设置 timeout，默认 60000ms

## 0.4.1

`2023-04-05`

### Changed

- 优化 useClipboard 多次调用时，可能会多次无效重新创建分配内存导致影响性能表现的问题

## 0.4.0

> 不知道为什么 0.1.0/0.2.0/0.3.0 在 21 年就被发布了，明明这个库是 23 年才开始的 😳

`2023-04-01`

### Changed

- 调整 atom hooks 的名称，统一内部代码实现结构

## 0.0.45

### Fixed

- 修复 useLocalState 采用(prevState: T) => T 更新时读取 localstorage 值一直为初始记录值的问题

## 0.0.41

`2023-03-31`

### Add

- useFetch 新增 beforeFetch 方法支持在请求前对请求配置和参数进行处理
- 新增 useLocalState，可将状态与 localstorage 结合进行持久化管理
- 新增 useUpdate,可以强制重新渲染当前页面
- 新增 useAtom，可原子化管理页面状态

### Changed

- 将 useLocalState 内部替换为 useAtom 实现

## 0.0.35

`2023-03-23`

### Fixed

- 修复 useNow 默认值为 undefined 的问题，修改默认值为调用时当前时间
- 修复 useNow pause, resume 方法可能会多次无效重新创建分配内存导致影响性能表现的问题
- 修复 useDateFormat 方法可能会多次无效重新创建分配内存导致影响性能表现的问题
- 修复 useCalendar 方法可能会多次无效重新创建分配内存导致影响性能表现的问题
- 修复 useFetch 方法可能会多次无效重新创建分配内存导致影响性能表现的问题
- 修复 useTimeout,useInterval 方法可能会多次无效重新创建分配内存导致影响性能表现的问题

### Add

- useFetch 新增可配置 pumb 方法处理响应流数据
- useDateFormat 新增支持手动调用

## 0.0.23

`2023-03-16`

### Add

- 新增 useTimeout，可快速管理实现 setTimeout
- 新增 useInterval，可快速管理实现 setInterval

## 0.0.22

`2023-03-14`

### Fixed

- 修复 useFetch 在部分错误码依旧可以 resolve 的情况，改为通过 response.ok 判断

### Add

- 新增 useNow，可快速获取当前时间
- 新增 useDateFormat，可按照指定格式快速格式化时间

### Changed

- 完善 useDateFormat 文档，添加“星期”文档注释

## 0.0.14

`2023-03-10`

### Add

- 新增 useCalendar，可以快速将标准时间格式转换为中国农历节气

## 0.0.9

`2023-03-09`

### Fixed

- 优化 useFetch headers 默认值为空，解决部分 get 请求使用默认"Content-Type: application/json"时出错问题

### Add

- useFetch 新增 cancel 方法，支持取消请求

### Changed

- 优化项目结构，调整打包产出

## 0.0.6

`2023-03-07`

### Add

- 新增 useFetch
- 新增 useClipboard

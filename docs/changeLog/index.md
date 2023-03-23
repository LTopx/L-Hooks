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

## 0.0.28

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

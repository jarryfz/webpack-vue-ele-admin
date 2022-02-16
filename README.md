# webpack-vue-ele-admin
## 介绍

在参与公司Vue项目开发与维护的过程中发现，很多中后台项目使用的技术和框架都不一致，而这些项目大多数的业务都是类似的，没有使用统一规范和框架，比如有的项目用vue-cli脚手架、有的用Webpack集成Vue、有的Vue2通过插件使用Vue3的写法，增加了公司前端项目开发和维护成本；所以想着去集成一个Vue2.x项目，可以适用于大部分公司的中后台产品需求。

### 为什么不使用Vue3？

之所以不用最新的Vue3构建项目是因为公司的产品需要兼容IE10+，而最新的Vue3尤大大已经明确没有做兼容IE，而且Vue2的生态、插件、组件也更加成熟一点。

webpack-vue-ele-admin 是一套基于 webpack5 + vue2.x + element-ui后台集成方案，内置路由、权限验证，丰富的功能组件，可以在此基础上进行项目开发。它既可以作为学习webpack配置也可以用于搭建企业级中后台产品

此项目已经支持IE10+

## 项目启动

首先需要本地安装[node](https://nodejs.org/en/)和[git](https://git-scm.com/)。本项目技术栈基于[ES2015+](https://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh/guide/)、[vue-router](https://router.vuejs.org/zh/)、[axios](https://github.com/axios/axios)和[element-ui](https://github.com/ElemeFE/element)，提前了解和学习这些知识会对使用本项目有很大的帮助。

npm install 安装依赖
npm run start 启动（webpack-dev-server）

## 目录结构

``` sh
.
├── build # webpack相关配置
├── config # 环境变量配置
├── public # 静态资源
├── src # 项目代码
│   ├── assets # 静态资源
│   ├── cache # 本地存储
│   ├── components # 公用组件
│   ├── element  # 按需引入element-ui
│   ├── layout # 布局
│   ├── router # 路由配置
│   ├── store # 状态管理
│   ├── styles # 全局样式
│   ├── utils # 全局工具类
│   ├── views # 路由页面
│   ├── App.vue # 入口vue文件
│   ├── index.js # 主入口文件
├── .babelrc # babel配置
├── .eslintignore # eslint 忽略配置项
├── .eslintrc # eslint 配置文件
├── postcss.config.js # postcss 配置文件
├── package.json
├── README.md
```

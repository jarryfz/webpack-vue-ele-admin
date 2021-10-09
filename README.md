# webpack-vue-ele-admin
## 介绍

首先说一下，本项目之所以不使用vue-cli官方脚手架，是因为不想离开了脚手架就写不了代码，并且为了去熟悉了解webpack配置，也就决定只使用webpack去集成vue2.x项目

webpack-vue-ele-admin 是一套基于 webpack5 + vue2.x + element-ui后台集成方案，内置路由、权限验证，丰富的功能组件，可以在此基础上进行项目开发。它既可以作为学习webpack配置也可以用于搭建企业级中后台产品

此项目已经支持IE10+

## 项目启动

首先需要本地安装[node](https://nodejs.org/en/)和[git](https://git-scm.com/)。本项目技术栈基于[ES2015+](https://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh/guide/)、[vue-router](https://router.vuejs.org/zh/)、[axios](https://github.com/axios/axios)和[element-ui](https://github.com/ElemeFE/element)，提前了解和学习这些知识会对使用本项目有很大的帮助。

npm install 安装依赖
npm run start 启动（webpack-dev-server）

## 目录结构

``` sh
.
├── public # 静态资源
├── src # 项目代码
│   ├── assets # 静态资源
│   ├── components # 公用组件
│   ├── element  # 按需引入element-ui
│   ├── router # 路由配置
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
├── webpack.config.js # webpack配置文件
```

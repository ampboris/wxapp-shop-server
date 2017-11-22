# vue-koa2-blog

> **作者：ruiyong-lee**

> **创建时间：2017-08-31**

> **版权声明：本文为 ruiyong-lee 原创文章，可以随意转载，但必须在明确位置注明出处**

## 简介

本文可以说是我的处女作（很纯洁），大学那会学的基本都是后端语言，毕业后从事前端开发工作，
目前还是一名纯粹的前端小学僧（本人比较谦虚），本着将javascript进行到底的态度，决定开始学习nodejs，
本文也是我从零开始的一个记录，主要记录小程序商城demo后端开发过程，希望小伙伴们帮忙指正错误和不足，多谢~

## 准备

看了一些教程和文章，选择了[Koa](http://koa.bootcss.com) -- 基于 Node.js 平台的下一代 web 开发框架（官网文档还是1.0的，
可以参考 [《Koa2进阶学习笔记》](https://github.com/ChenShenhai/koa2-note) ），
目前的最新版本是2.3.0。

##### 开发环境、工具

- **node.js：** v8.4.0 （>= v7.6.0）

- **mysql：** v5.5.51

- **westorm：** 2017.2.2

- **Webstorm配置：** File - Settings - Languages & Frameworks - Node.js and NPM 里面的Node.js Core library 设置成 enabled ，这样就会有代码提示

##### 项目中一些关键依赖

以下依赖的版本都是本文所写的时候的最新版本

- **Koa(v2.3.0)**
- **Koa-Bodyparser(v4.2.0)**
- **Koa-Router(v7.2.1)**
- **Mysql(v2.14.1)** // nodejs的mysql驱动
- **Sequelize(v3.29.0)** // 操作数据库的ORM(对象关系映射 Object Relational Mapping)
- **eslint(v4.6.1)** // 代码检测工具

##### 目录结构

```
.
├── server // Koa后端代码目录
│   ├── controllers // 控制器目录
│   ├── models // 模型目录
│   ├── routes // 路由目录
│   └── schema // 数据库表结构目录
├── sql // 数据库初始化目录
│   ├── scripts // 数据库脚本目录
│   ├── util // 一些读取数据库脚本的工具目录
│   └── index.js // 初始化入口文件
├── app.js // koa 入口文件
├── config.js // 配置文件
├── .eslintrc.js // eslint配置文件
├── package.json // npm的依赖、项目信息文件
└── README.md
```

数据库新建：wechat-shop-demo
# 如何学习Vue2源码

## 背景

近期我们把微信公众平台管理端的前端框架切成MVVM架构，框架层面最终我们选择了 [Vue](https://github.com/vuejs/vue)，为了更了解Vue，阅读Vue源码是必要的。

我参考的Vue版本是 [2.2.0](https://github.com/vuejs/vue/tree/v2.2.0)，整个项目的代码1万2千行，如果不搞清楚原理，直接每一行看下来肯定会漏掉不少细节，或者对作者为什么这样写代码感到莫名其妙。

如此庞大的项目要啃下来并非易事，里边涉及到非常多的概念：Virtual Dom; 条件/列表渲染; 自定义组件; 双向绑定; 指令等等。

按照经验，编写这么庞大的系统，我们总是从第1行代码开始写起，慢慢写到第1万行，逐步构造出整个系统/框架。

所以我也会按照这个思路，从零开始构造出一个完整的Vue框架。

## 如何运行

使用webpack进行打包，源码采用ES6风格编写。

构建:  `npm install; webpack`

统计当前分支源码行数: `npm run line`

运行Demo: 直接使用 Chrome 打开 examples 目录里边的实例代码即可

## 如何阅读

建议按照下边顺序阅读，同时参考 [官方的教程](https://cn.vuejs.org/v2/guide/index.html) 配合理解。

我会把每个章节的 **源码行数** 以及 **对应的分支** 标记出来，方便大家可以看到每次源码变更的行数。

1. 第一章 构建一个简单的Vue
	* [1.1 Virtual DOM](./1.1.md)
		(源码总共231行，[查看代码](https://github.com/raphealguo/how-to-learn-vue2/tree/1.1))

		整个Vue的底层渲染机制是依赖VD的实现，因此先写一个极简的VD算法是非常不错的开头
  * [1.2 HTML parser](./1.2.md)

    (源码总共231行，[查看代码](https://github.com/raphealguo/how-to-learn-vue2/tree/1.2)，[查看新增代码](https://github.com/raphealguo/how-to-learn-vue2/compare/1.1...1.2))

    每次手工构造一个 VNode 树效率非常低，而且可读性差，因此这一节会构造一个解释器，能把 HTML 字符串转化成 VNode树

## 关于我

博客：[http://rapheal.sinaapp.com/](http://rapheal.sinaapp.com/)

微博：[@raphealguo](http://weibo.com/p/1005051628949221)
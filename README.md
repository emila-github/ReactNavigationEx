## 快速开始 ##

### 安装脚手架 ###

Yarn、React Native的命令行工具（react-native-cli）

Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

	npm install -g yarn react-native-cli

### 初始化项目 ###

	react-native init ReactNavigationEx
	cd ReactNavigationEx
	react-native run-android

### 报错处理 ###

- window系统中，修改 `node_modules/jest-haste-map/build/crawlers/watchman.js` 中 `else if (!ignore(name)) {` 添加  `name = name.replace('/', '\\');`


### 安装React Navigation ###

	npm install --save react-navigation


## 参考资料 ##

- [搭建开发环境](http://reactnative.cn/docs/0.42/getting-started.html)
- [官方文档](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/docs/intro/)




# 外卖App

## 源码项目说明
	app    客户端应用（vue + vuex 搭建
	serve    服务端应用（koa搭建

## 运行说明
### 1. 准备
	1) 确保安装了node环境
		查看是否已经安装: node -v

	2) 确保安装了mongodb, 并启动了对应的服务
		mongod -version  查看版本
		mongo 启动对应服务
		exit 退出
	
### 2. 启动后台应用
	1). 进入serve
	2). 执行命令: npm start

### 3. 启动前台应用并访问
	1). 进入app
	2). 执行命令: npm run serve

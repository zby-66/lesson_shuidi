## docker 基本概念
- mongodb  nosql  数据库  
- docker 集装箱 一家公司的开发环境迅速上线的核武器 解决了开发环境问题 
- docker pull image 
    镜像
- docker run -p 27017:27017 --name mongo -d 18400f87db91(ID)
    运行镜像 -p 端口 --name 运行容器名字 
- docker ps -a 查看正在运行的容器
- docker exec -it mongo mongo
    -it 命令行的交互 mongo 镜像 mongo 是-it 与其进行交互的脚本
    简版的Linux  

## mongodb shell交互
-  use tutorial;新建一个数据库
- db.users.insert({username: 'smith'});
- show collections;
- db.users.find({})
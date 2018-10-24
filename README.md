## How to run the project

To run the project in the **development mode**, follow the instructions below:

Download or clone the repository in your computer:
```
$ git clone https://github.com/dimikara/React-Neighborhood-Map-3.git
```
In the repository folder:
* install project dependencies with
```
npm install

```
* start the development server with
```
npm start
```

## Credits & Helpful Links
* how to use fetch api to get date [fetch api information](https://developer.foursquare.com/docs/api/venues/explore)

node
另外，提醒一下的是，要在生产版本下离线访问功能才会正确生效哦，参考如下步骤测试离线访问情况：

首先，在命令行里 cd 到项目所在目录，然后运行如下命令构建生产代码：

npm run build
构建完成之后，根据提示，运行如下命令来启动应用：

serve -s build
注，如果没有安装 serve 包，记得通过 npm install -g serve 命令安装
然后就可以打开命令行给出的地址（比如 http://localhost:5000/）启动啦，就可以看到已经缓存我们需要的资源，参考如下截图：

## Screenshot
![Screenshot](./src/readmepicture/mapPicture.png "picture for map")
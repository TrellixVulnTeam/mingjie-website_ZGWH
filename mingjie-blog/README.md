# This is **Mingjie Wang**'s personal blog; built in Hexo

## **1. How to install Hexo**
[hexo installation document](https://hexo.io/docs/#Install-Hexo)

### Make sure Node is installed by checking
```
$ node -v
```

### Install Hexo
```
$ npm install -g hexo-cli
```
#### if you run into permission problem, run
```
$ sudo npm install -g hexo-cli
```

### Once installed, you can check Hexo:
```
$ hexo -v
```

### After that, you can run hexo via command
```
$ npx hexo <command>
```

## **2. How to create a Hexo Project**
[hexo setup document](https://hexo.io/docs/setup)
### Run the following commands to initialize Hexo in the target <folder>. (in this case, my project / folder is called **mingjie-blog**)
```
$ hexo init <folder>
$ cd <folder>
$ npm install
```
### we can run the following command to serve the hexo onto our local computer
> Remember to cd into the project
```
$ hexo server
```
### whats inside the hexo project
1. node_modules folder - packages installed and managed by NodeJS
2. scaffolds folder- templates used to create page
3. source folder- folder stores all the content
4. themes folder- stores the website theme (by default we are using the landscape theme)
5. _config.yml - maange all project properties

### **some usefull links**
**[configuration](https://hexo.io/docs/configuration)**

**[useful commands](https://hexo.io/docs/commands)**

## **3. Quick Start**

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

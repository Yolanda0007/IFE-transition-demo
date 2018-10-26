# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

本地有个master分支与远程master分支关联，但是如果需要在dev分支上开发，则需要在远程或者本地创建分支，并将远程dev分支与本地dev分支关联

git branch -va 命令可以查看所有本地以及远程分支，但是不能直接切到远程分支上面，会造成head指针位于游离态.所以需要在本地创建一个dev分支，关联到远程dev分支上,
    git branch -vv
    可以查看本地分支与远程分支关联关系
一、远程没有dev分支,本地已经创建dev分支，在dev分支上，名字任意
    git push --set-upstream origin dev(远程分支)
    此时再对该分支执行push和pull就不需要在指定分支
二、远程已有dev分支，本地没有dev分支
    git checkout --track origin/dev，本地的名字也叫dev
    如果取个不同名字，则可以使用
    git checkout -b new-branch branch
    根据原分支创建新的分支
    如果根据的是远程分支，则会自动追踪该变化，自动同步。尽量同名
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
本地有个master分支与远程master分支关联，但是如果需要在dev分支上开发，则需要在远程或者本地创建分支，并将远程dev分支与本地dev分支关联

git branch -va 命令可以查看所有本地以及远程分支，但是不能直接切到远程分支上面，会造成head指针位于游离态.所以需要在本地创建一个dev分支，关联到远程dev分支上
一、远程没有dev分支
       
二、远程已有dev分支
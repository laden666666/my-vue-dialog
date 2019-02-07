
# my-vue-dialog

简称MyDailog，是一个基于[Vue](https://cn.vuejs.org "") 模态对话框控件，主要有如下特点：


## 特点
*   编程式的对话框创建
*   使用动态组件创建对话框
*   提供对话框关闭验证
*   更好的对话框编程体验


## 兼容性

### Vue版本兼容性

目前MyDailog仅兼容版本2.5.0及以上的Vue。



### 浏览器兼容性
<table cellspacing="1" style="margin: 0 auto;font-size: 14px;background-color: #f9f9f9;color: #036;padding: 3px;border-radius: 4px;border: 1px solid rgba(220, 220, 220, .5);">
    <colgroup width="100" span="7" align="center"></colgroup>
    <tr style="height: 30px;">
        <th align="center">IE</td><th align="center">edge</td><th align="center">Chrome</td><th align="center">safari</td><th align="center">firefox</td><th align="center">android</td><th align="center">IOS</td>
    </tr>
    <tr style="color: #000;line-height: 28px;font-weight: bold;">
        <td align="center" style="background-color: #60d848">>= 9</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">>= 4.4</td><td align="center" style="background-color: #60d848">>= 9.0</td>
    </tr>
</table>


## 安装

### CDN 引入

通过[unpkg.com/my-vue-dialog](unpkg.com/my-vue-dialog "") 可以访问MyDailog最新版本的资源，在页面上引入js和css文件即可开始使用：

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/my-vue-dialog@0.0.1/dist/my-vue-dialog.css">
<!-- import my-vue-dialog -->
<script src="unpkg.com/my-vue-dialog"></script>
```


### npm和webpack引入

执行：

```shell
npm install my-vue-dialog -S
```

然后在webpack环境中引入

```javascript
import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'
```



## 初始化

先使用Vue.use引入控件的插件，在创建vue的时候，使用myDialog属性，声明使用控件。例：

```javascript
import Vue from 'vue'
import MyDialogPlugin from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

vue.use(MyDialogPlugin)

new Vue({
    el: '#app',
    template: '...',
    // 使用myDialog属性，声明使用控
    myDialog: {}
})

```
> 注意：如果new Vue时候未设置myDialog，My-Vue-Dialog将无法使用。



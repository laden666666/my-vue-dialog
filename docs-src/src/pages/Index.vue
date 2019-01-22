<template>
    <Doc>
        <H1>my-vue-dialog</H1>
        <P><Strong>my-vue-dialog</Strong>是一个模态对话框控件，主要有如下特点：</P>
        <H2>特点</H2>
        <Li>编程式的对话框创建</Li>
        <Li>使用动态组件创建对话框</Li>
        <Li>提供对话框关闭验证</Li>
        <Li>更好的对话框编程体验</Li>

        <H2>兼容性</H2>
        <Li>Vue >= v2.5.0</Li>
        <Li>IE >= 9</Li>
        <Li>Chrome >= 40</Li>
        <Li>安卓 >= 4.4</Li>
        <Li>IOS >= 9.0</Li>

        <H2>安装</H2>
        <H3>CDN 引入</H3>
        <P>通过<A href="unpkg.com/my-vue-dialog">unpkg.com/my-vue-dialog</A>可以访问<Strong>my-vue-dialog</Strong>最新版本的资源，在页面上引入js和css文件即可开始使用：</p>
        <Code :code="cdn" lang="html"></Code>
        
        <H3>npm和webpack引入</H3>
        <P>执行：</p>
        <Code code="npm install my-vue-dialog -S" lang="shell"></Code>
        <P>然后在webpack环境中引入</P>
        <Code :code="
`import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'`" lang="javascript"></Code>

        <H2>初始化</H2>
        <P>先使用<Strong>Vue.use</Strong>引入控件的插件，在创建vue的时候，使用<Strong>myDialog属性</Strong>，声明使用控件。例：</P>
        <Code :code="
`import Vue from 'vue'
import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

vue.use(MyDialog)

new Vue({
    el: '#app',
    template: '...',
    // 使用myDialog属性，声明使用控
    myDialog: {}
})
`" lang="javascript"></Code>
        <P>注意：如果未设置myDialog，My-Vue-Dialog将无法使用。</P>
    </Doc>
</template>
<script>
export default {
    data(){
        return {
            cdn:
`<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"><\/script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/my-vue-dialog@0.0.1/dist/my-vue-dialog.css">
<!-- import my-vue-dialog -->
<script src="unpkg.com/my-vue-dialog"><\/script>`
        }
    }
}
</script>

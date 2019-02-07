<template>
    <Doc>
        <H1>my-vue-dialog</H1>
        <P>简称<Strong>MyDailog</Strong>，是一个基于<A href="https://cn.vuejs.org">Vue</A>模态对话框控件，主要有如下特点：</P>
        <H2>特点</H2>
        <Li>编程式的对话框创建</Li>
        <Li>使用动态组件创建对话框</Li>
        <Li>提供对话框关闭验证</Li>
        <Li>更好的对话框编程体验</Li>

        <H2>兼容性</H2>
        <H3>Vue版本兼容性</H3>
        <P>目前<Strong>MyDailog</Strong>仅兼容<Strong>版本2.5.0及以上的Vue</Strong>。</P>
        <Alert>如果用户有兼容性需求，我们可以考虑向上兼容到2.3.0以上版本的Vue。如果需要请在issue里面或者评论中留言。</Alert>
        <H3>浏览器兼容性</H3>
        <BrowserList IE=">= 9" edge Chrome safari firefox android=">= 4.4" IOS=">= 9.0"></BrowserList>

        <H2>安装</H2>
        <H3>CDN 引入</H3>
        <P>通过<A href="unpkg.com/my-vue-dialog">unpkg.com/my-vue-dialog</A>可以访问<Strong>MyDailog</Strong>最新版本的资源，在页面上引入js和css文件即可开始使用：</p>
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
import MyDialogPlugin from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

vue.use(MyDialogPlugin)

new Vue({
    el: '#app',
    template: '...',
    // 使用myDialog属性，声明使用控
    myDialog: {}
})
`" lang="javascript"></Code>
        <Alert>注意：如果new Vue时候未设置myDialog，My-Vue-Dialog将无法使用。</Alert>
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

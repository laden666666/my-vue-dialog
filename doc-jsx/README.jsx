<doc>
        <h1>my-vue-dialog</h1>
        <p>简称<span>MyDailog</span>，是一个基于<a href="https://cn.vuejs.org">Vue</a>模态对话框控件，主要有如下特点：</p>
        <h2>特点</h2>
        <li>编程式的对话框创建</li>
        <li>使用动态组件创建对话框</li>
        <li>提供对话框关闭验证</li>
        <li>更好的对话框编程体验</li>

        <h2>兼容性</h2>
        <h3>Vue版本兼容性</h3>
        <p>目前<span>MyDailog</span>仅兼容<span>版本2.5.0及以上的Vue</span>。</p>
        <h3>浏览器兼容性</h3>
        <browser-list IE=">= 9" edge Chrome safari firefox android=">= 4.4" IOS=">= 9.0"></browser-list>
    
        <h2>使用文档</h2>
        <p>请参考<a href="https://laden666666.github.io/my-vue-dialog/">https://laden666666.github.io/my-vue-dialog/</a></p>

        <h2>源码</h2>
        <p><a href="https://github.com/laden666666/my-vue-dialog">github</a>，<a href="https://gitee.com/laden666666/my-vue-dialog">码云</a></p>

        <h2>安装</h2>
        <h3>CDN 引入</h3>
        <p>通过<a href="unpkg.com/my-vue-dialog">unpkg.com/my-vue-dialog</a>可以访问<span>MyDailog</span>最新版本的资源，在页面上引入js和css文件即可开始使用：</p>
        <code lang="html">{
`<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"><\/script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/my-vue-dialog@0.0.1/dist/my-vue-dialog.css">
<!-- import my-vue-dialog -->
<script src="unpkg.com/my-vue-dialog"><\/script>`
        }</code>
        
        <h3>npm和webpack引入</h3>
        <p>执行：</p>
        <code lang="shell">npm install my-vue-dialog -S</code>
        <p>然后在webpack环境中引入</p>
        <code lang="javascript">{
`import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'`
        }</code>

        <h2>初始化</h2>
        <p>先使用<span>Vue.use</span>引入控件的插件，在创建vue的时候，使用<span>myDialog属性</span>，声明使用控件。例：</p>
        <code lang="javascript">{
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
`       }</code>
        <blockquote>注意：如果new Vue时候未设置myDialog，My-Vue-Dialog将无法使用。</blockquote>
    </doc>
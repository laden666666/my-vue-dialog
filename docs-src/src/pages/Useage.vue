<template>
    <Doc>
        <H1>使用</H1>

        <H2>$MyDialog创建对话框</H2>
        <P>初始化MyDialog后，Vue原型上会增添一个$MyDialog属性，通过该属性的open方法可以创建对话框。</P>
        <P>可以使用三种方式创建对话框，分别是Vue的component、一个template字符串、一个Vue的render函数。</P>

        <H3>用vue文件做对话框内容</H3>
        <P>这是<Strong>my-vue-dialog</Strong>最推荐的方法，尤其对于创建非常复杂的对话框时候非常有用。使用vue文件(vue的sfc控件)做对话框内容：</P>
        <Demo :demo="Open2" title="用vue文件做对话框内容" :code="open2Code">
            <P>使用component创建对话框，这里用一个vue文件做componentOptions。</P>
        </Demo>

        <H3>用json做对话框内容</H3>
        <P>除了用一个vue文件外创建对话框外，还可以我们可以用一个javascript对象做为componentOptions，该方法同样属于基于Vue的component做对话框内容，但是比vue文件简单。例：</P>
        <Demo :demo="Open" title="用json做对话框内容">
            <P>使用component创建对话框，这里用一个json对象做Vue的componentOptions。</P>
        </Demo>

        <H3>用字符串做对话框内容</H3>
        <P>对于简单的对话框，可以将Vue的componentOptions简略一个Vue的template字符串，如：</P>
        <Demo :demo="MyString" title="用字符串做对话框内容">
            <P>使用字符串创建对话框。</P>
        </Demo>

        <H3>用render函数做对话框内容</H3>
        <P>我们也支持采用<A href="https://www.iviewui.com">iviewui</A>推荐的<A href="https://cn.vuejs.org/v2/guide/render-function.html">Vue的render函数</A>，这种方式更适合与jsx集成，如：</P>
        <Demo :demo="Render" title="用render函数做对话框内容">
            <P>使用render函数做对话框内容，也可以用Vue的jsx编译生成render函数。</P>
        </Demo>
        
        <H2>$myDialog</H2>
        <P>被打开的对话框，会增添一个$myDialog属性，通过该属性关闭对话框、修改标题、对户框尺寸等功能。</P>

        <H3>关闭对话框</H3>
        <Demo :demo="Close" title="关闭对话框">
            <P>注意使用$myDialog.close()关闭对话框。</P>
        </Demo>

        <H3>设置对户框标题</H3>
        <Demo :demo="Title" title="设置对户框标题">
            <P>注意使用$myDialog.setTitle()设置标题。</P>
        </Demo>

        <H3>设置对话框大小</H3>
        <Demo :demo="Resize" title="设置对户框大小">
            <P>您可以使用使用$myDialog.reasize()同时修改宽和高</P>
            <P>您也使用使用$myDialog.setWidth()和$myDialog.setHeight()分别修改宽与高</P>
        </Demo>

        <H3>获取对话框初始配置</H3>
        <Demo :demo="Option" title="获取初始传入的配置(只读)">
            <P>注意使用$myDialog.getOption()获取初始传入的配置</P>
        </Demo>

        <H3>修改对话框内容</H3>
        <Demo :demo="content" title="修改对话框内容">
            <P>注意使用$myDialog.setContent()修改对话框内容</P>
        </Demo>
    </Doc>
</template>
<script>
import Open from '../demo/Useage/Open'
import Open2 from '../demo/Useage/Open2'
import MyString from '../demo/Useage/String'
import Render from '../demo/Useage/Render'
import Close from '../demo/Useage/Close'
import Title from '../demo/Useage/Title'
import Resize from '../demo/Useage/Resize'
import Option from '../demo/Useage/Option'
import content from '../demo/Useage/SetContent'
export default {
    data(){
        return {
            Open,
            Open2,
            MyString,
            Render,
            Close,
            Title,
            Resize,
            Option,
            content,
            open2Code: 
`SFC.vue:
<template>
    <div class="dialog-content">用JavaScript的json对象做componentOptions</div>
</template>
<script>
export default {
}
<\/script>

demo:
<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>
import SFC from "./SFC.vue";

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: SFC       
            })
        }
    }
}
<\/script>

`
        }
    }
}
</script>

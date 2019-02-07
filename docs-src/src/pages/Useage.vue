<template>
    <Doc>
        <H1>使用</H1>

        <H2>$MyDialog.open创建对话框</H2>
        <P>初始化MyDialog后，Vue原型上会增添一个$MyDialog属性，我们可以在Vue中通过使用<Strong>this.$MyDialog</Strong>访问到该对象。通过该对象的open方法可以创建对话框，创建时需要传入一个对话框配置项，这里介绍几个常用配置项，更多配置请参考<A href="#/API#DialogOption">DialogOption</A>。</P>
        <H3>content</H3>
        <P>这是定义对话框展示的内容，具体请参考<A href="#/Useage#定义对话框内容">定义对话框内容</A></P>
        
        <H3>设置标题</H3>
        <P>通过title互相设置对话框的标题</P>
        <Demo :demo="title" title="设置标题">
        </Demo>

        <H3>设置对话框的尺寸</H3>
        <P>通过width、height设置对话框的尺寸</P>
        <Demo :demo="size" title="设置对话框的尺寸">
        </Demo>

        <H2>定义对话框内容</H2>
        <P>可以使用多种方式定义对话框的内容，分别是Vue的component（SFC控件）、class类及装饰器、Vue.extend创建的子类、template字符串、Vue的render函数（jsx）。</P>

        <H3>用vue文件做对话框内容</H3>
        <P>这是<Strong>MyDailog</Strong>最推荐的方法，尤其对于创建非常复杂的对话框时候非常有用。使用vue文件定义控件(Vue的sfc控件)也是目前Vue最流行的定义控件方式。做对话框内容例子如下：</P>
        <Demo :demo="Open2" title="用vue文件做对话框内容" :code="open2Code">
            <P>使用component创建对话框，这里用一个vue文件做componentOptions。</P>
        </Demo>
        
        <H3>用class类及装饰器做对话框内容</H3>
        <P>Vue支持用官方的装饰器<A href="https://github.com/vuejs/vue-class-component">vue-class-component</A>及class语法创建控件，<Strong>MyDailog</Strong>也支持这种方式创建对话框</P>
        <Demo :demo="Open3" title="用class类及装饰器做对话框内容" :code="open3Code">
            <P>使用component创建对话框，这里用一个装饰器+class做componentOptions。</P>
        </Demo>

        <H3>用json做对话框内容</H3>
        <P>除了用一个vue文件外创建对话框外，还可以我们可以用一个javascript对象做为componentOptions，该方法同样属于基于Vue的component做对话框内容，但是比vue文件简单。例：</P>
        <Demo :demo="Open" title="用json做对话框内容">
            <P>使用component创建对话框，这里用一个json对象做Vue的componentOptions。</P>
        </Demo>
        <Alert>用json做对话框内容非常简单，因此文档的例子更多采用这种方式，但是我们最推荐的还是使用vue文件做对话框内容。</Alert>

        <H3>用Vue.extend创建的子类做对话框内容</H3>
        <P>在Vue中，我们可以使用<Strong>Vue.extend</Strong>创建子类，<Strong>MyDailog</Strong>也支持创建的子类做对话框内容。</P>
        <Demo :demo="Open4" title="Vue.extend扩展做对话框内容">
            <P>使用<Strong>Vue.extend</Strong>创建子类，并用其对话框内容。</P>
        </Demo>

        <H3>用字符串做对话框内容</H3>
        <P>对于简单的对话框，可以将Vue的componentOptions简略一个Vue的template字符串，如：</P>
        <Demo :demo="MyString" title="用字符串做对话框内容">
            <P>使用字符串创建对话框。</P>
        </Demo>

        <H3>用render函数做对话框内容</H3>
        <P>我们也支持采用<A href="https://www.iviewui.com">iviewui</A>推荐的<A href="https://cn.vuejs.org/v2/guide/render-function.html">Vue的render函数</A>，如：</P>
        <Demo :demo="Render" title="用render函数做对话框内容">
            <P>使用render函数做对话框内容。</P>
        </Demo>
        <P>这种方式更适合与jsx集成，我们推荐使用Vue的jsx编译生成render函数</P>
        <Demo :demo="JSXRender" title="用Vue的jsx编译生成render函数">
            <P>用Vue的jsx编译生成render函数</P>
        </Demo>
        
        <H2>$myDialog</H2>
        <P>被打开的对话框，会增添一个$myDialog属性，通过该属性关闭对话框、修改标题、修改对话框尺寸等功能。</P>

        <H3>关闭对话框</H3>
        <Demo :demo="Close" title="关闭对话框">
            <P>注意使用$myDialog.close()关闭对话框。</P>
        </Demo>

        <H3>设置对话框标题</H3>
        <Demo :demo="Title" title="设置对话框标题">
            <P>注意使用$myDialog.setTitle()设置标题。</P>
        </Demo>

        <H3>设置对话框大小</H3>
        <Demo :demo="Resize" title="设置对话框大小">
            <P>您可以使用使用$myDialog.reasize()同时修改宽和高</P>
            <P>您也使用使用$myDialog.setWidth()和$myDialog.setHeight()分别修改宽与高</P>
        </Demo>

        <H3>获取对话框初始配置</H3>
        <Demo :demo="Option" title="获取初始传入的配置(只读)">
            <P>注意使用$myDialog.getOption()获取初始传入的配置</P>
        </Demo>

        <H3>修改对话框内容</H3>
        <Demo :demo="SetContent" title="修改对话框内容">
            <P>注意使用$myDialog.setContent()修改对话框内容</P>
        </Demo>
    </Doc>
</template>
<script>
import Open from '../demo/Useage/Open'
import Open2 from '../demo/Useage/Open2'
import Open3 from '../demo/Useage/Open3'
import Open4 from '../demo/Useage/Open4'
import MyString from '../demo/Useage/String'
import Render from '../demo/Useage/Render'
import JSXRender from '../demo/Useage/JSXRender'
import Close from '../demo/Useage/Close'
import Title from '../demo/Useage/Title'
import Resize from '../demo/Useage/Resize'
import Option from '../demo/Useage/Option'
import SetContent from '../demo/Useage/SetContent'
import title from '../demo/Useage/options/title'
import size from '../demo/Useage/options/size'

export default {
    data(){
        return {
            title,
            size,
            Open,
            Open2,
            Open3,
            Open4,
            MyString,
            Render,
            JSXRender,
            Close,
            Title,
            Resize,
            Option,
            SetContent,
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
    <button class="button" @click="open">打开</button>
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

`,
            open3Code: 
`ClassComponent.js:
@Component({
    template: '<div class="dialog-content">用JavaScript的json对象做componentOptions</div>'
})
export default class ClassComponent extends Vue {
}

demo:
<template>
    <button class="button" @click="open">打开</button>
</template>
<script>
import ClassComponent from "./ClassComponent.js";

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: ClassComponent       
            })
        }
    }
}
<\/script>

`,
        }
    }
}
</script>

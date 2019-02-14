<template>
    <Doc>
        <H1>边界情况</H1>
        <P>对话框开发中，对话框父子控件调用、关闭对话框后传出返回值、关闭对话框关闭前校验、对话框打开对话框、对话框调试和热更新、与vuex和vue-router集成等问题，都是对话框开发的难点，此小节我们将重点讨论一下这些问题。</P>

        <H2>父子控件的props传值给对话框</H2>
        <P>参考Vue的<A href="https://cn.vuejs.org/v2/api/#propsData">propsData属性</A>，在创建对话框时候，父控件可以将对话框内容控件的props对应值通过该属性传入给子控件。</P>

        <Demo title="父控件通过propsData传值给子控件对应prop" :demo="propsData"></Demo>

        <H3>propsData传递可响应对象</H3>
        <P>propsData绑定并不是可响应的。如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</P>
        <P>如下例，我们分别传入原始类型的count和可响应的object。同时父控件会分别对这两个数据进行修改，注意object是可以传递给对话框中的子控件的，而count却无法响应。</P>
        <Demo title="propsData传递可响应对象" :demo="propsData2">
            <Alert>注意：对象类型的object是可响应的，而count是原始类型的，无法响应。</Alert>
        </Demo>
        
        <H3>将整个propsData设置为可响应对象</H3>
        <P>我们可以把整个propsData做成可响应对象，这样无论是原始类型数据还是引用类型数据都是可响应数据。</P>
        <Demo title="将整个propsData设置为可响应对象" :demo="propsData3">
        </Demo>
        
        <H3>内容是字符串或者render函数情况</H3>
        <P>如果内容不是一个控件，而只是一个没有字符串或者render函数，尽管他们没有props，但是仍然可以用propsData为其传值，如：</P>
        <Demo title="内容是字符串或者render函数情况" :demo="propsData4">
        </Demo>
        <P>如果是render函数，其实也可以不使用propsData，直接访问父控件的属性，如：</P>
        <Demo title="render函数中直接访问父控件的属性" :demo="propsData5">
        </Demo>
        <Alert>如果是render函数做对话框内容，我们更推荐使用箭头函数直接访问对话框内容，但是其他方式请不要这么使用。</Alert>
        
        <H2>关闭对话框后传出返回值</H2>
        <P>在对话框关闭后，我们需要子控件将值传递回父控件，通过<Strong>$myDialog.close</Strong>方法，可以将返回值传递出来。而在<Strong>onBeforeClose和onClose事件</Strong>中，返回值会以参数传递给父控件。</P>
        <Demo title="关闭对话框后传出返回值" :demo="close">
        </Demo>
        
        <H2>关闭对话框关闭前校验</H2>
        <P>在对话框关闭前，我们需要父控件对子控件的返回值做校验。可以在<Strong>onBeforeClose</Strong>中，对对话框的返回值做校验，如果校验失败可以返回<Strong>false</Strong>，阻止对话框关闭。</P>
        <Demo title="关闭对话框关闭前校验" :demo="beforeClose">
        </Demo>
        <Alert>注意：beforeClose支持异步函数（返回Promise）</Alert>

        <H2>对话框调试和热更新</H2>
        <H3>调试</H3>
        <P><Strong>MyDailog</Strong>与其他对话框控件不同，<Strong>MyDailog</Strong>会在Vue的根实例插入一个<Strong>MyDialogList</Strong>节点，所有的对话框都会放入这个节点中。在使用<A href="https://github.com/vuejs/vue-devtools">vue-devtools</A>调试时候，可以在这里找到正在开发中的对话框控件。</P>
        <Img src="../assert/dev.png" />

        <Alert>
            当出现多个Vue的根实例的时候，每一个配置了myDialog的Vue的根实例，都会插入一个<Strong>MyDialogList</Strong>。彼此之间是不会冲突的。
        </Alert>

        <Alert>据说<Strong>Vue3</Strong>支持Fragment（多个根节点）和Protal（在dom其他部分渲染组建内容）组件等功能，未来<Strong>MyDailog</Strong>根据这些特性进一步优化调试体验。
        </Alert>

        <H3>热更新</H3>
        <P><Strong>MyDailog</Strong>是编程式对话框，有副作用，因此对热更并不是特别友好，但是只要基于几个原则，降低开发的副作用，仍然是支持热更新。具体原则如下：</P>
        <Li>尽量使用vue的SFC控件定义对话框内容</Li>
        <Li>不要在vue的生命周期钩子中打开对话框</Li>
        <P>同时要注意的是，<Strong>热更新仅限于内容控件</Strong>，如果需要修改打开过程中的状态，需要关闭对话框再重新打开，或者刷新页面。</P>
        <Code :code="hotUpdate" lang="html"></Code>

        <H2>与vuex和vue-router集成</H2>
        <P>很多对话框控件是无法访问到vuex和vue-router的属性，这是因为他们是用一个新的Vue实例去打开对话框，而新的Vue实例中，是访问不到当前Vue实例的vuex、vue-i18n、vue-router等属性。<Strong>MyDailog</Strong>与他们不同，我们将对话框插入到当前实例中，因此和一个普通的控件没有任何区别，因此可以访问如vuex、vue-i18n、vue-router等属性。</P>
        <Demo title="与vuex集成" :demo="vuex" :code="vuexCode" lang="javascript">
        </Demo>

        <H3>原理</H3>
        <P>打开对话框时，常见的做法是new一个新的Vue实例，如：</P>
        <Code :code="core"></Code>
        <P>而<Strong>MyDialog</Strong>是将当前的Vue实例，作为parent传递给了新创建的Vue对话框实例，如：</P>
        <Code :code="core2"></Code>

        <H2>单独引用</H2>
        <P><Strong>MyDialog</Strong>为<Strong>Vue.prototype</Strong>添加了全局方法<Strong>$MyDailog</Strong>。但是如果在Vue实例外想使用<Strong>MyDialog</Strong>，可以使用单独引入的方法。</P>
        <Code :code="
`import MyDialogPlugin from 'my-vue-dialog'
let MyDialog = MyDialogPlugin.getInstance()
MyDialog.open(...)
`"></Code>
        <P>该方法一定要在存在使用了<Strong>MyDialog</Strong>的Vue实例存在的情况下才能返回有效的MyDialog实例。如下例：</P>
        <Code :code="
`import Vue from 'vue'
import MyDialogPlugin from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

vue.use(MyDialogPlugin)

// 因为没有初始化了MyDialog的Vue实例，所以MyDialog1是null
let MyDialog1 = MyDialog.getInstance()

let vueInstance1 = new Vue({
    el: ...,
    template: '...',
})
// 因为vueInstance1没有初始化了MyDialog，所以MyDialog2也是null
let MyDialog2 = MyDialog.getInstance()

let vueInstance2 = new Vue({
    el: ...,
    template: '...',
    // 使用myDialog属性，声明使用控
    myDialog: {}
})
// 因为vueInstance2已经初始化了MyDialog，所以MyDialog3不是null，MyDialog3创建的对话框都会挂载在vueInstance2下面
let MyDialog3 = MyDialog.getInstance()`"></Code>
        <H3>处理多实例情况</H3>
        <P>默认情况下MyDialog.getInstance只会返回最新创建的Vue实例下的MyDialog实例，如果有多个Vue实例，想分别单独引入自己的MyDialog实例，可以在初始化MyDialog时候给其加key，如下列：</P>

        <Code :code="
`import Vue from 'vue'
import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

vue.use(MyDialog)

let vueInstance1 = new Vue({
    el: ...,
    template: '...',
    // 使用myDialog属性，声明使用控，并设置key等于1
    myDialog: {key: '1'}
})

let vueInstance2 = new Vue({
    el: ...,
    template: '...',
    // 使用myDialog属性，声明使用控，并设置key等于2
    myDialog: {key: '2'}
})

// getInstance('1')会返回vueInstance1的MyDialog实例
let MyDialog1 = MyDialog.getInstance('1')
MyDialog1.open(...)

// getInstance('2')会返回vueInstance1的MyDialog实例
let MyDialog2 = MyDialog.getInstance('2')
MyDialog2.open(...)`"></Code>
    </Doc>
</template>
<script>
import propsData from '../demo/EdgeCases/propsData'
import propsData2 from '../demo/EdgeCases/propsData2'
import propsData3 from '../demo/EdgeCases/propsData3'
import propsData4 from '../demo/EdgeCases/propsData4'
import propsData5 from '../demo/EdgeCases/propsData5'
import close from '../demo/EdgeCases/close'
import vuex from '../demo/EdgeCases/vuex'
import beforeClose from '../demo/EdgeCases/beforeClose'
export default {
    data(){
        return {
            propsData,
            propsData2,
            propsData3,
            propsData4,
            propsData5,
            close,
            vuex,
            beforeClose,
            vuexCode:
`import Vue form 'vue'
import Vuex from 'vue'

Vue.use(Vuex)

let store = new Vue.Stroe({
    state: {
        count: 0
    }
})

new Vue({
    el: ...,
    store,
    template: '<button class="button" @click="open">打开</button>',
    methods: {
        open(){
            this.$MyDialog.open({
                // 在内容控件中，可以直接访问store
                content: \`<div class="dialog-content">
                            {{$store.state.count}}
                            <button class="button" @click="$store.state.count = $store.state.count + 1">
                                +1
                            </button>
                        </div>\`,
            })
        }
    }
}}

`,
            hotUpdate: 
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
                // SFC的内容支持热更新
                content: SFC,
                // 以下内容均不支持热更新，如果修改了这部分内容，需要手动关闭对话框或者刷新页面才能看到更新后效果
                propsData: {...},
                title: ...,
                width: ...,
                height: ...,
                ...
            })
        }
    }
}
<\/script>`,
            core: 
`let contentConstructor = Vue.extend(contentComponent)
let dialogVueComponent = new Constructor()`,
            core2: 
`let contentConstructor = Vue.extend(contentComponent)
let dialogVueComponent = new Constructor({
    // 将当前控件的$root作为parent传递给对话框控件
    parent: this.$root,
})`,
        }
    }
}
</script>

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
        
        <H2>关闭对话框后传出返回值</H2>
        <P>在对话框关闭后，我们需要子控件将值传递回父控件，通过<Strong>$myDialog.close</Strong>方法，可以将返回值传递出来。而在<Strong>onBeforeClose和onClose事件</Strong>中，返回值会以参数传递给父控件。</P>
        <Demo title="关闭对话框后传出返回值" :demo="close">
        </Demo>
    </Doc>
</template>
<script>
import propsData from '../demo/EdgeCases/propsData'
import propsData2 from '../demo/EdgeCases/propsData2'
import propsData3 from '../demo/EdgeCases/propsData3'
import propsData4 from '../demo/EdgeCases/propsData4'
import close from '../demo/EdgeCases/close'
export default {
    data(){
        return {
            propsData,
            propsData2,
            propsData3,
            propsData4,
            close,
        }
    }
}
</script>

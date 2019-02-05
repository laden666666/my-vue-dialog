<template>
    <div class="hello">
        <button @click="openTemplate">测试字符串</button>
        <button @click="openRander">测试render函数</button>
        <button @click="openJSX">测试jsx函数</button>
        <button @click="openComponent">测试component</button>
        <button @click="openClass">测试class</button>
        <button @click="openService">使用esm打开</button>
        <button @click="openStore">测试使用store打开</button>
    </div>
</template>

<script>
import Test from './Test'
import TestClass from './TestClass'
import MyDialog from 'my-vue-dialog'

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        openTemplate(){
            this.$MyDialog.open({
                title: 'test',
                width: 500,
                height: 400,
                showClose: false,
                content: `<a>{{msg}}<button @click="$myDialog.close()">关闭</button></a>`,
                propsData: {
                    msg: 'msg'
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openRander(){
            let dialog = this.$MyDialog.open({
                title: 'test',
                content: function(h){
                    return h('button',{
                        on:{
                            "click": function($event){
                                dialog.close()
                            }
                        }
                    },['关闭'])
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openJSX(){
            let dialog = this.$MyDialog.open({
                title: 'test',
                content: function(h){
                    return <button on-click={()=>dialog.close()}>关闭</button>
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openComponent(){
            this.$MyDialog.open({
                title: 'test',
                content: Test,
                propsData: {
                    msg: 'msg'
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openClass(){
            this.$MyDialog.open({
                title: 'test',
                content: TestClass,
                propsData: {
                    msg: 'msg'
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openService(){
            MyDialog.getInstance().open({
                title: 'test',
                content: Test,
                propsData: {
                    msg: 'msg'
                },
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
        openStore(){
            MyDialog.getInstance().open({
                title: 'test',
                content: `<a>{{$store.state.test}}<button @click="$myDialog.close()">关闭</button></a>`,
                onShow(){
                    console.log('onShow')
                },
                onClose(){
                    console.log('onClose')
                },
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

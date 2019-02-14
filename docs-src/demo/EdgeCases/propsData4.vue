<template>
    <div>
        <button class="button" @click="open1">打开（对话框内容是模板字符串）</button>
        <button class="button" @click="open2">打开（对话框内容是render函数）</button>
    </div>
</template>
<script>

export default {
    methods: {
        open1(){
            this.$MyDialog.open({
                // 内容是模板字符串形式
                content: '<span class="dialog-content">{{message}}</span>',
                // 父控件给模板字符串传值
                propsData: {
                    message: '父控件给模板字符串传值'
                }
            })
        },
        open2(){
            this.$MyDialog.open({
                // 内容是render函数形式，注意不要使用箭头函数，直接使用this访问propsData传递数据
                content: function(h){
                    return h('span', { class: 'dialog-content'}, [this.message])
                },
                // 父控件给模板字符串传值
                propsData: {
                    message: '父控件给render函数传值'
                }
            })
        },
    },
}
</script>

<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

export default {
    data(){
        return {
            message: 'render函数中直接访问父控件的属性'
        }
    },
    methods: {
        open(){
            this.$MyDialog.open({
                // 内容是render函数形式，使用箭头函数，直接使用this访问父控件的属性
                content: (h)=>{
                    return h('span', { class: 'dialog-content'}, [this.message])
                },
            })
        },
    },
}
</script>

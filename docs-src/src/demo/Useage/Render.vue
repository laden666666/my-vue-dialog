<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>
export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: (h)=>{
                    return h('div', {attrs: {class: 'dialog-content'}}, ['使用render函数做对话框'])
                }       
            })
        }
    }
}
</script>

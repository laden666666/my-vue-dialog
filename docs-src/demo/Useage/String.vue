<template>
    <button class="button" @click="open">打开</button>
</template>
<script>
export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: '<div class="dialog-content">用一个字符串做对话框内容</div>'       
            })
        }
    }
}
</script>

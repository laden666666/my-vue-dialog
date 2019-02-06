<template>
    <button class="button" @click="open">打开</button>
</template>
<script>
export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: (h)=><div class="dialog-content">用jsx做render函数实现</div>
            })
        }
    }
}
</script>

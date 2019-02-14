<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                // 这里设置title
                title: 'title',
                content: '<span></span>'       
            })
        }
    }
}
</script>
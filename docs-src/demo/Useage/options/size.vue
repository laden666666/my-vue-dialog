<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                // 这里设置title
                title: '300 * 200',
                width: 300,
                height: 200,
                content: '<span></span>'       
            })
        }
    }
}
</script>
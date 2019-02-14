<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: {
                    template: '<div class="dialog-content">用JavaScript的json对象做componentOptions</div>'
                }       
            })
        }
    }
}
</script>

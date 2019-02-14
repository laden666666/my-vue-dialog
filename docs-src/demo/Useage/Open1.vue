<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    template: '<div class="dialog-content">用class类及装饰器做对话框内容</div>'
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,    
            })
        }
    }
}
</script>

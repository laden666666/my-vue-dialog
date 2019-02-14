<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    props: {
        message: {
            type: String
        }
    },
    template: '<div class="dialog-content">{{message}}</div>'
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,
                // propsData将数据传递给component的message的prop
                propsData: {
                    message: '通过props传值给对话框内容控件对应的prop'
                }    
            })
        }
    }
}
</script>

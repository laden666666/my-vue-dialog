<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component1 = {
    data: function(){
        return {
        }
    },
    template: 
        `<div class="dialog-content">
            <span>old content</span>
            <button class="button" @click="setContent">
                按钮
            </button>
        </div>`,
    methods: {
        setContent(){
            this.$myDialog.setContent('<div class="dialog-content"><span>new content</span></div>')
        }
    }
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                title: '修改对话框对内容',
                content: component1      
            })
        }
    }
}
</script>

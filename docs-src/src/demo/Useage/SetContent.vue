<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>

let component1 = {
    data: function(){
        return {
        }
    },
    template: 
        `<div class="dialog-content">
            <button class="button" @click="$myDialog.setContent('<div>new content</div>')">按钮</button>
            <span>old content</span>
        </div>`
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

<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    data: function(){
        return {
            title: this.$myDialog.getTitle()
        }
    },
    template: 
        `<div class="dialog-content">
            <input v-model="title" />
            <button class="button" @click="$myDialog.setTitle(title)">设置标题</button>
        </div>`
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                title: '原始标题',
                content: component       
            })
        }
    }
}
</script>

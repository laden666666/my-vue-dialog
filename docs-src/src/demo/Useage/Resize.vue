<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>

let component = {
    data: function(){
        return {
        }
    },
    template: 
        `<div class="dialog-content">
            <button class="button" @click="$myDialog.resize({width: 500, height: 400})">resize()方法同时修改对话框宽高</button>
            <button class="button" @click="$myDialog.resize(300)">setWidth()方法单独修改对话框宽度</button>
            <button class="button" @click="$myDialog.setHeight(200)">setHeight()方法单独修改对话框高度</button>
        </div>`
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                title: '修改dialog大小',
                content: component       
            })
        }
    }
}
</script>

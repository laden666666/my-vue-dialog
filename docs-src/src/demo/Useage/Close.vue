<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    // 注意使用$myDialog.close()关闭对话框
    template: 
        `<div class="dialog-content">
            <p>点击关闭按钮，关闭对话框</p>
            <button class="button" @click="$myDialog.close()">关闭</button>
        </div>`
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: component       
            })
        }
    }
}
</script>

<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>

let component = {
    // 注意使用$myDialog.close()关闭对话框
    template: 
        `<div class="dialog-content">
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

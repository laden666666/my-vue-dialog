<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    data() {
        return {
            count: 1
        }
    },
    // 注意$myDialog.close(返回值)会将值传递给父控件的beforeClose和Close事件
    template: 
        `<div class="dialog-content">
            {{count}}<button class="button" @click="count = count+1">
                +1
            </button>
        </div>`
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

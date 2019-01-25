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
            <span> {{$myDialog.getOption()}}</span>
        </div>`
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                title: '获取初始化配置',
                content: component       
            })
        }
    }
}
</script>

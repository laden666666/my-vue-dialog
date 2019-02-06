<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    data: function(){
        return {
        }
    },
    template: 
        `<div class="dialog-content">
            <pre> {{JSON.stringify($myDialog.getOption(), null, 4)}}</pre>
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

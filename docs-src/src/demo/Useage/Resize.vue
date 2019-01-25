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
            <button class="button" @click="$myDialog.resize({width: 500, height: 400})">修改</button>
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

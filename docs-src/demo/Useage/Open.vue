<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    template: '<div class="dialog-content">用JavaScript的json对象做componentOptions</div>'
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

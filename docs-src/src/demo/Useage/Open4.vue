<template>
    <button class="button" @click="open">打开</button>
</template>
<script>
import Vue from 'vue'

let component = {
    template: '<div class="dialog-content">用Vue.extend创建的子类做componentOptions</div>'
}
let component2 = Vue.extend(component)
console.log(window.w = component2)

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: component2 
            })
        }
    }
}
</script>

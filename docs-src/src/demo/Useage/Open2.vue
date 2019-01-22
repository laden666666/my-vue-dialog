<template>
    <button class="button" @click="open">按钮</button>
</template>
<script>
import SFC from "./SFC.vue";

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: SFC       
            })
        }
    }
}
</script>

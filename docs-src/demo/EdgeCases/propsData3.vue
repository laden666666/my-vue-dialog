<template>
    <div>
        <button class="button" @click="open">打开</button>
        <p>object: {{object}}</p>
    </div>
</template>
<script>

let component = {
    props: {
        count: {
            type: Number
        },
    },
    template: '<div class="dialog-content">count: {{count}}</div>'
}

export default {
    data(){
        return {
            object: {
                count: 0,
            }
        }
    },
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,
                // 将object传给propsDate，
                propsData: this.object
            })
        },
    },
    mounted(){
        let timeID = setInterval(()=>{
            this.object.count++
        }, 1000)
        this.$once('hook:beforeDestroy', ()=>clearInterval(timeID))
    },
}
</script>

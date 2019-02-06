<template>
    <div>
        <button class="button" @click="open">打开</button>
        <p>onBeforeClose: {{onBeforeClose}}</p>
        <p>onClose: {{onClose}}</p>
    </div>
</template>
<script>

let component = {
    data() {
        return {
            returnData: ''
        }
    },
    // 注意$myDialog.close(返回值)会将值传递给父控件的beforeClose和Close事件
    template: 
        `<div class="dialog-content">
            <input v-model="returnData" />
            <button class="button" 
                @click="$myDialog.close(returnData)">
                关闭
            </button>
        </div>`
}

export default {
    data(){
        return {
            onBeforeClose: '',
            onClose: '',
        }
    },
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,
                onBeforeClose: (retrunData)=>{
                    this.onBeforeClose = retrunData
                },
                onClose: (retrunData)=>{
                    this.onClose = retrunData
                },
            })
        }
    }
}
</script>

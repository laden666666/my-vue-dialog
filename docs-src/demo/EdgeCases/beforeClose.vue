<template>
    <button class="button" @click="open">打开</button>
</template>
<script>

let component = {
    data() {
        return {
            returnData: ''
        }
    },
    template: 
        `<div class="dialog-content">
            <input v-model="returnData" placeholder="请输入test后再关闭对话框"/>
            <button class="button" 
                @click="$myDialog.close(returnData)">
                关闭
            </button>
        </div>`
}

export default {
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,
                title: '只有输入“test”才可以关闭对话框',
                onBeforeClose: (retrunData)=>{
                    // 在onBeforeClose校验
                    if(retrunData !== 'test'){
                        alert('只有返回test，才可以关闭对话框')
                        // 返回false可以阻止对话框关闭
                        return false
                    }
                },
            })
        }
    }
}
</script>

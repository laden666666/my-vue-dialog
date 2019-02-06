<template>
    <div>
        <button class="button" @click="open">打开</button>
        <p>count: {{count}}</p>
        <p>object: {{object}}</p>
    </div>
</template>
<script>

let component = {
    props: {
        count: {
            type: Number
        },
        object: {
            type: Object
        }
    },
    template: `<div class="dialog-content">
        <p>count: {{count}}</p>
        <p>object: {{object}}</p>
    </div>`
}

export default {
    data(){
        return {
            // 原始类型，不可响应数据
            count: 0,
            // 对象类型，可响应数据
            object: {
                count: 0,
            }
        }
    },
    methods: {
        open(){
            this.$MyDialog.open({
                content: component,
                propsData: {
                    // object是可响应对象
                    object: this.object,
                    // count是不可响应对象
                    count: this.count,
                }    
            })
        }
    },
    mounted(){
        setInterval(()=>{
            this.count++
            this.object.count++
        }, 1000)
        this.$once('hook:beforeDestroy', ()=>clearInterval(timeID))
    }
}
</script>

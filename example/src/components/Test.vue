<template>
    <div>
        {{msg}}
        <button @click="$myDialog.close()">关闭</button>
        <input type="text" v-model="title">
        <button @click="$myDialog.setTitle(title)">设置title</button>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String
        }
    },
    data () {
        return {
            title: ''
        }
    },
    methods: {
    },
}
</script>

<style scoped>
</style>

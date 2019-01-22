<template>
    <div>
        <!-- 对户框列表 -->
        <MyDialog :key="dialog.id" :dialog="dialog" :vue="vue" v-for="(dialog) in vue.list">
        </MyDialog>
    </div>
</template>
<script>
    import MyDialog from './MyDialog'

    export default {
        name: 'MyDialogList',
        props: {
            vue: {},
        },
        components: {
            MyDialog: MyDialog
        }
    }
</script>
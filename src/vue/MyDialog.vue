<template functional>
    <!-- 为了让该控件不出现在vue-tools里面，所有使用函数式控件。
    目前该方法仅支持vue2.5+，为了能够适配vue2.3+，未来可能修改为render函数重写 -->
    <div class="my-dialog" :style="{zIndex: props.dialog.$option.zIndex}">
        <!-- 防止用户点击的弹层 -->
        <div v-if="props.dialog.$option.showMask" @click="props.dialog.$option.maskClosable && props.dialog.close()" 
            class="my-dialog-mask"></div>

        <!-- 对户框的动画 -->
        <transition name="my-dialog-box">
            <div v-if="props.dialog.$show" class="my-dialog-box"
                :style="{height: props.dialog.$option.height + 'px', width: props.dialog.$option.width + 'px'}"
            >
                <!-- 对话框头部 -->
                <header class="my-dialog-header">
                    {{props.dialog.$option.title}}
                    <svg class="my-dialog-close" v-if="props.dialog.$option.showClose" @click="props.dialog.close()"
                         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2117">
                        <path d="M512 466.944l233.472-233.472a31.744 31.744 0 0 1 45.056 45.056L557.056 512l233.472 233.472a31.744 31.744 0 0 1-45.056 45.056L512 557.056l-233.472 233.472a31.744 31.744 0 0 1-45.056-45.056L466.944 512 233.472 278.528a31.744 31.744 0 0 1 45.056-45.056z" p-id="2118"></path>
                    </svg>
                </header>

                <!-- 使用动态组件渲染对话框内容 -->
                <div class="my-dialog-content">
                    <component v-bind="props.dialog.$option.propsData" :is="props.dialog.$content"></component>
                </div>
            </div>
        </transition>
        <div v-html="'<style>body{overflow-y: hidden;padding-right: ' + props.dialog.$calcBodyScrollWidth + 'px;}</style>'"></div>
    </div>
</template>
<script>
    export default {
        props: {
            // 打开的对话框数量
            dialog: {
                type: Object,    
                required: true,
            },
            // vue的对象
            vue: {},
            // 计算body的滚动条宽度，这个方法y.clientWidth
            calcBodyScrollWidth: {
                type: Number
            },
        },
        name: 'MyDialog'
    }
</script>
<style scoped>
    .my-dialog{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .my-dialog-mask{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(55,55,55,.65);
        height: 100%;
        z-index: 1000;
    }
    .my-dialog-box{
        position: absolute;
        top: 50%;
        left: 50%;
        max-width : 90%;
        max-height : 90%;
        transform: translate(-50%, -50%);
        z-index: 1001;
        background-color: #fff;
        border: 0;
        border-radius: 6px;
        background-clip: padding-box;
        box-shadow: 0 4px 12px rgba(0,0,0,.15);
    }
    .my-dialog-box-enter-active {
        animation: bounce-in .3s;
    }
    .my-dialog-box-leave-active {
        animation: bounce-in .3s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: translate(-50%, -50%) scale(.6);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    .my-dialog-header {
        border-bottom: 1px solid #e8e8e8;
        height: 44px;
        padding: 12px 16px;
        line-height: 20px;
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
    }
    .my-dialog-close{
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        height: 20px;
        width: 20px;
    }
    .my-dialog-content{
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        height: auto;
        height: calc(100% - 44px);
        width : 100%;
        overflow: auto;
    }
</style>

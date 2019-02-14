<template>
    <Doc>
        <H1>升级日志</H1>
        <TimeLine>
            <template slot="time1">
                <H3>v0.0.0</H3>
            </template>
            <template slot="time2">
                <H3>v0.0.1</H3>
                <P>修复<A href="https://github.com/laden666666/my-vue-dialog/issues/1"></A></P>
            </template>
            <template slot="time3">
                <H3>v0.1.0</H3>
                <P>增加对Vue的class控件和Vue.extend子控件的支持。</P>
                <P>增加了库的文档和readme。</P>
            </template>
        </TimeLine>
    </Doc>
</template>
<style scoped>
.h3{
    margin-top: 0!important;
}
</style>

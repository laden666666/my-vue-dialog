// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MyDialog from 'my-vue-dialog'
import 'my-vue-dialog/dist/my-vue-dialog.css'

Vue.config.productionTip = false

Vue.use(MyDialog)

/* eslint-disable no-new */
window.vue = new Vue({
    el: '#app',
    router,
    store,
    // 必须要设置myDialog才能在原型上面使用MyDialog
    myDialog: {key: 'example'},
    components: { App },
    template: '<App/>'
})
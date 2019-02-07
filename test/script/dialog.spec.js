import Vue from 'vue'
import MyDialogPlugin from '../../src'

import TestSFC from './TestSFC'
import TestClass from './TestClass'
import TestJSX from './TestJSX'

Vue.use(MyDialogPlugin)


describe('测试创建MyDialog', function () {
    this.timeout(3000)

    it('不设置myDialog属性创建', async function () {
        let vueInstance = new Vue({
            template: `<div></div>`,
        }).$mount()

        assert.isNull(vueInstance.$MyDialog)
    });

    it('不设置myDialog的key属性创建', async function () {
        let vueInstance = new Vue({
            template: `<div></div>`,
            myDialog: {},
        }).$mount()

        assert.isNotNull(vueInstance.$MyDialog)
        assert.isString(vueInstance.$MyDialog.key)
    });

    it('设置myDialog的key属性创建', async function () {
        let vueInstance = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test'},
        }).$mount()

        assert.isNotNull(vueInstance.$MyDialog)
        assert.deepEqual(vueInstance.$MyDialog.key, 'test')
    });

    it('测试getInstance()', async function () {
        let vueInstance1 = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test'},
        }).$mount()

        assert.deepEqual(MyDialogPlugin.getInstance().key, 'test')

        let vueInstance2 = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test2'},
        }).$mount()
        assert.deepEqual(MyDialogPlugin.getInstance().key, 'test2')
    });

    it('测试getInstance(key)', async function () {
        let vueInstance1 = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test1'},
        }).$mount()

        assert.deepEqual(MyDialogPlugin.getInstance('test1').key, 'test1')
        assert.equal(MyDialogPlugin.getInstance('test1'), vueInstance1.$MyDialog)

        let vueInstance2 = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test2'},
        }).$mount()
        assert.deepEqual(MyDialogPlugin.getInstance('test2').key, 'test2')
        assert.equal(MyDialogPlugin.getInstance('test2'), vueInstance2.$MyDialog)
    });

    it('测试默认配置', async function () {
        let vueInstance1 = new Vue({
            template: `<div></div>`,
            myDialog: {key: 'test1', title: 'test'},
        }).$mount()

        assert.deepEqual(vueInstance1.$MyDialog.defaultOption.title, 'test')
    });
});


describe('测试MyDialogAPI', function () {

    let vueInstance = new Vue({
        template: `<div></div>`,
        myDialog: {},
    }).$mount()

    before(function(){
        if(vueInstance){
            vueInstance.$destroy()
            vueInstance = null
        }
        vueInstance = new Vue({
            template: `<div></div>`,
            myDialog: {},
        }).$mount()
    })

    this.timeout(3000)

    it('创建MyDialog', async function () {
        let mounted = false
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        mounted = true
                        this.$myDialog.close()
                    }
                },
                onClose(){
                    if(mounted)
                        resolve()
                }
            })
        })
        
    });

    it('测试默认配置', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.defaultOption.title = 'xxxx'
            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        this.$myDialog.close()
                    }
                },
                onClose(){
                    if(this.getTitle() == 'xxxx'){
                        resolve()
                    }
                }
            })
        })
    });

    it('vue的SFC做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: TestSFC,
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                }
            })
        })
    });

    it('vue的装饰器和class做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: TestClass,
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                }
            })
        })
    });

    it('vue的extend子类做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: Vue.extend({template: '<span></span>'}).extend({
                    mounted(){
                        this.$myDialog.close('ok')
                    }
                }),
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                }
            })
        })
    });

    it('vue的ComponentOptions做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: {
                    mounted(){
                        this.$myDialog.close('ok')
                    },
                    template: '<span></span>'
                },
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                }
            })
        })
    });

    it('字符串模板做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: '<span id="test001">{{test}}</span>',
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                },
                onShow(){
                    let span = document.querySelector('#test001')
                    if(span.innerHTML == '[test]'){
                        this.close('ok')
                    }
                },
                propsData: {
                    test: '[test]'
                }
            })
        })
    });

    it('render做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: function(h){ return h('span', {attrs: {id: 'test002'}}, [this.test])},
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                },
                onShow(){
                    let span = document.querySelector('#test002')
                    if(span.innerHTML == '[test]'){
                        this.close('ok')
                    }
                },
                propsData: {
                    test: '[test]'
                }
            })
        })
    });

    it('jsx做内容', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: TestJSX,
                onClose(data){
                    if(data == 'ok'){
                        resolve()
                    }
                },
                onShow(){
                    let span = document.querySelector('#test003')
                    if(span.innerHTML == '[test]'){
                        this.close('ok')
                    }
                },
                propsData: {
                    test: '[test]'
                }
            })
        })
    });

    it('关闭MyDialog和onClose', async function () {
        await new Promise((resolve)=>{
            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        this.$myDialog.close()
                    }
                },
                onClose(){
                    resolve()
                }
            })
        })
    });

    it('关闭onBeforeClose', async function () {
        let result = false
        await new Promise((resolve, reject)=>{
            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        this.$myDialog.close(true)
                    }
                },
                onBeforeClose(_result){
                    result = _result
                },
                onClose(){
                    if(result)
                        resolve()
                },
            })
        })
    });

    it('关闭onBeforeClose返回false', async function () {
        await new Promise((resolve, reject)=>{
            setTimeout(function(){
                resolve()
            }, 1000)

            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        this.$myDialog.close()
                    }
                },
                onBeforeClose(){
                    return false
                },
                onClose(){
                    //如果真的不关闭了，这里会先返回错误
                    reject('beforeClose失效')
                },
            })
        })
    });

    it('关闭onBeforeCreate', async function () {
        let title = await new Promise((resolve, reject)=>{
            vueInstance.$MyDialog.open({
                title: 'test',
                content: {
                    template: '<span></span>',
                },
                onBeforeCreate(){
                    resolve(this.getTitle())
                },
            })
        })

        assert.equal(title, 'test')
    });

    it('关闭onBeforeCreate返回false', async function () {
        await new Promise((resolve, reject)=>{
            setTimeout(function(){
                resolve()
            }, 1000)

            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                    mounted(){
                        reject('BeforeCreate失效')
                    },
                },
                onBeforeCreate(){
                    return false
                },
            })
        })
    });

    it('测试topDialog', async function () {
        await new Promise((resolve, reject)=>{
            setTimeout(function(){
                resolve()
            }, 1000)

            vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                },
            })

            let dialog = vueInstance.$MyDialog.open({
                content: {
                    template: '<span></span>',
                },
            })

            assert.equal(dialog.id, vueInstance.$MyDialog.topDialog.id)
        })
    });
});
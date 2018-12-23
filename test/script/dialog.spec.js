import Plugin from '../../src'
import Vue from 'vue'

Vue.use(Plugin)

///////////////////////////////////////创建用于测试的列表控件
let vueInstance = new Vue({template: `<div></div>`}).$mount()

describe('Dialog相关', function () {
    this.timeout(6000)
    it('创建Dialog', async function () {
        await new Promise((resolve, reject)=>{
            vueInstance.$Dialog.open({
                component: {
                    template: '<span></span>',
                    mounted(){
                        resolve()
                    }
                }
            })
        })
    });

    it('关闭Dialog和onClose', async function () {
        await new Promise((resolve, reject)=>{
            vueInstance.$Dialog.open({
                component: {
                    template: '<span></span>',
                    mounted(){
                        this.$DialogInstance.close()
                    }
                },
                onClose(){
                    resolve()
                }
            })
        })
    });

    it('关闭onBeforeClose', async function () {
        await new Promise((resolve, reject)=>{
            vueInstance.$Dialog.open({
                component: {
                    template: '<span></span>',
                    mounted(){
                        this.$DialogInstance.close(true)
                    }
                },
                onBeforeClose(resulte){
                    if(resulte)
                        resolve()
                }
            })
        })
    });

    it('关闭onBeforeClose返回false', async function () {
        await new Promise((resolve, reject)=>{
            setTimeout(function(){
                resolve()
            }, 1000)

            vueInstance.$Dialog.open({
                component: {
                    template: '<span></span>',
                    mounted(){
                        this.$DialogInstance.close()
                    }
                },
                onBeforeClose(resulte){
                    return false
                },
                onClose(resulte){
                    //如果真的不关闭了，这里会先返回错误
                    reject('beforeClose失效')
                },
            })
        })
    });

    it('关闭onBeforeShow', async function () {
        let title = await new Promise((resolve, reject)=>{
            vueInstance.$Dialog.open({
                title: 'test',
                component: {
                    template: '<span></span>',
                },
                onBeforeShow(option){
                    resolve(option.title)
                },
            })
        })

        assert.equal(title, 'test')
    });

    it('关闭onBeforeShow返回false', async function () {
        await new Promise((resolve, reject)=>{
            setTimeout(function(){
                resolve()
            }, 1000)

            vueInstance.$Dialog.open({
                component: {
                    template: '<span></span>',
                    destroyed(){
                        reject('beforeShow失效')
                    },
                },
                onBeforeShow(){
                    return false
                },
            })
        })
    });
});

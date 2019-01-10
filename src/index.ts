import { IDialogPlugin } from './API';
import { careateManager, destroyManager, getManager, getLastManager, DialogManagerData } from './DataBase';
import Vue, {VueConstructor} from 'vue';
import { IDialogManager } from '../dist/src/API';

const MY_DIALOG_MANAGER_KEY = '__myDialogKey'

// 从webpack中获取的package.json版本
declare const PLUGIN_VERSION: string

/**
 * 对外暴露的插件
 */
let dialogPlugin: IDialogPlugin = {
    install(vue: VueConstructor, options?: any){
        vue.mixin({
            beforeCreate(){
                // 只有配置了myDialog，才创建DialogManager
                if(this === this.$root && this.$root.$options.myDialog != null){

                    // 将DialogManager的key保存在$root里面
                    this.$root[MY_DIALOG_MANAGER_KEY] = 
                        careateManager(this.$root.$options.myDialog, this.$root).dialogManager.key
                }
            },
            destroyed(){
                // vue销毁的时候，也销毁对应的DialogManager
                if(this === this.$root && this.$root.$options.myDialog != null){
                    destroyManager(this.$root[MY_DIALOG_MANAGER_KEY])
                }
            },
            computed: {
                $MyDialog(this: Vue){
                    let data = getManager(this.$root[MY_DIALOG_MANAGER_KEY])
                    return data ? data.dialogManager : null
                },
            }
        })
    },

    /**
     * 获取DialogManager实例，如果是key未传，返回最新创建的DialogManager对象
     * 这是一个重载函数
     * @param {string} [key] 
     * @returns {IDialogManager} 
     */
    getInstance(key?: string): IDialogManager{
        let managerData: DialogManagerData
        if(key == null){
            managerData = getLastManager()
        } else {
            managerData = getManager(key)
        }

        return managerData ? managerData.dialogManager : null
    },

    // 版本
    version: PLUGIN_VERSION
}

export default dialogPlugin
export * from './API'
import { IDialogPlugin } from './API';
import { careateManager, destroyManager, getManager, getLastManager, DialogManagerData } from './DataBase';
import Vue, {VueConstructor} from 'vue';
import { IDialogManager } from '../dist/src/API';


let dialogPlugin: IDialogPlugin = {

    install(vue: VueConstructor, options?: any){
        vue.mixin({
            beforeCreate(){
                if(this === this.$root && this.$root.$options.myDialog != null){
                    careateManager(typeof this.$root.$options.myDialog, this.$root)
                }
            },
            destroyed(){
                if(this === this.$root && this.$root.$options.myDialog != null){
                    destroyManager(this.$root.$options.myDialog)
                }
            }
        })
    },

    getInstance(key?: string): IDialogManager{
        let managerData: DialogManagerData
        if(key !== null){
            managerData = getLastManager()
        } else {
            managerData = getManager(key)
        }

        return managerData ? managerData.dialogManager : null
    }
}
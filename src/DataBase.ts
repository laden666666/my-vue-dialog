
import Vue from 'vue';
import DialogManager from './DialogManager';
import { Dialog } from './Dialog';
import { DialogManagerOption } from '../dist/src/API';

// 保存DialogManager对应的数据的对象
export type DialogManagerData = {
    dialogManager : DialogManager,
    data:{
        list: Dialog[]
    }
}

// 根据key缓存DialogManagerData对象
let dialogManagerMap: {
    [key: string]: DialogManagerData
} = {}

// 最新创建的DialogManagerData的key
let lastKey: string

/**
 * 创建DialogManager对象
 * @export
 * @param {string} key 
 */
export function careateManager(option: string | DialogManagerOption, vue: Vue): DialogManagerData{

    let dialogManager = new DialogManager(option, vue)

    // 这个key的对话框已经存在
    if(dialogManagerMap[dialogManager.key]){
        throw new Error(``)
    }

    dialogManagerMap[dialogManager.key] = {
        dialogManager,
        // 使用vue对象保存数据，目的是实现响应式对象
        data: new Vue({
            data:{ 
                list: []
            }
        })
    }

    // 将最新创建的key设置为当前key
    lastKey = dialogManager.key

    return dialogManagerMap[dialogManager.key]
}

/**
 * 根据key取出DialogManagerData对象
 * @export
 * @param {string} key 
 */
export function getManager(key: string): DialogManagerData{
    return dialogManagerMap[key] || null
}


/**
 * 获取最新创建的DialogManagerData对象
 * @export
 * @param {string} key 
 */
export function getLastManager(): DialogManagerData{
    return dialogManagerMap[lastKey] || null
}

/**
 * 销毁ialogManager对象
 * @export
 * @param {string} key 
 */
export function destroyManager(key: string){
    let dialogManagerData = dialogManagerMap[key]
    if(dialogManagerData){
        dialogManagerData.dialogManager.destroy()
        delete dialogManagerMap[key]
    }
}

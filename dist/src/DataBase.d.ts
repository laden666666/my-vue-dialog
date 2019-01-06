import Vue from 'vue';
import DialogManager from './DialogManager';
import { Dialog } from './Dialog';
import { DialogManagerOption } from '../dist/src/API';
export declare type DialogManagerData = {
    dialogManager: DialogManager;
    data: {
        list: Dialog[];
    };
};
/**
 * 创建DialogManager对象
 * @export
 * @param {string} key
 */
export declare function careateManager(option: string | DialogManagerOption, vue: Vue): DialogManagerData;
/**
 * 根据key取出DialogManagerData对象
 * @export
 * @param {string} key
 */
export declare function getManager(key: string): DialogManagerData;
/**
 * 获取最新创建的DialogManagerData对象
 * @export
 * @param {string} key
 */
export declare function getLastManager(): DialogManagerData;
/**
 * 销毁ialogManager对象
 * @export
 * @param {string} key
 */
export declare function destroyManager(key: string): void;

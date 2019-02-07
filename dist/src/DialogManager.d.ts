import { DialogOption, MyDialog, Dialog, MyDialogOption } from './API';
import { DialogImpl } from './Dialog';
import Vue from 'vue';
/**
 * 对话框控制对象，所有对话框操作的核心类
 */
declare class MyDialogImpl implements MyDialog {
    private _vue;
    constructor(option: string | MyDialogOption, _vue: Vue);
    private _defaultOption;
    readonly defaultOption: DialogOption;
    private _key;
    readonly key: string;
    open(option?: DialogOption): Dialog;
    readonly topDialog: DialogImpl;
    destroy(): void;
    _subVue: Vue;
    _init(): void;
}
export default MyDialogImpl;

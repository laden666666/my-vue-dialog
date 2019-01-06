import { DialogOption, IDialogManager, IDialog } from './API';
import { DialogManagerOption } from '../dist/src/API';
import Vue from 'vue';
/**
 * 对话框控制对象，所有对话框操作的核心类
 */
declare class DialogManager implements IDialogManager {
    private _vue;
    constructor(option: string | DialogManagerOption, _vue: Vue);
    private readonly _defaultOption;
    readonly defaultOption: DialogOption;
    private _key;
    readonly key: string;
    open(option?: DialogOption): IDialog;
    readonly topDialog: IDialog;
    destroy(): void;
}
export default DialogManager;

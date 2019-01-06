import Vue, { VNode, ComponentOptions, VueConstructor } from 'vue';
/**
 * render函数、template字符串模板、component配置
 */
export declare type DialogComponent = ComponentOptions<any> | string | {
    (): VNode;
};
/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface DialogOption {
    title?: string;
    delay?: number | string;
    width?: number | string;
    height?: number | string;
    type?: 'primary' | 'warn' | 'info' | 'warning' | 'danger';
    content: DialogComponent;
    propsData: object;
    scrollable?: boolean;
    showClose?: boolean;
    showMask?: boolean;
    maskClosable?: boolean;
    zIndex?: number | string;
    onShow?: {
        (): void;
    };
    onBeforeShow?: {
        (): boolean | void | Promise<boolean | void>;
    };
    onBeforeClose?: {
        ($event: any): boolean | void | Promise<boolean | void>;
    };
    onClose?: {
        (): void;
    };
}
/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface DialogManagerOption extends DialogOption {
    key?: string;
}
/**
 * 对话框实例
 * @interface IDialog
 */
export interface IDialog {
    id: number;
    setTitle(title: string): void;
    getTitle(): string;
    resize(size: {
        height?: number | string;
        width?: number | string;
    }): void;
    getWidth(): number | string;
    setWidth(width: number | string): any;
    getHeight(): number | string;
    setHeight(height: number | string): any;
    readonly getOption: () => DialogOption;
    setContent(dialogComponent: DialogComponent): any;
    close(returnData: any): Promise<boolean>;
}
/**
 * 对话框控制对象
 * interface DialogManager
 */
export interface IDialogManager {
    readonly key: string;
    readonly defaultOption: DialogOption;
    open(option: DialogOption): IDialog;
    readonly topDialog: IDialog;
}
/**
 * 对话框控制对象
 * interface Dialog
 */
export interface IDialogPlugin {
    install(vue: VueConstructor, option?: any): any;
    /**
     * 取出最新的DialogManager对象
     * @returns {IDialogManager}
     * @memberOf IDialogPlugin
     */
    getInstance(): IDialogManager;
    /**
     * 取出指定key的IDialogManager对象
     * @param {string} key
     * @returns {IDialogManager}
     * @memberOf IDialogPlugin
     */
    getInstance(key: string): IDialogManager;
}
declare module 'vue/types/vue' {
    interface Vue {
        readonly $MyDialog: IDialogManager;
        readonly $myDialog: IDialog;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        myDialog?: string | DialogManagerOption;
    }
}

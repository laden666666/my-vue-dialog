import Vue, { VNode, ComponentOptions, VueConstructor } from 'vue';
/**
 * render函数、template字符串模板、component配置
 */
export declare type DialogComponent = ComponentOptions<any> | string | {
    (): VNode;
} | VueConstructor;
/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface DialogOption {
    title?: string;
    width?: number | string;
    height?: number | string;
    content: DialogComponent;
    propsData: object;
    showClose?: boolean;
    showMask?: boolean;
    maskClosable?: boolean;
    zIndex?: number | string;
    onShow?: {
        (this: Dialog): void;
    };
    onBeforeCreate?: {
        (this: Dialog, option: DialogOption): boolean | void | Promise<boolean | void>;
    };
    onBeforeClose?: {
        (this: Dialog, returnData: any): boolean | void | Promise<boolean | void>;
    };
    onClose?: {
        (this: Dialog, returnData: any): void;
    };
}
/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface MyDialogOption extends DialogOption {
    key?: string;
}
/**
 * 对话框实例
 * @interface Dialog
 */
export interface Dialog {
    id: number;
    /**
     * 设置对话框标题
     * @param {string} title    设置的标题
     * @memberOf Dialog
     */
    setTitle(title: string): void;
    /**
     * 获取当前标题
     * @returns {string}        当前标题
     *
     * @memberOf Dialog
     */
    getTitle(): string;
    /**
     * 设置Dialog
     * @param {({
     *         height?: number | string,
     *         width?: number | string,
     *     })} size    height是高属性， width是宽属性
     *
     * @memberOf Dialog
     */
    resize(size: {
        height?: number | string;
        width?: number | string;
    }): void;
    /**
     * 获取宽度
     * @returns {(number | string)}     宽度当前的值
     *
     * @memberOf Dialog
     */
    getWidth(): number | string;
    /**
     * 设置宽度
     * @param {(number | string)} width     新的宽度
     *
     * @memberOf Dialog
     */
    setWidth(width: number | string): any;
    /**
     * 获取高度
     * @returns {(number | string)}         高度当前的值
     *
     * @memberOf Dialog
     */
    getHeight(): number | string;
    /**
     * 设置高度
     * @param {(number | string)} height    新的高度
     *
     * @memberOf Dialog
     */
    setHeight(height: number | string): any;
    /**
     * 获取当前对话框的配置
     * @returns {DialogOption}         当前对话框的配置
     * @memberOf Dialog
     */
    readonly getOption: () => DialogOption;
    /**
     * 设置对话框的内容
     * @param {DialogComponent} dialogComponent
     * @memberOf Dialog
     */
    setContent(dialogComponent: DialogComponent): any;
    /**
     * 关闭对户框
     * @param {*} returnData            传递给父控件的返回值
     * @returns {Promise<boolean>}      是否关闭成功，如果成返回true，否则返回false
     *
     * @memberOf Dialog
     */
    close(returnData: any): Promise<boolean>;
}
/**
 * 对话框控制对象
 * interface DialogManager
 */
export interface MyDialog {
    readonly key: string;
    readonly defaultOption: DialogOption;
    open(option: DialogOption): Dialog;
    readonly topDialog: Dialog;
}
/**
 * 对话框控制对象
 * interface Dialog
 */
export interface MyDialogPlugin {
    install(vue: VueConstructor, option?: any): any;
    /**
     * 取出最新的DialogManager对象
     * @returns {MyDialog}
     * @memberOf MyDialogPlugin
     */
    getInstance(): MyDialog;
    /**
     * 取出指定key的MyDialog对象
     * @param {string} key
     * @returns {MyDialog}
     * @memberOf MyDialogPlugin
     */
    getInstance(key: string): MyDialog;
    /**
     * 版本
     */
    version: string;
}
declare module 'vue/types/vue' {
    interface Vue {
        readonly $MyDialog: MyDialog;
        readonly $myDialog: Dialog;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        myDialog?: string | MyDialogOption;
    }
}

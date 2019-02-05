import Vue, { VNode, ComponentOptions, VueConstructor } from 'vue'

/**
 * render函数、template字符串模板、component配置
 */
export type DialogComponent = ComponentOptions<any> | string | {(): VNode} | VueConstructor

/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface DialogOption {
    // 标题
    title?: string,

    // 延迟多少秒后打开
    delay?: number | string,

    // 宽度
    width?: number | string,

    // 高度
    height?: number | string,

    //风格参考了bootstrap： primary warn info warning danger 
    type?: 'primary' | 'warn' | 'info' | 'warning' | 'danger',

    // 传入的内容
    content: DialogComponent,

    // content的porps的数据
    propsData: object,

    // 是否在 dialog 出现时将 body 滚动锁定
    scrollable?: boolean,

    //是否显示右上角关闭按钮
    showClose?: boolean,

    // 是否显示遮罩层
    showMask?: boolean,

    // 是否可通过点击遮罩关闭 dialog
    maskClosable?: boolean,

    // 设置层级
    zIndex?: number | string,

    // 打开对话框后的事件
    onShow?: {(this: IDialog):void},

    // 打开对话框前的事件
    onBeforeCreate?: {(this: IDialog): boolean | void | Promise<boolean | void>},

    // 对话框关闭前的事件，参数关闭时候返回的对象，如果该函数返回false对话框将不会关闭
    onBeforeClose?:{(this: IDialog, $event: any): boolean | void | Promise<boolean | void>}

    //对话框关闭后的事件
    onClose?: {(this: IDialog): void},
}


/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface DialogManagerOption extends DialogOption {

    // 指定manager的key
    key?: string,
}


/**
 * 对话框实例
 * @interface IDialog
 */
export interface IDialog {
    
    // 对话框的ID
    id: number,

    // 设置对话框标题
    setTitle(title: string): void,

    // 获取标题
    getTitle(): string
    
    // 设置Dialog 宽高
    resize(size: {
        height?: number | string,
        width?: number | string,
    }): void,
    
    // 获取宽度
    getWidth(): number | string
    
    // 设置宽度
    setWidth(width: number | string)
    
    // 获取高度
    getHeight(): number | string
    
    // 设置高度
    setHeight(height: number | string)

    // 初始化配置
    readonly getOption: ()=> DialogOption,

    // Dialog 内容
    setContent(dialogComponent: DialogComponent)

    // 关闭
    close(returnData:any): Promise<boolean>
}

/**
 * 对话框控制对象
 * interface DialogManager
 */
export interface IDialogManager {

    // 初始化的key
    readonly key: string

    // 默认配置
    readonly defaultOption: DialogOption,
    
    // 打开对话框
    open(option: DialogOption): IDialog,

    // 最新打开的对话框
    readonly topDialog: IDialog
}

/**
 * 对话框控制对象
 * interface Dialog
 */
export interface IDialogPlugin {
    install(vue: VueConstructor, option?: any);

    /**
     * 取出最新的DialogManager对象
     * @returns {IDialogManager} 
     * @memberOf IDialogPlugin
     */
    getInstance(): IDialogManager

    /**
     * 取出指定key的IDialogManager对象
     * @param {string} key 
     * @returns {IDialogManager} 
     * @memberOf IDialogPlugin
     */
    getInstance(key: string): IDialogManager

    /**
     * 版本
     */
    version: string
}

// 扩充vue的原型和options
declare module 'vue/types/vue' {
    interface Vue {
        // 当前vue实例绑定的对户框管理者实例
        readonly $MyDialog: IDialogManager,
        
        // 当前控件对应的对话框实例
        readonly $myDialog: IDialog,
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        myDialog?: string | DialogManagerOption
    }
}
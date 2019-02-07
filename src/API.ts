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
    // delay?: number | string,

    // 宽度
    width?: number | string,

    // 高度
    height?: number | string,

    //风格参考了bootstrap： primary warn info warning danger 
    // type?: 'primary' | 'warn' | 'info' | 'warning' | 'danger',

    // 传入的内容
    content: DialogComponent,

    // content的porps的数据
    propsData: object,

    // 是否在 dialog 出现时将 body 滚动锁定
    // scrollable?: boolean,

    //是否显示右上角关闭按钮
    showClose?: boolean,

    // 是否显示遮罩层
    showMask?: boolean,

    // 是否可通过点击遮罩关闭 dialog
    maskClosable?: boolean,

    // 设置层级
    zIndex?: number | string,

    // 打开对话框后的事件
    onShow?: {(this: Dialog):void},

    // 打开对话框前的事件
    onBeforeCreate?: {(this: Dialog, option: DialogOption): boolean | void | Promise<boolean | void>},

    // 对话框关闭前的事件，参数关闭时候返回的对象，如果该函数返回false对话框将不会关闭
    onBeforeClose?:{(this: Dialog, returnData: any): boolean | void | Promise<boolean | void>}

    //对话框关闭后的事件
    onClose?: {(this: Dialog, returnData: any): void},
}


/**
 * 创建对话框的配置
 * @interface DialogOption
 */
export interface MyDialogOption extends DialogOption {

    // 指定manager的key
    key?: string,
}


/**
 * 对话框实例
 * @interface Dialog
 */
export interface Dialog {
    
    // 对话框的ID
    id: number,

    /**
     * 设置对话框标题
     * @param {string} title    设置的标题
     * @memberOf Dialog
     */
    setTitle(title: string): void,

    /**
     * 获取当前标题
     * @returns {string}        当前标题
     * 
     * @memberOf Dialog
     */
    getTitle(): string
    
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
        height?: number | string,
        width?: number | string,
    }): void,
    
    /**
     * 获取宽度
     * @returns {(number | string)}     宽度当前的值
     * 
     * @memberOf Dialog
     */
    getWidth(): number | string
    
    /**
     * 设置宽度
     * @param {(number | string)} width     新的宽度
     * 
     * @memberOf Dialog
     */
    setWidth(width: number | string)
    
    /**
     * 获取高度
     * @returns {(number | string)}         高度当前的值
     * 
     * @memberOf Dialog
     */
    getHeight(): number | string
    
    /**
     * 设置高度
     * @param {(number | string)} height    新的高度
     * 
     * @memberOf Dialog
     */
    setHeight(height: number | string)

    /**
     * 获取当前对话框的配置
     * @returns {DialogOption}         当前对话框的配置
     * @memberOf Dialog
     */
    readonly getOption: ()=> DialogOption,

    /**
     * 设置对话框的内容
     * @param {DialogComponent} dialogComponent 
     * @memberOf Dialog
     */
    setContent(dialogComponent: DialogComponent)

    /**
     * 关闭对户框
     * @param {*} returnData            传递给父控件的返回值
     * @returns {Promise<boolean>}      是否关闭成功，如果成返回true，否则返回false
     * 
     * @memberOf Dialog
     */
    close(returnData:any): Promise<boolean>
}

/**
 * 对话框控制对象
 * interface DialogManager
 */
export interface MyDialog {

    // 初始化的key
    readonly key: string

    // 默认配置
    readonly defaultOption: DialogOption,
    
    // 打开对话框
    open(option: DialogOption): Dialog,

    // 最新打开的对话框
    readonly topDialog: Dialog
}

/**
 * 对话框控制对象
 * interface Dialog
 */
export interface MyDialogPlugin {
    install(vue: VueConstructor, option?: any);

    /**
     * 取出最新的DialogManager对象
     * @returns {MyDialog} 
     * @memberOf MyDialogPlugin
     */
    getInstance(): MyDialog

    /**
     * 取出指定key的MyDialog对象
     * @param {string} key 
     * @returns {MyDialog} 
     * @memberOf MyDialogPlugin
     */
    getInstance(key: string): MyDialog

    /**
     * 版本
     */
    version: string
}

// 扩充vue的原型和options
declare module 'vue/types/vue' {
    interface Vue {
        // 当前vue实例绑定的对户框管理者实例
        readonly $MyDialog: MyDialog,
        
        // 当前控件对应的对话框实例
        readonly $myDialog: Dialog,
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        myDialog?: string | MyDialogOption
    }
}
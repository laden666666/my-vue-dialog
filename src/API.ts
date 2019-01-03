import { VNode, VNodeComponentOptions } from 'vue'

/**
 * render函数、template字符串模板、component配置
 */
export type VueOption = VNodeComponentOptions | string | {(): VNode}


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
    type?: string,

    // 传入的内容
    content: VueOption,

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

    //确定按钮的文字
    okText?: string,

    //点击确定的回调
    onOk?: {(): void},

    // 取消按钮的文字
    cancelText?: string,

    // 点击取消的回调
    onCancel?: {(): void},

    // 打开对话框的校验如果该函数为false对话框不会打开
    onbeforeShow?: {(option: DialogOption): boolean | undefined},

    // 打开对话框后的事件
    onShow?: {():void},

    // 对话框关闭前的事件，参数关闭时候返回的对象，如果该函数返回false对话框将不会关闭
    onBeforeClose?:{($event: any): boolean | undefined | Promise<boolean | undefined>}

    //对话框关闭后的事件
    onClose?: {(): void},

    
}
/**
 * 对话框实例
 * @interface DialogInstance
 */
export interface DialogInstance {    
    id: number,

    // 设置对话框标题
    setTitle: (title: string) => void,
    
    // 设置Dialog 宽高
    resize: (size: {
        height?: number|string,
        width?: number|string,
    })=>void,

    // 初始化配置
    option: DialogOption,

    // Dialog 内容
    content: ()=>Promise<VueOption>,

    // 关闭
    close: {(returnData:any):void},

    //destroy销毁
    destroy: ()=> void,

}


/**
 * 对话框控制对象
 * interface IDialog
 */
export interface IDialog {
    // 默认配置
    readonly defaultOption: DialogOption,
    
    // 打开对话框
    open(option: DialogOption):DialogInstance,

    // 关闭对话框
    close(returnData: any),
    
    // 根据ID关闭对话框
    closeByID(id: number, returnData?:any),

    
}
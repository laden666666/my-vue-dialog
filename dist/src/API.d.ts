import { VNode, VNodeComponentOptions } from 'vue';
/**
 * render函数、template字符串模板、component配置
 */
export declare type VueOption = VNodeComponentOptions | string | {
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
    type?: string;
    content: VueOption;
    scrollable?: boolean;
    showClose?: boolean;
    showMask?: boolean;
    maskClosable?: boolean;
    zIndex?: number | string;
    okText?: string;
    onOk?: {
        (): void;
    };
    cancelText?: string;
    onCancel?: {
        (): void;
    };
    onbeforeShow?: {
        (option: DialogOption): boolean | undefined;
    };
    onShow?: {
        (): void;
    };
    onBeforeClose?: {
        ($event: any): boolean | undefined | Promise<boolean | undefined>;
    };
    onClose?: {
        (): void;
    };
}
/**
 * 对话框实例
 * @interface DialogInstance
 */
export interface DialogInstance {
    id: number;
    setTitle: (title: string) => void;
    resize: (size: {
        height?: number | string;
        width?: number | string;
    }) => void;
    option: DialogOption;
    content: () => Promise<VueOption>;
    close: {
        (returnData: any): void;
    };
    destroy: () => void;
}
/**
 * 对话框控制对象
 * interface IDialog
 */
export interface IDialog {
    readonly defaultOption: DialogOption;
    open(option: DialogOption): DialogInstance;
    close(returnData: any): any;
    closeByID(id: number, returnData?: any): any;
}

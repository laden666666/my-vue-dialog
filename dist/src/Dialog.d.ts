/**
 * @file 对话框控制逻辑
 */
import { DialogOption, DialogComponent } from './API';
import { Dialog } from '../dist/src/API';
import Vue, { VueConstructor } from 'vue';
export declare class DialogImpl implements Dialog {
    $option: DialogOption;
    private _data;
    id: number;
    constructor($option: DialogOption, _data: Vue);
    $open(): void;
    setTitle(title: string): void;
    getTitle(): string;
    resize({ height, width, }: {
        height?: number | string;
        width?: number | string;
    }): void;
    getWidth(): number | string;
    setWidth(width: number | string): void;
    getHeight(): number | string;
    setHeight(height: number | string): void;
    getOption(): DialogOption;
    setContent(dialogComponent: DialogComponent): void;
    $content: VueConstructor;
    $show: boolean;
    $calcBodyScrollWidth: number;
    close(returnData: any): Promise<boolean>;
    /**
     * 销毁对户框，将其从list里面移除
     * @memberOf Dialog
     */
    $destroy(): void;
}

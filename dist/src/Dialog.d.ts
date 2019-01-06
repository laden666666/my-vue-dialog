/**
 * @file 对话框控制逻辑
 */
import { DialogOption, DialogComponent } from './API';
import { IDialog } from '../dist/src/API';
export declare class Dialog implements IDialog {
    $option: DialogOption;
    id: number;
    constructor($option: DialogOption);
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
    $show: boolean;
    close(returnData: any): Promise<boolean>;
}

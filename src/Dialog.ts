
/**
 * @file 对话框控制逻辑
 */
import {DialogOption, DialogComponent} from './API';
import { IDialog } from '../dist/src/API';

let cid = 0;


export class Dialog implements IDialog {

    id: number = cid++

    constructor(public $option: DialogOption){
    }

    // 设置对话框标题
    setTitle(title: string){
        this.$option.title = title
    }

    // 获取标题
    getTitle(): string{
        return this.$option.title
    }
    
    // 设置Dialog 宽高
    resize({
        height = this.$option.height,
        width = this.$option.width,
    }: {
        height?: number | string,
        width?: number | string,
    }): void{
        this.$option.height = height
        this.$option.width = width
    }
    
    // 获取宽度
    getWidth(): number | string{
        return this.$option.width
    }
    
    // 设置宽度
    setWidth(width: number | string){
        this.$option.width = width
    }
    
    // 获取高度
    getHeight(): number | string{
        return this.$option.height
    }
    
    // 设置高度
    setHeight(height: number | string){
        this.$option.height = height
    }
    
    // 初始化配置
    getOption(): DialogOption{
        // 返回一个克隆对象，防止把响应式对象暴露
        return {...this.$option}
    }

    // Dialog 内容
    setContent(dialogComponent: DialogComponent){
    }

    // 显示对话框
    $show: boolean = true

    // 关闭
    async close(returnData: any): Promise<boolean>{
        let result = await this.$option.onBeforeClose(returnData)
        if(result === false){
            this.$show = false
        }
        return true
    }
}


/**
 * @file 对话框控制逻辑
 */
import {DialogOption, DialogComponent} from './API';
import { IDialog } from '../dist/src/API';
import Vue, {ComponentOptions, VueConstructor, VNode} from 'vue';

let cid = 0;

export class Dialog implements IDialog {

    id: number = cid++

    constructor(public $option: DialogOption, private _data: Vue){
        this.setContent($option.content)
    }

    $open(){
        // 打开的动画效果
        setTimeout(()=>{
            this.$show = true
        }, 50)
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
        // 根据content的不同类型，创建不同类型的对象。对于component以外的控件形式（render和string）
        // 通过propsData动态计算出props
        let componentOptions: ComponentOptions<any> | VueConstructor
        if(typeof dialogComponent === 'string'){
            componentOptions = {
                props: Object.keys(this.$option.propsData),
                template: dialogComponent,
            }
        } 
        if(typeof dialogComponent === 'function' && dialogComponent.prototype instanceof Vue) {
            componentOptions = dialogComponent as VueConstructor
        }
        if(typeof dialogComponent === 'function' && !(dialogComponent.prototype instanceof Vue)) {
            componentOptions = {
                props: Object.keys(this.$option.propsData),
                render: dialogComponent as ()=>VNode,
            }
        }
        if(typeof dialogComponent === 'object') {
            componentOptions = dialogComponent
        }

        let that = this
        this.$content = Vue.extend(componentOptions as any).extend({
            beforeCreate(this: any){
                this.$myDialog = that
            },
            mounted(){
                that.$option.onShow.call(that)
            },
            data(){
                return {
                    $myDialog: that
                }
            },
            // computed: {
            //     $myDialog: ()=> {
            //         return that
            //     }
            // },
        })
    }

    // 正在的vue的控件对象
    $content: VueConstructor

    // 显示对话框
    $show: boolean = false

    // 关闭
    async close(returnData: any): Promise<boolean>{
        let result = await this.$option.onBeforeClose.call(this, returnData)
        if(result !== false){
            // 关闭动画
            this.$show = false
            setTimeout(()=>{
                this.$option.onClose.call(this)
                this.$destroy()
            }, 200)
            
            return true
        } 
        
        return false
    }

    /**
     * 销毁对户框，将其从list里面移除
     * @memberOf Dialog
     */
    $destroy(){
        let data: { list: Dialog[]} = this._data as any
        data.list.splice(data.list.findIndex(dialog=> dialog.id === this.id), 1) 
        this._data = null
    }
}

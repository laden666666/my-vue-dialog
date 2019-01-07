import { DialogOption, IDialogManager, IDialog } from './API';
import { DialogManagerOption } from '../dist/src/API';
import { getManager } from './DataBase';
import { Dialog } from './Dialog';
import Vue, {ComponentOptions} from 'vue';

declare function require<T>(name: string): T

let MyDialogList = Vue.extend(require<{
    default: ComponentOptions<any>
}>('./vue/MyDialogList.vue').default)

// 默认配置
const defaultOption: DialogOption = {
    title: '',
    height: 300,
    width: 400,
    delay: 0,
    content: null,
    propsData: {},
    onBeforeShow: ()=>true,
    onShow: ()=>{},
    onBeforeClose: ()=>true,
    onClose: ()=>{},
    scrollable: false,
    showClose: true,
    showMask: true,
    maskClosable: false,
    zIndex: 1000,
}

// 自动生成key的种子
let uid = 0

/**
 * 对话框控制对象，所有对话框操作的核心类
 */
class DialogManager implements IDialogManager {

    constructor(option: string | DialogManagerOption, private _vue: Vue){
        if(typeof option === 'object') {
            // 如果用户未设置key，自动生成一个
            this._key = (typeof option.key === 'string' || typeof option.key === 'number') ?  
                '' + option.key : '' + uid++ 
            this._defaultOption = {...defaultOption, ...option}
        } else {
            this._key = option || '' + uid++ 

            // 克隆一份defaultOption，防止用户修改defaultOption对象
            this._defaultOption = {...defaultOption}
        }
    }

    // 默认配置
    private _defaultOption: DialogOption
    get defaultOption(){
        return this._defaultOption
    }

    // 初始化的key
    private _key: string
    get key(){
        return this._key
    }
    
    // 打开对话框
    open(option?: DialogOption): IDialog{
        if(!option.content){
            throw new Error('The component of Dialog option is required')
        }

        option = { ...this.defaultOption, ...option }
        let dialog: Dialog = new Dialog(option, getManager(this._key).data as any)

        this._init()

        Promise.resolve()
            .then(()=>{
                return dialog.$option.onBeforeShow.call(dialog)
            })
            .then(result=>{
                if(result){
                    // 将dialog放入list里面
                    let data = getManager(this._key)
                    data.data.list.push(dialog)
                }
            })

        return dialog
    }

    // 最新打开的对话框
    get topDialog(): IDialog{
        let data = getManager(this.key)
        
        return data ? data.data.list[data.data.list.length - 1] : null
    }

    // 销毁
    destroy(){
        this._vue = null
        if(this._subVue){
            this._subVue.$el.removeChild(this._subVue.$el)
            this._subVue.$destroy()
            this._subVue = null
        }
    }

    // 初始化
    _subVue: Vue
    _init(){
        // 用户在第一次打开时候初始化
        if(!this._subVue){
            this._subVue = new MyDialogList({
                propsData: {
                    vue: getManager(this._key).data
                },
                parent: this._vue,
            })
    
            let div = document.createElement('div')
            document.body.appendChild(div)
            this._subVue.$mount(div)
        }
    }
}

export default DialogManager

import { DialogOption, MyDialog, Dialog, MyDialogOption } from './API';
import { getManager } from './DataBase';
import { DialogImpl } from './Dialog';
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
    // delay: 0,
    content: null,
    propsData: {},
    onBeforeCreate: ()=>true,
    onShow: ()=>{},
    onBeforeClose: ()=>true,
    onClose: ()=>{},
    // scrollable: false,
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
class MyDialogImpl implements MyDialog {

    constructor(option: string | MyDialogOption, private _vue: Vue){
        if(option !== 'null' && typeof option === 'object') {
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
    open(option?: DialogOption): Dialog{
        if(!option.content){
            throw new Error('The component of Dialog option is required')
        }
        
        let data = getManager(this._key)

        // 创建对话框，并把创建结果放到MyDialogData里面
        option = { ...this.defaultOption, ...option }
        let dialog: DialogImpl = new DialogImpl(option, getManager(this._key).data as any)
        data.data.list.push(dialog)

        this._init()

        Promise.resolve()
            .then(()=>{
                return dialog.$option.onBeforeCreate.call(dialog, dialog.$option)
            })
            .then(result=>{
                // 如果onBeforeCreate里面校验未通过，不打开对话框。移除掉对话框对象
                if(result !== false){
                    dialog.$open()
                } else {
                    dialog.$destroy() 
                }
            })

        return dialog
    }

    // 最新打开的对话框
    get topDialog(): DialogImpl{
        let data = getManager(this.key)

        return data ? (data.data.list[data.data.list.length - 1] || null) : null
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

export default MyDialogImpl

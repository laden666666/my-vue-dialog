<template>
    <Doc>
        <H1>MyDialog的API</H1>
        <H2>MyDialogPlugin</H2>
        <P>通过import引入的对象，主要用于Vue.use初始化插件：</P>
        <Code :code="
`import MyDialogPlugin from 'my-vue-dialog'
vue.use(MyDialogPlugin)`" lang="javascript"></Code>
install(vue: VueConstructor, option?: any);

        <H3>MyDialogPlugin.getInstance()</H3>
        <Function :data="`
        /**
     * 取出最新的MyDialog对象
     * @returns {MyDialog}        返回最新初始化MyDialog的Vue实例，所对应的MyDialog实例
     * @memberOf IDialogPlugin
     */`"></Function>
        <P>参考<A href="#/EdgeCases#单独引用">单独引用</A></P>
    
        <H3>MyDialogPlugin.getInstance(key: string)</H3>
        <Function :data="`
        /**
     * 取出指定key的IMyDialog对象
     * @param {string} key              MyDialog的key
     * @returns {IMyDialog}        key对应的MyDialog实例
     * @memberOf IDialogPlugin
     */`"></Function>
        <P>参考<A href="#/EdgeCases#处理多实例情况">处理多实例情况</A></P>

        <H3>version</H3>
        <P><Strong>MyDialog</Strong>库的版本。</P>
        
        <H2>MyDialog</H2>
        <P>对话框管理对象，负责创建、管理对话框。该实例会挂载在Vue实例的$MyDialog属性上面。</P>

        <H3>MyDialog.open(option: DialogOption)</H3>
        <P>创建对话框，参数DialogOption请参考<A href="#/API#DialogOption">DialogOption</A></P>
        <Function :data="`
        /**
     * 取出指定key的IMyDialog对象
     * @param {DialogOption} option     对户框配置
     * @returns {Dialog}                返回对话框实例
     * @memberOf IDialogPlugin
     */`"></Function>

        <Instructions :data="[{
                 name: 'id',
                 type: 'number', 
                 describe: '当前对话框的ID。', 
             },]" type="h3"></Instructions>

        <H2>Dialog</H2>
        <P>对话框实例，是对话框的编程接口，该实例会挂载在被打开的对户框控件的Vue实例的$myDialog属性上面。</P>
        <H3>Dialog.setTitle(title: string)</H3>
        <Function :data="`
        /**
     * 设置对话框标题
     * @param {string} title    设置的标题
     * @memberOf IDialog
     */`"></Function>
        <P>参考<A href="#/Useage#设置对话框标题">设置对话框标题</A></P>

        <H3>Dialog.getTitle()</H3>
        <Function :data="`
        /**
     * 获取当前标题
     * @returns {string}        当前标题
     * 
     * @memberOf IDialog
     */`"></Function>

        <H3>Dialog.resize(size)</H3>
        <Function :data="`
        /**
     * 设置Dialog尺寸
     * @param {({
     *         height?: number,
     *         width?: number,
     *     })} size    height是高属性， width是宽属性
     */`"></Function>
        <P>参考<A href="#/Useage#设置对话框大小">设置对话框大小</A></P>

        <H3>Dialog.getWidth(): number</H3>
        <Function :data="`
        /**
     * 获取宽度
     * @returns {number}     宽度当前的值
     * 
     * @memberOf IDialog
     */`"></Function>

        <H3>Dialog.setWidth(width: number)</H3>
        <Function :data="`
        /**
     * 设置宽度
     * @param {(number )} width     新的宽度
     * 
     * @memberOf IDialog
     */`"></Function>

        <H3>Dialog.getHeight(): number</H3>
        <Function :data="`
        /**
     * 获取高度
     * @returns {number}     高度当前的值
     * 
     * @memberOf IDialog
     */`"></Function>

        <H3>Dialog.setHeight(height: number)</H3>
        <Function :data="`
        /**
     * 设置高度
     * @param {(number )} height     新的高度
     * 
     * @memberOf IDialog
     */`"></Function>

        <H3>Dialog.getOption(): DialogOption</H3>
        <Function :data="`
        /**
     * 获取当前对话框的配置
     * @returns {DialogOption}     当前对话框的配置
     * 
     * @memberOf IDialog
     */`"></Function>
        <P>参考<A href="#/Useage#获取对话框初始配置">获取对话框初始配置</A></P>

        <H3>Dialog.setContent(dialogComponent: DialogComponent)</H3>
        <Function :data="`
        /**
     * 设置对话框的内容
     * @param {DialogComponent} dialogComponent 
     * @memberOf IDialog
     * 
     * @memberOf IDialog
     */`"></Function>
        <P>参考<A href="#/Useage#修改对话框内容">修改对话框内容</A></P>

        <H3>Dialog.close(returnData:any): Promise&lt;boolean&gt;</H3>
        <Function :data="`
        /**
     * 关闭对户框
     * @param {*} returnData            传递给父控件的返回值
     * @returns {Promise<boolean>}      是否关闭成功，如果成返回true，否则返回false
     * 
     * @memberOf IDialog
     * 
     * @memberOf IDialog
     */`"></Function>
        <P>参考<A href="#/Useage#关闭对话框">关闭对话框</A></P>
        <P>对于关闭后的返回值的使用，参考<A href="#/EdgeCases#关闭对话框后传出返回值">关闭对话框后传出返回值</A></P>

        <H2>DialogOption</H2>
        <P>创建对话框的配置</P>
        <Instructions :data="[{
            name: 'title',
            type: 'string', 
            required: false,
            default: `''`,
            describe: '对户框的标题', 
        },{
            name: 'height',
            type: 'number', 
            required: false,
            default: '300',
            describe: '打开对话框的高度', 
        },{
            name: 'width',
            type: 'number', 
            required: false,
            default: '400',
            describe: '打开对话框的宽度', 
        },{
            name: 'content',
            type: 'DialogComponent', 
            required: true,
            describe: '传入的内容', 
        },{
            name: 'propsData',
            type: 'object', 
            required: false,
            default: '{}',
            describe: 'content的porps的数据', 
        },{
            name: 'showClose',
            type: 'boolean', 
            required: false,
            default: 'true',
            describe: '是否显示右上角关闭按钮', 
        },{
            name: 'showMask',
            boolean: 'object', 
            required: false,
            default: 'true',
            describe: '是否显示遮罩层', 
        },{
            name: 'maskClosable',
            type: 'boolean', 
            required: false,
            default: 'false',
            describe: 'content的porps的数据', 
        },{
            name: 'zIndex',
            type: 'number', 
            required: false,
            default: '1000',
            describe: '设置层级', 
        }
        ]" type="h3">
            <P slot="title">参考<A href="#/Useage#设置标题">设置标题</A></P>
            <P slot="height">参考<A href="#/Useage#设置对话框的尺寸">设置对话框的尺寸</A></P>
            <P slot="width">参考<A href="#/Useage#设置对话框的尺寸">设置对话框的尺寸</A></P>
            <P slot="content">参考<A href="#/Useage#定义对话框内容">定义对话框内容</A></P>
            <P slot="propsData">参考<A href="#/EdgeCases#父子控件的props传值给对话框">父子控件的props传值给对话框</A></P>
        </Instructions>

        <H3>onShow</H3>
        <P>生命周期函数，对话框打开后的钩子函数。在对户框内容控件的mounted钩子执行后触发，会执行该函数。函数中this指向Dialog对象</P>

        <H3>onBeforeCreate</H3>
        <P>生命周期函数，创建对户框前的的钩子函数，如果该函数返回false对话框将不会被创建。函数中this指向Dialog对象。</P>
        <Function :data="`
        /**
        * @param {DialogOption} option            传递给父控件的返回值
        * @returns {boolean}      是否可以打开对话框，否则返回false，将不会打开对话框
        * 
        * @memberOf IDialog
        */`"></Function>

        <H3>onBeforeClose</H3>
        <P>生命周期函数，对话框关闭前的事件，参数关闭时候返回的对象，如果该函数返回false对话框将不会关闭。函数中this指向Dialog对象。</P>
        <Function :data="`
        /**
        * @param {*} returnData            对户框内容控件传递给父控件的返回值
        * @returns {Promise<boolean>}      是否可以关闭，如果返回false将阻止对话框关闭
        * 
        * @memberOf IDialog
        */`"></Function>
        <P>参考<A href="#/EdgeCases#关闭对话框关闭前校验">关闭对话框关闭前校验</A></P>

        <H3>onClose</H3>
        <P>生命周期函数，对话框关闭后的事件，参数关闭时候返回的对象。函数中this指向Dialog对象。</P>
        <Function :data="`
        /**
        * @param {*} returnData            传递给父控件的返回值
        * 
        * @memberOf IDialog
        */`"></Function>
        <P>参考<A href="#/EdgeCases#关闭对话框后传出返回值">关闭对话框后传出返回值</A></P>
    </Doc>
</template>
import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  props:{
    msg: String
  },
  // 所有的组件选项都可以放在这里
  template: '<button @click="onClick">{{message}} {{msg}}</button>'
})
export default class TestClass extends Vue {
  constructor(){
    super()
    this.message = 'Hello!'
  }

  // 组件方法也可以直接声明为实例的方法
  onClick () {
    window.alert(this.message)
  }
}

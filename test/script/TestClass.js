import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
    template: '<span></span>',
})
export default class TestClass extends Vue {
    mounted(){
        this.$myDialog.close('ok')
    }
}
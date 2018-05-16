import Vue from 'vue'
import { AtMenu } from 'at-ui'
import 'at-ui-style'
import App from './App'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'animate.css'

Vue.use(VueCodemirror)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
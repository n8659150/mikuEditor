// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { AtMenu } from 'at-ui'
import 'at-ui-style'
import App from './App'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'animate.css'
// Vue.use(AtComponents)
Vue.use(VueCodemirror)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
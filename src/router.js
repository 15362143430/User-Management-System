/* eslint-disable */ /*禁止检查*/
import VueRouter from 'vue-router'
import add from './component/ADD.vue'
import table from './component/TABLE.vue'
import info from './component/INFO.vue'
import edit from './component/EDIT.vue'


var router=new VueRouter({
  routes:[
    { path: '/', component: table },
    { path: '/add', component: add },
    { path: '/info/:id', component: info },
    { path: '/edit/:id', component: edit }
  ],
  
})

export default router

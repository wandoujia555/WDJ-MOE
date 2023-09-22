import {createApp} from 'vue'
import {createRouter,createWebHashHistory,RouteRecordRaw}  from "vue-router"
import './style.scss'
import App from './App.vue'


const routes:Array<RouteRecordRaw> = [
    {   
        path: '/', 
        component:()=> import('./page/Home.vue')
    },{
        path:'/Forum',
        component:()=>import('./page/Forum.vue')
    },{
        path:'/aaa',
        component:()=>import('./page/Forum.vue')
    }
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
// App.use(router)
createApp(App).use(router).mount('#app')
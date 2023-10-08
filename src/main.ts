import {createApp} from 'vue'
import App from './App.vue'
import hljs from "highlight.js"; // 引入 highlight.js
import "./style.scss"
import "./s.css"
import {createRouter,createWebHashHistory,RouteRecordRaw}  from "vue-router"

const routes:Array<RouteRecordRaw> = [
    {   
        path: '/', 
        component:()=> import('./page/Home.vue')
    },{
        path:'/Forum',
        component:()=>import('./page/Forum.vue')
    },{
        path:'/Forum/:id',
        component:()=>import('./page/Forum.vue'),
        props: true
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
// App.use(VueMarkdownEditor);
createApp(App).use(router).mount('#app')
// app.use(plugin);
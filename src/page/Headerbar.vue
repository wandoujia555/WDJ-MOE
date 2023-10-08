<script setup lang="ts">
// import {PAGE} from "../untils/constant"
import { watch,computed } from "vue";
import {RouterLink} from "vue-router"
import { equipment } from "../utils/constant";

watch(equipment,(_)=>{
    
})
const ispc = computed(()=>{
    return equipment.value=="pc"
})
// console.log(ispc)
</script>
<template>
    <div class="headerbar-wrap">
        <div class="headerbar">
            <ul class="headerbar-ul" :aa="ispc">
                <div class="logo"><slot name="logo" ></slot></div>
                <div class="page" >
                    <template  v-if="ispc">
                        <!-- <li class="headerbar-ul-li" >aaaaa</li> -->
                        <li class="headerbar-ul-li"><RouterLink to="/">首页</RouterLink></li>
                        <li class="headerbar-ul-li"><RouterLink to="/Forum">档案</RouterLink></li>
                        <li class="headerbar-ul-li"><RouterLink to="/">资料</RouterLink></li>
                        <li class="headerbar-ul-li"><RouterLink to="/">主题设置</RouterLink></li>
                        <li class="headerbar-ul-li"><RouterLink to="/">登录</RouterLink></li>
                    </template>
                    <template v-else>
                        <li  class="headerbar-ul-li">搜索框</li>
                        <div>三</div>
                    </template>
                </div>
                <div class="changetheme"><slot name="changetheme"></slot></div>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
.page{
    display: flex;
    flex: auto;
}
.headerbar-wrap {
    position: relative;
    flex: 50px;
    top: 0;
    left: 0;
    width: 100%;
    line-height: normal;
    border-bottom: 0.2px solid var(--WDJ-color-border);
}
.headerbar {
    overflow: hidden;
    display: block;
    height: 100%;
    color: var(--WDJ-color-text);
    width: 100%;
    top: 0;
    &-ul {
        display: flex;
        width: 100%;
        padding: 0;
        list-style: none;
        &-li{
            text-align: center;
            flex: 1;
            display: inline-block;
        }
    }
}
@font-face {
    font-family: 'Moe-Mashiro';
    src: url('../assets/font/Moe-Mashiro.woff2');
    font-weight: normal;
    font-style: normal;
}
.logo{
    font-family: 'Moe-Mashiro';
}
</style>../utils/constant
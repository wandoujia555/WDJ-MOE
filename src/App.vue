<script setup lang="ts">

import Headerbar from './page/Headerbar.vue'

import Switch from "./components/Switch.vue"
import { ref, watch,onMounted,onUpdated } from 'vue'
import {setEquipment} from "./untils/constant"
import Pc from './page/Pc.vue'
  const theme = ref("light")
  const innerWidth = ref(window.innerWidth)
  watch(innerWidth,(_,b)=>{
    if(b>900){
      setEquipment("pc")
    }else{
      setEquipment("phone")
    }
  })
  const setTheme = (isDark:boolean)=>{
      if(isDark){
        theme.value = "light"
      }else{
        theme.value = "dark"
      }
      if(theme.value == "dark"){
          document.documentElement.className="prefer-composition dark"
      }else{
          document.documentElement.className="prefer-composition light"
      }
  }
  if(window.matchMedia (" (prefers-color-scheme: dark)").matches){
    setTheme(false)
  }

  onMounted(()=>{
    const handleResizeWindow = ()=>{
      innerWidth.value = window.innerWidth
    }
    window.addEventListener("resize", handleResizeWindow);
  })
  onUpdated(()=>{
    console.log("更新")
  })

</script>

<template>
    <!-- 导航栏 -->
    <Headerbar>
      <template #logo>
        WDJ
      </template>
      <template #changetheme>
        <!-- 🌞☀️⭐🌟 -->
        <Switch texta="白天" textb="黑暗" balll="☀️" ballr="🌙" :flasecallback="setTheme" :truecallback="setTheme" :isTrue="theme==`dark`"></Switch>
      </template>
    </Headerbar>
    <!-- 页面 -->
    <Pc></Pc>
</template>

<style scoped>

</style>

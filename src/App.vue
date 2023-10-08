<script setup lang="ts">

import Headerbar from './page/Headerbar.vue'
import Switch from "./components/Switch.vue"
import { ref, watch,onMounted,onUpdated } from 'vue'
import {setEquipment} from "./utils/constant"

import Pc from './page/Pc.vue'
  const theme = ref("light")
  const innerWidth = ref(window.innerWidth)

  
  watch(innerWidth,(_)=>{
    if(_>800){
      setEquipment("pc")
    }else{
      setEquipment("phone")
    }
  })
  const setTheme = (isDark:boolean,banAni?:boolean)=>{
    if(banAni||!document.startViewTransition){
      if(isDark){
          theme.value = "light"
        }else{
          theme.value = "dark"
        }
        
        if(theme.value == "dark"){
            document.body.className = "dark"
            document.documentElement.className="prefer-composition dark"
        }else{
            document.body.className = "light"
            document.documentElement.className="prefer-composition light"
        }
        return;
    }
      const x = document.body.clientWidth;
      const y = 10;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      console.log(endRadius)
      const transition = document.startViewTransition(()=>{
        if(isDark){
          theme.value = "light"
        }else{
          theme.value = "dark"
        }
        
        if(theme.value == "dark"){
            document.body.className = "dark"
            document.documentElement.className="prefer-composition dark"
        }else{
            document.body.className = "light"
            document.documentElement.className="prefer-composition light"
        }
      })
      console.log(transition)
      transition.ready.then(()=>{
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
          }
        )
      })
  }
  if(window.matchMedia (" (prefers-color-scheme: dark)").matches){
    setTheme(false,true)
  }else{
    setTheme(true,true)
  }
  onMounted(()=>{
    const handleResizeWindow = ()=>{
      console.log("变化")
      innerWidth.value = window.innerWidth
    }
    window.addEventListener("resize", handleResizeWindow);
  })
  onUpdated(()=>{
    console.log("更新")
  })
  
  

</script>

<template>
    <Headerbar>
      <template #logo>
        WDJ豌豆荚猫
      </template>
      <template #changetheme>
        <!-- 🌞☀️⭐🌟 -->
        <!--  :class={left:(theme=="dark"),right:!(theme=="dark")} -->
        <Switch texta="白天" textb="黑暗" balll="" ballr="" :flasecallback="setTheme" :truecallback="setTheme" :isTrue="theme==`dark`"><template #ball><div class="ball"></div></template></Switch>
      </template>
    </Headerbar>
    <!-- 页面 -->
    <Pc></Pc>
</template>

<style scoped lang="scss">
.root-bgc-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.root-bgc{
  width: calc(150vw + 150vh);
  height: calc(150vw + 150vh);
  position: fixed;
  top: -150%;
  left: -50%;
  z-index: -1;
  box-shadow: inset 0 0 0px 0 #242424;
  // box-shadow: inset 0 0 0 cadetblue;
  transition: all 1s;
  border-radius: 100%;
}
.dark .root-bgc{
  box-shadow: inset 0 0 0px calc( 100vh + 75vh ) #242424;
}
.ball{
    width:100%;
    height: 100%;
    border-radius: 100%;
    background-color: transparent;
    box-shadow: 0 0 0 #fefa01,inset 0 0 10px 10px #ef7800;
    transition: box-shadow 0.3s;
    // box-shadow: 0 0 10000px #fefa01,inset 0em 0em 100px 10px #fefa01;
}
.light .ball{
    float: left;
    box-shadow:inset 0 0 0px 10px #fefa01;
}
.dark  .ball{
    float: right;
    border: 4px;
    box-shadow:inset -6px -3px 0px -1px #fefa01;
}
</style>
./utils/constant
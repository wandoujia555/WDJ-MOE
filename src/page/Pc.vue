<script setup lang="ts">

</script>
<template>
    <div class="pc-wrap">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
    </div>
</template>
<style scoped lang="scss">
.pc-wrap {
  // margin-top: 50px;
    // padding-top: 50px;
    width: 100%;
    height: 100%;
}
.slide-fade-enter{
  position: fixed;
  transition: all .3s ease;
  // background-color: #fff;
}
.slide-fade-leave-active {
  position: fixed;
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  position: fixed;
  transform: translateX(200px);
  opacity: 0;
}




// .slide-fade-enter-to{
//   transform: translateX(200px);
// }
// .slide-fade-enter-from{
//   transition: all 3s ease;
//   transform: translateX(-200px);
// }
.slide-fade-enter-active{
  transform: translateX(-200px);
  opacity: 0;
  transition: all .3s ease-out;
} 
.slide-fade-enter-to{
  opacity: 1;
  transform: translateX(0);
}


</style>
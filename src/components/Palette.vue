<script setup lang="ts">
import { computed, ref } from 'vue';


    const  scrollY = ref(window.scrollY)

    // watch(
    //     scrollY,
    //     (count, prevCount) => {
    //         console.log(count,prevCount)
    //     }
    // );
    window.onscroll=()=>{
        scrollY.value = window.scrollY
        // console.log(isTopBtn,window.innerHeight)
    }
    const isTopBtn = computed(()=>{return scrollY.value>window.innerHeight} );



</script>
<template>

    <div class="palette-button-wrap">

    </div>

</template>
<style scoped lang="scss">

.palette-button-wrap{
    position: fixed;
    width: 20px;
    height: 20px;
    right: 0;
    bottom: 20px;
}

</style>
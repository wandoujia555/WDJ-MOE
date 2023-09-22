<script setup lang="ts">
import { computed, ref } from 'vue';

    const SWITCH=["loading","complete"] as const;
    export type Switchtype = (typeof SWITCH)[number];
    const props = defineProps<{ loading: Switchtype,throttle?:number}>()

    const isshow = ref(props.loading)
    let lastTime=null;
    const isloding = computed(()=>{
        let nowtime = new Date();
        lastTime = nowtime
        return props.loading == SWITCH[0]
    })
</script>
<template>
    <div class="skeleton-wrap">
        <div class="skeleton">
            <transition name="skeleton-a">
                <template v-if="isloding">
                        <div class="loading">
                            <slot name="loading"></slot>
                        </div>
                </template>
                <template v-else>
                    <div class="complete">
                        <slot name="complete"></slot>
                    </div>
                </template>
            </transition>
        </div>
    </div>
</template>
<style>
.skeleton-wrap{
    /* display: inline-block; */
    position: relative;
    /* width: 100%;
    height: 100%; */
    text-align: left;
}
.skeleton{
    height: 100%;
    width: 100%;
}
.loading{
    opacity: 1;
}
.loading{
    opacity: 1;
}


/* 动画 */

.skeleton-a-enter{
    position: absolute;
}
.skeleton-a-leave-active {
    position: absolute;
}
.skeleton-a-leave-to{
    opacity: 0;
}

.skeleton-a-enter-from{
    opacity: 0;
}
.skeleton-a-enter-active{
    opacity:1;
}


/* 
.skeleton-a-enter{
    position: absolute;
}
.skeleton-a-leave-active {
    position: absolute;
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.skeleton-a-leave-to{
  opacity: 0;
}

.skeleton-a-enter-from{
    opacity: 0;
}
.skeleton-a-enter-active{
    opacity:1;
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */


</style>
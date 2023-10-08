<script setup lang="ts">
import { computed, ref,onUpdated } from 'vue';
    // 如果传入的loading值等于"loading"则显示骨架屏
    // 否则显示内容
    
    const SWITCH= ["loading","complete"] as const;
    export type Switchtype = (typeof SWITCH)[number];
    const props = defineProps<{ loading: Switchtype,throttle?:number, truecallback?:Function,flasecallback?:Function}>()
    // 是否显示
    const isshow = ref<Switchtype>(props.loading)
    // 定时器
    const setTime = ref<any>()
    const isloding = computed(()=>{
        return isshow.value == SWITCH[0];
    })
    // 改变状态
    const change = (isTrue:boolean)=>{
        if(setTime.value)clearTimeout(setTime.value)
        if(isTrue==true){
            if(props.throttle)
                setTime.value = setTimeout(()=>{
                    isshow.value = "complete";
                    if(props.truecallback)
                        props.truecallback(false)
                },props.throttle)
            else{
                
            }
        }else{
            isshow.value = "loading";
            if(props.truecallback)
                props.truecallback(true)
        }
    }
    onUpdated(()=>{
        change(props.loading!="loading")
    })
</script>
<template>
    <div class="skeleton-wrap">
        <div class="skeleton">
            <transition name="skeleton-a">
                <div class="aaaa">
                    <template v-if="isloding">
                            <div class="loading">
                                <slot name="loading"></slot>
                            </div>
                    </template>
                    <!-- <template v-show="!isloding"> -->
                        <div class="complete" v-show="!isloding">
                            <slot name="complete"></slot>
                        </div>
                    <!-- </template> -->
                </div>
            </transition>
        </div>
    </div>
</template>
<style>
.aaaa{
    width: 100%;
    height: 100%;
}
.skeleton-wrap{
    /* display: inline-block; */
    position: relative;
    /* width: 100%;
    height: 100%; */
    text-align: left;
    min-height: 400px;
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

</style>
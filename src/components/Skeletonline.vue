<script setup lang="ts">
const props = defineProps<{
    style?:StyleValue
    animation?:boolean
    class?:any
}>()
import {StyleValue, computed} from "vue"

const classname =computed(()=>{
    if(props.class)
        return "line "+props.class
    else
        return "line"
})

</script>

<template>
    <div :class="classname" :style="props.style">
        <div v-show="animation" class="line-glint"></div>
    </div>
</template>
<style scoped lang="scss">
.line{
    overflow: hidden;
}
.line-glint{
    display: block;
    width:100%;
    height: 100%;
    background: linear-gradient(to right, #ffffff00 34%,var(--WDJ-color-border-show)  67%, #ffffff00 70%);
    background-size: 400% 100%;
    background-color: var(--WDJ-color-border);
    animation: changebgc  ease 2s infinite;
}


@keyframes changebgc {
    0% {
        background-position: 100% 50%
    }
    100%{
        background-position: 0% 50%
    }
}

</style>
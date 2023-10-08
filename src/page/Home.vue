<script setup lang="ts">
import { watch } from "vue";
import { equipment } from "../utils/constant";
import Progress from "../components/Progress.vue"
import Pea from "@/components/Pea/Pea.vue";
import Editor from "../components/features/Editor.vue";
watch(equipment,(_)=>{
    console.log(_)
})
</script>
<template>
    <div class="Home-wrap">
        <div class="Home-wrap-bgc">
        </div>
        <Pea></Pea>
        <Editor></Editor>
        <Progress></Progress>
    </div>
</template>
<style scoped lang="scss">
.text{
    color: #fff;
    filter: grayscale(1) contrast(999) invert(1)
}
.Home-wrap{
    // position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
    color: azure;
}
.Home-wrap-bgc{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    &-ball{
        position: absolute;
        top:-200px;
        right: -200px;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        box-shadow: -100px 100px 1000px #fefa01;
    }
}
.login{
    display: flex;
}
</style>
<style>
</style>../utils/constant
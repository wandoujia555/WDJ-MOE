<script setup lang="ts">
import { watch,ref,computed } from "vue";
import { equipment } from "../untils/constant";
import Skeleton, { Switchtype } from "../components/Skeleton.vue"
import Switch from "../components/Switch.vue";
import PeaSk from "../components/Skeletons/PeaSk.vue"
watch(equipment,(_)=>{
    console.log(_)
})
const aaa = ref<Switchtype>("loading")
const setaaatrue = (isTrue:boolean)=>{
    if(isTrue)aaa.value = "loading"
    else aaa.value = "complete"
}
const isloding = computed(()=>{
    return aaa.value
})
// console.log(classmode)
</script>
<template>
    <div class="Home-wrap">
        <Switch :truecallback="setaaatrue" :flasecallback="setaaatrue"></Switch>
        <Skeleton :throttle="1000" :loading="isloding">
            <template #loading>
                <PeaSk></PeaSk>
            </template>
            <template #complete>hhhhhh</template>
        </Skeleton>
        <!-- <Pea></Pea> -->
    </div>
</template>
<style scoped lang="scss">
.Home-wrap{
    width: 100%;
    height: 100%;
    color: azure;
}

.login{
    display: flex;
}


</style>
<style>
</style>
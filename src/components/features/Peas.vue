<script setup lang="ts">

// 请求数据
import { watch,ref,computed } from "vue";
import Skeleton, { Switchtype } from "@/components/Skeleton.vue"

const state = ref<Switchtype>("loading")
const setaaatrue = (isTrue:boolean)=>{
    if(isTrue)state.value = "loading"
    else state.value = "complete"
}
const isloding = computed(()=>{
    return state.value
})




</script>
<template>

    <Skeleton :loading="isloding">
        <template #loading>
            <PeaSk></PeaSk>
        </template>
        <template #complete>hhhhhh</template>
    </Skeleton>

</template>
<script setup lang="ts">
import Skeleton, { Switchtype } from '@/components/Skeleton.vue';
import PeaEN from '@/components/Skeletons/PeaEN.vue';
import PeaSk from '@/components/Skeletons/PeaSk.vue';
import {ref} from "vue"
// import img1 from ""
// import img2 from "@/assets/imgs/2.png"
import img3 from "@/assets/imgs/3.png"
import { RouterLink } from "vue-router";

import "./utils"

const {link='/Forum/2'} = defineProps<{
    link?:string
}>()

const isloding = ref<Switchtype>("loading")
const setIsLoding = (isTrue:boolean)=>{
    if(isTrue)isloding.value =  "loading"
    else isloding.value = "complete"
}
const linkurl = ()=>{
    return link
}
const imgsrcs = ["http://localhost:3000/imgs","http://localhost:3000/imgs",img3]
</script>
<template>
    
    <Skeleton :throttle="1000" :loading="isloding" :truecallback="setIsLoding" :flasecallback="setIsLoding">
        <template #loading>
            <PeaSk></PeaSk>
        </template>
        <template #complete>
            <RouterLink :to="linkurl()">
                <PeaEN :imgsrcs="imgsrcs" :changeToComplete="()=>{setIsLoding(false)}" ></PeaEN>
            </RouterLink>
        </template>
    </Skeleton>

</template>
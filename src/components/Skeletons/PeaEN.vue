<script setup lang="ts">
import { onUpdated, ref } from 'vue';

// import { Switchtype } from '../Skeleton.vue';
    const props = defineProps<{
        imgsrcs:string|Array<string>
        changeToComplete?:VoidFunction
    }>()
    let isloads = 0;
    const boxRefs = ref<Array<HTMLImageElement>>([])

    const imgload = ()=>{
        isloads++;
        if(isloads>=boxRefs.value.length){
            if(props.changeToComplete)
                props.changeToComplete!()
        }
    }

    const NewimgRef = (el:any)=>{
        if(!el)return;
        if(el.onload!=null){
            return;        
        }
        if(el){
            boxRefs.value.push(el)
            el.onload = imgload
        }
    }
    onUpdated(() => {

    });
</script>
<template>

        <div v-for="(imgsrc) in props.imgsrcs" class="img-wrap" >
            <img :src="imgsrc" alt="" :ref="NewimgRef">
        </div>
    

</template>
<style scoped lang="scss">
.img-wrap{
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
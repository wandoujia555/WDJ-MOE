
<script setup lang="ts">
import Skeletonline from '../Skeletonline.vue';



const props = defineProps<{
    imgsum?:number
}>()
let {imgsum=1} = props
</script>

<template>
    <div class="PeaSk">
        <div class="PeaSk-top">
            <div class="headshot">
                <Skeletonline class="headshot-img" animation ></Skeletonline>
            </div> 
            <div class="info">
                <Skeletonline class="name" animation></Skeletonline>
                <Skeletonline class="time" animation></Skeletonline>
            </div>
        </div>
        <div class="PeaSk-center">
            <template v-if="imgsum==1">
                <div class="PeaSk-img1">
                    <Skeletonline class="PeaSk-img1-img" animation></Skeletonline>
                </div>
            </template>
            <template v-else-if="imgsum==2">
                <div class="PeaSk-img2">
                    <Skeletonline class="PeaSk-img2-img-1" animation></Skeletonline>
                    <Skeletonline class="PeaSk-img2-img-2" animation></Skeletonline>
                </div>
            </template>
            <template v-else>
                <div class="PeaSk-img3">
                    <div class="img3-big">
                        <Skeletonline class="img3-big-img" animation></Skeletonline>
                    </div>
                    <div class="img3-small">
                        <Skeletonline class="img3-small-img-1" animation></Skeletonline>
                        <Skeletonline class="img3-small-img-2" animation></Skeletonline>
                    </div>
                </div>

            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
// 图片高度
$--center-height:180px;
// 盒子宽度
// $--center-width:400px;
$--center-width:100%;
// 标题高度
$--top-height:80px;
.PeaSk{
    display:inline-flex;   
    flex-direction:column;
    min-width: 400px;
}
.PeaSk-top{
    display:flex;
    // flex: 1;
    margin-top:10px;
    // margin-left:10px;
    // margin-right:10px;
    width:$--center-width;
    
    // padding-right: 10px;
}
.headshot{
    height:$--top-height;
    width:80px;
    margin-left: 10px;
    &-img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
}
.info{
    flex:auto;
    display:flex;
    flex-direction:column;
    margin-left:10px;
    .name {
        border-radius:5px;
        flex:1;
        margin-bottom:10px;
    }
    .time{
        border-radius:5px;
        flex:1
    }
}
// 中间
.PeaSk-center{
    flex:1;
}
.PeaSk-img{
    &1{
        margin:10px 0 10px 10px;
        height:$--center-height;
        .PeaSk-img1-img{
            height:100%;
            border-radius:10px;
        }
    }
    &2{
        display:flex;
        margin:10px 0 10px 10px;
        height:$--center-height;
        .PeaSk-img2-img-1{
            border-radius:5px;
            flex:1;
            height:100%;
            margin:0;
            margin-right:5px;
        }
        .PeaSk-img2-img-2{
            border-radius:5px;
            flex:1;
            height:100%;
            margin:0;
            margin-left:5px;
        }
    }
    &3{
        display:flex;
        .img3-big{
            height:$--center-height;
            flex:1;
            margin:10px 0 10px 5px;
            .img3-big-img{
                height:100%;
                width:100%;
                border-radius:10px;
            }
        }
        .img3-small{
            flex:1;
            margin:10px;
            display:flex;
            flex-direction:column;
            margin:10px 0;
            margin-left:4px;
            .img3-small-img-1{
                margin-bottom:2px;
                border-radius:5px;
                flex:1;
            }
            .img3-small-img-2{
                margin-top:2px;
                border-radius:5px;
                flex:1;
            }
        }
    }
}
.img{
    flex:1;
    width:40px;
    height:100px;
    border-radius:5px;
    margin-top:10px;
    margin-left:10px;
}




</style>
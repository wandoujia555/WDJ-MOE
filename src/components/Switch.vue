<script setup lang="ts">
import { ref,computed } from 'vue';
    const props = defineProps<{
        textb?:string
        texta?:string
        isTrue?:boolean
        balll?:string
        ballr?:string
        truecallback?:Function
        flasecallback?:Function
    }>()
    // const {isTrue:true} = props
    let isTrue;
    if(isTrue==undefined)isTrue=true
    else isTrue = props.isTrue
    let option = ref(isTrue)
    const isBallleft = computed(()=>{
        if(props.isTrue!=undefined)
            return props.isTrue
        return option.value
    })
    const changeOption=()=>{
        if(isBallleft&&props.truecallback){props.truecallback( option.value);}
        if(!isBallleft&&props.flasecallback){props.flasecallback( option.value);}
        option.value = !option.value
    }
    // const spanballimg = computed(()=>{
    //     if(!option.value&&props.balll){
    //         return props.balll
    //     }else if(option.value&&props.ballr){
    //         return props.ballr
    //     }
    //     return ""
    // })
</script>
<template>
    <div class="switch-wrap">
        <div class="switch-before">
            {{ props.texta }}
        </div>
        <div class="switch-center">
            <button class="switch-button" type="button" @click="changeOption()">
                <!--  -->
                <span class="button-ball" :class={left:isBallleft,right:!isBallleft}>
                    <slot name="ball" :class={left:option,right:!option}></slot>
                    <!-- <div class="ball" :class={left:option,right:!option}></div> -->
                    <!-- {{ spanballimg }} -->
                </span>
            </button>
        </div>
        <div class="switch-after">
            {{ props.textb }}
        </div>
    </div>
</template>
<style lang="scss" scoped>
.switch-wrap{
    color: var(--WDJ-color-text);
    display: flex;
    text-align: center;
    width: 100px;
    font-size: 8px;
    height: 1.5rem;
    line-height: 1.5rem;
}
.switch-before{
    height: 100%;
    float: left;
}
.switch-center{
    flex: auto;
    overflow: hidden;
    display: inline-block;
}
.switch-button{
    overflow: hidden;
    position: relative;
    width: 100%;
    display:block;
    height: 100%;
    padding: 0;
}
.switch-after{
    float: right;
    height: 100%;
}
.right{
    left: calc(100% - 21px);
}
.left{
    left: 1px;
}
.button-ball{
    user-select: none;
    transition: all 0.3s;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    top: 0.5px;
    background-color: rgba($color: #000000, $alpha: 0.1);
    border-radius: 50%;
    line-height: 1.2rem;
}
.switch-button{
    outline :none;
    border: 2px solid;
    background-color: var(--WDJ-color-button);
    border-color: var(--WDJ-color-border);
    border-radius: 1.5rem;
}

.ball{
    width:100%;
    height: 100%;
    border-radius: 100%;
    background-color: transparent;
    box-shadow: 0 0 0 #fefa01,inset 0 0 10px 10px #ef7800;
    transition: box-shadow 0.3s;
    // box-shadow: 0 0 10000px #fefa01,inset 0em 0em 100px 10px #fefa01;
}
.dark .ball{
    float: left;
    box-shadow:inset 0 0 0px 10px #fefa01;
}
.light  .ball{
    float: right;
    border: 4px;
    box-shadow:inset -6px -3px 0px -1px #fefa01;
}
</style>

<script lang="ts">



</script>
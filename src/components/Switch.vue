<script setup lang="ts">
import { computed, ref } from 'vue';
    const props = defineProps<{
        textb?:string
        texta?:string
        isTrue?:boolean
        balll?:string
        ballr?:string
        truecallback?:Function
        flasecallback?:Function
    }>()
    let option = ref(props.isTrue)
    const changeOption=()=>{
        
        if(option.value&&props.truecallback){props.truecallback(true);}
        if(!option.value&&props.flasecallback){props.flasecallback(false);}
        option.value = !option.value
    }
    const spanballimg = computed(()=>{
        if(!option.value&&props.balll){
            return props.balll
        }else if(option.value&&props.ballr){
            return props.ballr
        }
        return "😵"
    })
</script>
<template>
    <div class="switch-wrap">
        <div class="switch-before">
            {{ props.texta }}
        </div>
        <div class="switch-center">
            <button class="switch-button" type="button" @click="changeOption()">
                <span class="button-ball" :class={left:option,right:!option}>
                    {{ spanballimg }}
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
.left{
    left: calc(100% - 21px);
}
.right{
    left: 1px;
}
.button-ball{
    user-select: none;
    transition: all 0.3s;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    top: 0.5px;
    background-color: var(--WDJ-color-button-ball);
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
</style>

<script lang="ts">



</script>
<script setup lang="ts">
    // type Prettify<T>={
    //     [K in keyof T]:T[K]
    // }&{}
    const GRESSSHAPETYPE = ["round","line"] as const
    export type gressShapeType = (typeof GRESSSHAPETYPE)[number]
    export interface Progressprops{
        gressShapeType?:gressShapeType
    }
    const {gressShapeType="line"} = defineProps<Progressprops>()
    
</script>
<template>
    <template v-if="gressShapeType=='line'">
        <div class="progress-wrap">
            <div class="progress">
                <div class="progress-inside">
                </div>
            </div>
        </div>
        <div class="progress-wrap-aa">
            <svg>
                <path class="el-progress-circle__path" d="
                    M 50 50
                    m 0 47
                    a 47 47 0 1 1 0 -94
                    a 47 47 0 1 1 0 94
                    " stroke="#e6a23c" fill="none" opacity="1" stroke-linecap="round" stroke-width="4.8" 
                    style="stroke-dasharray: 350.2965px, 295.31px; 
                    stroke-dashoffset: -36.9137px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s,
                    opacity 0.6s ease 0s;">
                </path>
            </svg>
        </div>
    </template>
    <template v-else>
        <div class="">

        </div>
    </template>


</template>
<style lang="scss">
$--blue:#409eff;
$--yellow:#e6a23c;
.progress-wrap{
    display: block;
    height: 20px;
    width: 60px;
    margin:  0 auto;
    line-height: 0;
    border-radius:10px;
    overflow: hidden;
}
.progress{
    display:block;
    width: 100%;
    height: 100%;
    background-color: #363637;
    background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
    line-height: 0;
    text-align: left;
    &-inside{
        text-align: left;
        display: inline-block;
        width: 40%;
        height: 100%;
        border-radius:10px;
        background-color: #409eff;
    }
}
// 透明
// background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);




</style>
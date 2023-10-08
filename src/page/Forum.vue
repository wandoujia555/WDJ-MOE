<script setup lang="ts">
import Article from '@/components/features/Article.vue';
import { onMounted } from 'vue';
import { useRoute  } from 'vue-router';
const route = useRoute()
// console.log(route.params.id)
 onMounted(function() {
    // console.log(vm.$route.params)
 });
 
</script>
<template>
    <div class="forum-wrap">
        <Article :id="(route.params?.id as string)"></Article>
    </div>
</template>
<style scoped lang="scss">
.forum-wrap{
    width: 100%;
    height: 100%;
    // background-color: #cdafaf;
}
</style>
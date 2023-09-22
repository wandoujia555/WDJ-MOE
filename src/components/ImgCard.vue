<script setup lang="ts">
    const props = defineProps<{
        msg:string
    }>()
    console.log(props)
</script>
<template>
    <div>
        {{msg}}
    </div>
</template>
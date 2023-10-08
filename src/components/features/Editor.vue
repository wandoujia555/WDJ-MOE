<script setup lang="ts">
import { ref } from 'vue';

// import editor from 'mavon-editor'
// import VMdEditor from '@kangc/v-md-editor';
// import 'mavon-editor/dist/css/index.css' 
const markdown= ref('### 标题\naaaaaa')
</script>
<template>
        <!-- <el-form-item label="公告内容" prop="content">
        </el-form-item> -->
        <div></div>
<!--          <el-input type="textarea" v-model="form.content" :autosize="{minRows:9, maxRows:18}" placeholder="请输入公告内容"/>-->
<!-- <v-md-editor :value="markdown" mode="preview"></v-md-editor> -->
<!-- <v-md-preview-html :html="markdown" preview-class="vuepress-markdown-body"></v-md-preview-html> -->
            <!-- <editor.markdownIt v-model="markdown" height="400px"></editor.markdownIt> -->
            <v-md-editor :value="markdown" mode="preview"></v-md-editor>
            <v-md-editor :model-value="markdown" mode="preview"></v-md-editor>

    
</template>
<style scoped lang="scss">
.v-md-editor{
    min-height: 200px;
}
.v-md-editor__left-area-body {
    min-height: 200px;

}
</style>
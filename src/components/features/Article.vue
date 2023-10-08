<script setup lang="ts">
    const {id=1} = defineProps<{
        id?:string
    }>()
    import {marked} from "marked"
    import hljs from "highlight.js"; // 引入 highlight.js
    import "highlight.js/styles/github.css";
    import 'github-markdown-css/github-markdown.css'

    import { onUpdated, ref } from "vue";
    
    const renderer = new marked.Renderer({
        
    });
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        breaks: false,
        extensions:{
            renderers:{
                ["code"]:function(code:any){
                    return "<pre class='code'><code class=language "+code.lang+">"+hljs.highlight(code.text,{language:code.lang}).value+"</code></pre>"
                }
            },
            childTokens:{
                
            }
        }
    });

            // hooks: {
        //     preprocess:function (code: string) {
        //         return code
        //     },
        //     postprocess: function (code: string) {
        //         return code
        //     }
        // },
    const MYMD = ref<string>()
    fetch("http://localhost:3000/articles/"+id)
    .then((response) =>{
         return response.text()
    })
    .then((data)=>{
        MYMD.value = marked(marked(data))
    }) 

    onUpdated(() => {
        
    });


</script>
<template>
    <div class="detail">
    <div class="markdown-body content">
        <div class="article_message hljs renderNav" v-html="MYMD"></div>
    </div>
    </div>

</template>
<style scoped lang="scss">
@import url("../../assets/style/mdstyle.scss");

.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
 
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
.markdown-body{
    background-color: transparent;
}
.hljs {
    color:#a1a8af;
    background-color: transparent;
}

</style>
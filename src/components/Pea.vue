<script setup lang="ts">
</script>
<template>
    <div class="WDJ-pae-wrap">
        <div class="WDJ-pae">
            <div class="pae-title">
                <div class="pae-title-top">
                    <div class="pae-author-image">作者头像</div>
                    <div class="pae-born">
                        <div class="pae-author">作者</div>
                        <div class="pae-time">时间</div>
                    </div>
                </div>

                <div class="pae-info">
                    <!-- <div class="pae_caption">title</div> -->
                    <div class="pae-contentinfo">这是什么吗</div>
                </div>
            </div>
            <div class="pae-context">
                随机分布
            </div>
            <div class="pae-bottom">
                <!-- <div class="pae-belong">
                    <div class="pae-collection">合集</div>
                    <div class="pae-tags">tag</div>
                </div> -->
                <div class="pae-assess">
                    <div class="like">点赞</div>
                    <div class="comment">评论</div>
                    <div class="collection">收藏</div>
                    <div class="forward">转发</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.WDJ-pae-wrap{
    margin: 10px;
    width: 300px;
    height: 300px;
    background-color: skyblue;
}
.WDJ-pae{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.pae-title{
    text-align: left;
    background-color: gray;
    display: flex;
    flex-direction: column;
    
    .pae-title-top{
        display: flex;
        .pae-author-image{
            height:48px;
            width:48px;
            // width: 3rem;
            // height: 3rem;
        }
        .pae-born{
            flex: auto;
            // display: inline-block;
            .pae-author{
                font-size: 20px;
                // float: left;
            }
            .pae-time{
                font-size: 12px;
                // float: left;
            }
        }
    }
    .pae-info{
        flex: auto;
        .pae_caption{
            background-color: rgba($color: #000000, $alpha: 0.5);
        }
        .pae-contentinfo{
            background-color: rgba($color: #fff, $alpha: 0.5);
        }
    }
    
}
.pae-context{
    flex: auto;
    // height: 200px;
    background-color: cadetblue;
}
.pae-bottom{
    display: flex;
    flex-direction: column;
    // height: 5rem;
    text-align: left;
    .pae-assess{
        display: flex;
        div{
            text-align: center;
            flex: 1;
            height: 2rem;
            display: inline-block;
        }
    }
    .pae-belong{
        .pae-collection{
            font-size: 12px;
        }
        .pae-tags{
            font-size: 10px;
        }
    }
}



</style>
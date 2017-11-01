<template>
   <div class="hot">
      <div class="hot_top">
        <div class="hot_text">
            <span class="allSprite yunText"></span>
            <p>更新日期 ：10月25日</p>
        </div>
      </div>
       <ul class="newest">
           <li>
               <div class="leftNum colord43">
                   <p>01</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
             <li>
               <div class="leftNum colord43">
                   <p>02</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="leftNum colord43">
                   <p>03</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="leftNum">
                   <p>04</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
             <li>
               <div class="leftNum">
                   <p>05</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="leftNum">
                   <p>06</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
             <li>
               <div class="leftNum">
                   <p>07</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="leftNum">
                   <p>08</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="leftNum">
                   <p>09</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
             <li>
               <div class="leftNum">
                   <p>10</p>
               </div>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
       </ul>
       <div class="hotFooter">
           <p>查看完整榜单</p>
       </div>
   </div>

</template>


<script>
    
    export default {
        name: 'hot',
        data () {
            return {}
        }
    }

</script>

<style lang="scss" scoped>

    .colord43.colord43.colord43.colord43{color:#d43c33}


    h2{
        font-size: 0.17rem;
        line-height: 0.17rem;
        margin-bottom: 0.14rem;
        margin-top: 20px;
        padding-left: 17px;
        &:after{
            content: '';
            position: absolute;
            left: 0;
            width: 0.02rem;
            height: 0.17rem;
            background-color: #d43c33

        }
    }
    .hot_top{

        background: url('../assets/img/hot_bg.jpg') no-repeat 100% 100%/100% 100%;
        height: 1.45rem;
        position: relative;
        margin-bottom: 5px;

        .hot_text{
            z-index: 999;
            color: #fff;
            position: relative;
            padding-top: 7%;
            padding-left: 20px;
            .yunText{
                width: 142px;
                height: 67px;
                background-position: -24px -30px;
                display: block
            }
            p{
                font-size: 0.12rem;
                margin-top: 10px;
                color:rgba(255,255,255,.8);
                transform: scale(.9);
                margin-left: -0.2rem;
            }
        }
        

        &::after{
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.2);
            position: absolute;
            top:0;
            z-index: 1;
        }
    }


    .allSprite{
        background: url('../assets/img/icon.png') no-repeat;
        background-size: 166px 97px;
    }

    .newest{
        padding: 0 10px;

        li{
            position: relative;
            height:55px;
          &::after{
              content: '';
              position: absolute;
              border-bottom: 1px solid rgba(204, 204, 204, 0.44);
              width: 100%;
              left: 0;
              bottom: 0;
          }
        }
        .leftNum{
            float: left;
            line-height: 55px;
            margin-right: 10px;
            color: #999
        }
        .left{
            width: 2.95rem;
            float: left;
            padding: 5px 0;
        }

        p:nth-child(1){
            font-size: 0.17rem;
           
            overflow: hidden;//溢出隐藏
            text-overflow: ellipsis;//隐藏部分用...显示
            white-space: nowrap;//强制不换行
            span{
                color:#888;
                margin-left: 4px;
            }
        }
        p:nth-child(2){
            color:#888;
            font-size: 0.12rem;
            margin-top:0.02rem;
            .sq{
                display:inline-block;
                width: 12px;
                height: 8px;
                margin-right: 4px;
            }
        }
        .right{
           position: relative;
        }
        .play{
            display:inline-block;
            width: 22px;
            height: 22px;
            background-position: -24px 0;
            position: absolute;
            right: 0px;
            top:0.1rem;
        }
    }

    .hotFooter{
        height: 55px;
        line-height: 55px;
        text-align: center;
        color: #999;
        font-size: 0.14rem;
    }



</style>


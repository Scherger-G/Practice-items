<template>

   <div class="detailed">
    <form>
        <div>
            <svg class="seachIcon Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path fill-rule="evenodd" fill="#c9c9ca" d="M25.181,23.535l-1.414,1.414l-7.315-7.314   C14.709,19.107,12.46,20,10,20C4.477,20,0,15.523,0,10C0,4.477,4.477,0,10,0c5.523,0,10,4.477,10,10c0,2.342-0.811,4.49-2.16,6.195   L25.181,23.535z M10,2c-4.418,0-8,3.582-8,8s3.582,8,8,8c4.418,0,8-3.582,8-8S14.418,2,10,2z"/>
            </svg>

            <label for="seach">搜索歌曲、歌手、专辑</label>
            <input type="seach" name="seach" id="seach">

            <svg class="closeIcon Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <g fill-rule="evenodd">
                    <path fill="#bcbdbd" d="M14,0c7.732,0,14,6.268,14,14c0,7.732-6.268,14-14,14  S0,21.732,0,14C0,6.268,6.268,0,14,0z"/><g fill="none" stroke="#ebeceb" stroke-width="2.5" stroke-miterlimit="10">
                        <path d="m19 9l-10 10"/>
                        <path d="m9 9l10 10"/>
                    </g>
                </g>
            </svg>
        </div>
    </form>

           <ul class="newest">
           <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p>覆水(男生版) <span>(超级剧集《将军在上》推广曲)</span> </p>
                   <p> <i class="allSprite sq"></i> 胡夏 - 覆水</p>
               </div>
               <div class="right">
                   <span class="allSprite play"></span>
               </div>
           </li>
       </ul>
    
   </div>

</template>


<script>
    
    export default {
        name: 'detailed',
        data () {
            return {}
        }
    }

</script>

<style lang="scss" scoped>

    .colord43.colord43.colord43.colord43{color:#d43c33}

     .Icon{
        width: 13px;
        height: 13px;
        margin: 0 8px;
        position: relative; 
        top:3px
    }
     .allSprite{
        background: url('../assets/img/icon.png') no-repeat;
        background-size: 166px 97px;
    }

    form{
        padding:15px 10px;
        border-bottom: 1px solid rgba(0,0,0,.1);

        div{
            background: #ebecec;
            width: 100%;
            height: 30px;
            border-radius: 30px;
            line-height: 30px;
            color: #c9c9c9;
            position: relative;

           

            label{
                position: absolute;
                font-size: 0.14rem;
                margin-left: -4px;
            }

            input{
                border: none;
                height: 100%;
                width: 82%;
                background: none;
                margin-left: -4px;
                outline: none
            }
        }

    }

 .newest{
        padding: 0 10px;

        li{
            position: relative;
            height:0.55rem;
          &::after{
              content: '';
              position: absolute;
              border-bottom: 1px solid rgba(204, 204, 204, 0.44);
              width: 100%;
              left: 0;
              bottom: 0;
          }
        }

        div:nth-child(1){
            width: 3.23rem;
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
            top:0.2rem;
        }
    }
 

</style>


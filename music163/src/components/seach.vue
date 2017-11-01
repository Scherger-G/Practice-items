<template>

   <div class="seach">
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
      <div class="hotSeach">
          <h3>热门搜索</h3>
          <ul>
              <li>石头计划</li>
              <li>陈奕迅</li>
              <li>孙燕姿</li>
              <li>薛之谦</li>
              <li>算什么男人</li>
              <li>Taylor Swift</li>
              <li>你的名字</li>
              <li>Love Yourself</li>
              <li>Shape Of You</li>
              <li>别</li>
          </ul>
      </div>
      <span class="clear"></span>
      <div class="historySeach">
          <ul>
              <li>

                <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path fill-rule="evenodd" fill="#c9caca" d="m15 30c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15m0-28c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13m7 16h-8c-.552 0-1-.447-1-1v-10c0-.553.448-1 1-1s1 .447 1 1v9h7c.553 0 1 .447 1 1s-.447 1-1 1"/>
                </svg>

                <span>算什么男人</span>

                <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" fill="#999899" d="m13.379 12l10.338 10.337c.381.381.381.998 0 1.379s-.998.381-1.378 0l-10.338-10.338-10.338 10.338c-.38.381-.997.381-1.378 0s-.381-.998 0-1.379l10.338-10.337-10.338-10.338c-.381-.38-.381-.997 0-1.378s.998-.381 1.378 0l10.338 10.338 10.338-10.338c.38-.381.997-.381 1.378 0s.381.998 0 1.378l-10.338 10.338"/>
                </svg>

              </li>
               <li>

                <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path fill-rule="evenodd" fill="#c9caca" d="m15 30c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15m0-28c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13m7 16h-8c-.552 0-1-.447-1-1v-10c0-.553.448-1 1-1s1 .447 1 1v9h7c.553 0 1 .447 1 1s-.447 1-1 1"/>
                </svg>

                <span>音乐</span>

                <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" fill="#999899" d="m13.379 12l10.338 10.337c.381.381.381.998 0 1.379s-.998.381-1.378 0l-10.338-10.338-10.338 10.338c-.38.381-.997.381-1.378 0s-.381-.998 0-1.379l10.338-10.337-10.338-10.338c-.381-.38-.381-.997 0-1.378s.998-.381 1.378 0l10.338 10.338 10.338-10.338c.38-.381.997-.381 1.378 0s.381.998 0 1.378l-10.338 10.338"/>
                </svg>

              </li>
          </ul>
      </div>
   </div>

</template>


<script>
    
    export default {
        name: 'seach',
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

    .hotSeach{
        padding: 15px 10px 0;

        h3{
            font-size: 0.12rem;
            line-height: 0.12rem;
            color: #666
        }
        ul{
            margin: 10px 0 7px;
            li{
                float: left;
                padding: 0 14px;
                height: 32px;
                margin-bottom: 8px;
                margin-right: 8px;
                border: 1px solid #d3d4da;
                font-size: 0.14rem;
                color: #333;
                line-height: 32px;
                border-radius: 32px;
            }
        }
    }

    .historySeach{
        li{
            height:45px;
            font-size: 0.14rem;
            line-height: 45px;
            border-bottom: 1px solid rgba(0,0,0,.1);

            span{
                width: 80%;
                display: inline-block
            }

        }
    }
 

</style>


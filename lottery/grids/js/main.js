
window.onload =function(){


    /**
 * 
 * 
 * @param {any} tagName 
 * @param {any} classname 
 * @returns 
 */
function getClassName(tagName,classname){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
    }else{
        var results =[];
        var elems = document.getElementsByTagName('*');
        for(var i=0;i<elems.length;i++){
            if(elems[i].className.indexOf(classname)!= -1){
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}



var li = document.getElementsByClassName('valueNum');


var num = 0;//编号
var times = Math.ceil(Math.random()*50+(Math.random()*3));//随机时间

var flag = true;


var speed = Math.floor((Math.random()*10))+3;//速度
var turns = Math.ceil(Math.random()*3+1);//旋转次数
var cut = Math.random()*10+90;




function startTurn (){

    if(num==8){num =0;}//归零
    
        for(let i in li){
            
            if(li.hasOwnProperty(i)){//只输出私有属性

              let classT = li[i].className;
                
              let classN = classT.split(' ');
    
    
              if(classN[classN.length-1]=='target'){//移除 target
                li[i].classList.remove('target');
              }
              
          
              if(classN[1]=='num'+num){//添加 target 实现颜色切换
    
                let allClass = classT+' target';
                li[i].setAttribute('class',allClass);
               
              }
             
            }
        }
    
        num++;
        times +=speed;


        if(times>cut){
            times =30;
            speed -= 0.5;
            turns--;

            if(turns ==1){//最后一圈降低速度
                speed = 5;
                times = 500;
                cut = 510;
            }
        }

       

        if(turns ==0){

            for(let f in li){
                
                if(li.hasOwnProperty(f)){//只输出私有属性
                    let classT = li[f].className;
                    
                  let classN = classT.split(' ');
                    
                    
                  if(classN[classN.length-1]=='target'){
                    console.log(li[f].innerHTML);
                    flag = true;

                    cut = Math.random()*10+90;
                    turns = Math.ceil(Math.random()*3+1);//旋转次数
                    speed = Math.floor((Math.random()*10))+3;//速度


                     console.log(cut)
            
                  }
                }
            }

           
        }else{
            setTimeout(startTurn,times);
        }
   
}




var star = document.getElementsByClassName('star');


    document.onclick = function(e){
        var target = e.target || e.srcElement;
        if(target.className=='star' & flag == true){
            flag =false;
            setTimeout(startTurn,times);
        }
    }

}

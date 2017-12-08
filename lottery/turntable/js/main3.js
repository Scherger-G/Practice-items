import {parameter}  from './main3-constructor.js';

window.onload = ()=>{
    document.onclick = (e) =>{
        let target = e.target || e.srcElement;
        if(target.className == 'internal'){
            let Parameter = new parameter;
            if(Parameter.flag){
                Parameter.result.classList.remove('none');
                Parameter.star()
                Parameter.flag = false
            }else{
                console.log(Parameter.arr[Parameter.num])
            }
        }
    }
}
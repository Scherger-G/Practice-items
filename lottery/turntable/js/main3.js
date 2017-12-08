import ProxySingleParameter  from './main3-constructor.js';

window.onload = ()=>{
    document.onclick = (e) =>{
        let target = e.target || e.srcElement;
        if(target.className == 'internal'){
            let Par = new ProxySingleParameter;
            if(Par.flag){
                Par.result.classList.remove('none');
                Par.star()
                Par.flag = false
            }else{
                console.log(Par.arr[Par.num])
            }
        }
    }
}
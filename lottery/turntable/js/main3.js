import ProxySingleParameter  from './main3-constructor.js';

window.onload = ()=>{
    console.log(11)
    document.onclick = (e) =>{
        let target = e.target || e.srcElement;
        console.log(target)
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
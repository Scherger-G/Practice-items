import Turntable from './main3-class.js';
import GetClassName from './main3-configuration.js';

const turntable = GetClassName('ul','turntable')[0];
const result = GetClassName('p','result')[0];



let ProxySingleParameter = (()=>{

    let  instance =  new Turntable(turntable,result);//存储参数
    let flag = instance.flag;//开关判断是否正在运行中

return function (turntable,result){
    if(!flag){
        instance = new Turntable(turntable,result);//更新参数
        console.log(instance);
    }
    return instance;
}

})();

export default  ProxySingleParameter ;
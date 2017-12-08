import Turntable from './main3-class.js';
import {getClassName as getClass} from './main3-configuration.js';

var turntable = getClass('ul','turntable')[0];
var result = getClass('p','result')[0];


var ProxySingleParameter = (()=>{

    let  instance =  new Turntable(turntable,result);//存储参数
    let flag = instance.flag;//开关判断是否正在运行中

return function (turntable,result){
    if(!flag){
        instance = new Turntable(turntable,result);//更新参数
        console.log(instance)
    }
    return instance;
}

})();
export  {ProxySingleParameter as parameter};
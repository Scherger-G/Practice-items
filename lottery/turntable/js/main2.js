window.onload = function(){
    
    
        function getClassName(tagName, classname) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(classname);
            } else {
                var results = [];
                var elems = document.getElementsByTagName('*');
                for (var i = 0; i < elems.length; i++) {
                    if (elems[i].className.indexOf(classname) != -1) {
                        results[results.length] = elems[i];
                    }
                }
                return results;
            }
        }
    
        var turntable = getClassName('ul','turntable')[0];
        var result = getClassName('p','result')[0];
    
        function CreateParameter (turntableDom,resultDom){
            //参数
            this.turntable = turntableDom;//转盘dom
            this.result = resultDom;//结果dom
            this.flag = true;//开关设置
            this.times = 20;//执行时间
            this.turns = Math.ceil(Math.random()*3+1);//旋转圈数
            this.speed = Math.floor(Math.random()*5)+3;//速度
            this.turnNum = 12;//格子总数
            this.deg = 360/this.turnNum;//转盘所对应的度数
            this.initital = 0;//转盘旋转角度
            this.turnBuffer = this.deg/2-5;//每个格子对应的度数缓冲区
            this.num = Math.ceil(Math.random() * this.turnNum)-1;//随机抽取的位置
            this.MathNum = 14;//重新编排编号数字与转盘对应，14是因为i=1时已经减去了一个
            this.arr =  this.NewArr(this.MathNum,this.deg,this.turnBuffer);//转盘角度参数
            this.initialDegMini = this.turns*360+this.arr[this.num][2];//初始最小值度数
            this.initialDegMax = this.turns*360+this.arr[this.num][1];//初始最大值度数
            this.MathAngle = Math.ceil(Math.random()*(this.initialDegMax-this.initialDegMini) )+this.initialDegMini;//转盘停止的角度
            this.text ='结果为：'+ this.arr[this.num][0];
            
            console.log(this.arr[this.num])
            console.log(this.speed)
        }
    
        CreateParameter.prototype.NewArr = function (MathNum,deg,turnBuffer){
            //计算转盘的各个角度参数
            var arr = [];
            for(let i = 1;i<=this.turnNum;i++){
                let num = MathNum-i;//做倒叙,跳过1
                if(i==1){num = i}
                let turnDeg = deg*i-deg; 
                arr.push([num,turnDeg+turnBuffer,turnDeg-turnBuffer]) ;
            }
            return arr;
        }
    
        CreateParameter.prototype.OperatingDom = function(dom){
            //dom节点操作
            if(dom == 'rotate'){
                this.turntable.style.transform ="rotate("+this.initital+"deg)";
            }
    
            if(dom == 'innerHTML'){
                this.result.innerHTML = this.text;
            }
    
        }
    
        CreateParameter.prototype.judgment = function(){
            //判断
            if(this.initital >= this.initialDegMini-420){

                if(this.speed>0.9){
                    this.speed = this.speed-0.05;
                }
               
            }
    
            if(this.initital >= this.MathAngle ){
                this.OperatingDom('innerHTML')
                this.reset();
            }else{
                //setTimeout内部指针会混乱所以需要外部定义
                var _this = this;
                setTimeout(function(){
                    _this.star()
                },this.times)
            }
        }
    
        CreateParameter.prototype.reset = function (){
            //重置
            this.initital = this.MathAngle-(parseInt(this.MathAngle/360)*360);
            this.OperatingDom('rotate')
            this.num =  Math.ceil(Math.random()*12)-1;
            this.turns = Math.ceil(Math.random()*5+1);
            this.speed = Math.floor(Math.random()*3)+3;
            this.initialDegMini = this.turns*360+this.arr[this.num][2];
            this.initialDegMax = this.turns*360+this.arr[this.num][1];
            this.MathAngle = Math.ceil(Math.random()*(this.initialDegMax-this.initialDegMini) )+this.initialDegMini;
            this.flag = true;
            this.text ='结果为：'+ this.arr[this.num][0];
    
        }
    
        CreateParameter.prototype.star = function(){
            this.OperatingDom('rotate');//让转盘旋转
            this.initital+=this.speed;//增加角度
            this.judgment();//运行判断
        }
    
        var ProxySingleParameter = (function(){
    
            var  instance =  new CreateParameter(turntable,result);//存储参数
            var flag = instance.flag;//开关判断是否正在运行中
    
            return function (turntable,result){
                if(!flag){
                    instance = new CreateParameter(turntable,result);//更新参数
                   console.log(instance)
                }
                return instance;
            }

        })()
        document.onclick = function(e){
            var target = e.target || e.srcElement;
            if(target.className == 'internal'){
                let Parameter = new ProxySingleParameter(turntable,result);
                if(Parameter.flag){
                    Parameter.result.classList.remove('none');
                    Parameter.star();
                    Parameter.flag = false;
                }else{
                    console.log(Parameter.arr[Parameter.num]);
                }
            }
        }
}
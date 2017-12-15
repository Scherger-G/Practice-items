 class Turntable {
    
    constructor(turntableDom,resultDom){
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
        this.text = `结果为：${this.arr[this.num][0]} `;
        
        console.log(this.MathAngle)
        console.log(this.arr[this.num])
        console.log(this.speed);

    }

    NewArr(MathNum,deg,turnBuffer){
        //计算转盘的各个角度参数
        let arr = [];
        for(let i = 1;i<=this.turnNum;i++){
            let num = MathNum-i;//做倒叙,跳过1
            if(i==1){num = i}
            let turnDeg = deg*i-deg; 
            arr.push([num,turnDeg+turnBuffer,turnDeg-turnBuffer]) ;
        }
        return arr;
    }

    async Timeout(time){
        //封装settimeout
        await new Promise( (resolve)=> { setTimeout(resolve,time)})
    }

    // asyncTimeout(time){
    //     //封装settimeout
    //     return new Promise( (resolve)=> { setTimeout(resolve,time)})
    // }

    OperatingDom(dom){
        //dom节点操作
        if(dom == 'rotate'){
            this.turntable.style.transform ="rotate("+this.initital+"deg)";
        }

        if(dom == 'innerHTML'){
            this.result.innerHTML = this.text;
        }

    }

    judgment(){
        //判断
        if(this.initital >= this.initialDegMini-420){
            
            if(this.speed>1.2){
                this.speed = this.speed-0.05;
            }
            
        }

        if(this.initital >= this.MathAngle ){
            this.OperatingDom('innerHTML')
            this.reset();
        }else{
                    
            // this对象的指向是可变的，但是在箭头函数中，它是固定的。方法一
            this.Timeout(this.times).then(()=>{
                this.star()
            })

            //方法二
            // this.asyncTimeout(this.star(),this.times);

            //方法三
            // setTimeout(()=>{
            //     console.log(111)
            //     this.star()
            // },this.times)
        
        }
    }

    reset(){
        //重置
        this.initital = this.MathAngle-( Math.trunc(this.MathAngle/360)*360);
        this.OperatingDom('rotate')
        this.num =  Math.ceil(Math.random()*12)-1;
        this.turns = Math.ceil(Math.random()*5+1);
        this.speed = Math.floor(Math.random()*5)+3;
        this.initialDegMini = this.turns*360+this.arr[this.num][2];
        this.initialDegMax = this.turns*360+this.arr[this.num][1];
        this.MathAngle = Math.ceil(Math.random()*(this.initialDegMax-this.initialDegMini) )+this.initialDegMini;
        this.flag = true;
        this.text = `结果为：${this.arr[this.num][0]} `;

    }

    star(){
        this.OperatingDom('rotate');//让转盘旋转
        this.initital+=this.speed;//增加角度
        this.judgment();//运行判断
    }

}

export default Turntable;

/*
* obj 表示运动的对象
* myJSON    表示目标值
* time  表示运动持续的时间
* 新增回调函数，this
* */
function animate(obj,myJSON,time,callBack) {

    var startJSON = {}; /*存所有属性开始的值*/
    var targetJSON = {}; /*存所有属性目标值*/
    var stepJSON = {}; /*存所有属性步长*/
    var maxCount = time/20;  //执行的最大次数
    var count = 0;

    for (var k in myJSON) {
        startJSON[k] = parseFloat(getStyle(obj,k)); //获取所有属性值初始值
        targetJSON[k] = parseFloat(myJSON[k]);  //获取所有用户传进来的属性以及值
        stepJSON[k] = (targetJSON[k] - startJSON[k]) / maxCount; //获取步长
    }
    /*至此，我们得到了三个重要的json*/
    console.log(startJSON);
    console.log(targetJSON);
    console.log(stepJSON);
    var timer = setInterval(function () {
        for (var k in myJSON) {
            startJSON[k] += stepJSON[k];
            if(k === "opacity"){
                obj.style[k] = startJSON[k];
                obj.style.filter = "alpha(opacity = "+startJSON[k]*100+")";
            }
            obj.style[k] = startJSON[k] + "px";
        }
        count++;
        if(count === maxCount){
            for (var k in myJSON) {
                if(k === "opacity"){
                    obj.style[k] = targetJSON[k];
                    obj.style.filter = "alpha(opacity = "+targetJSON[k]*100+")";
                }
                obj.style[k] = targetJSON[k] + "px";
            }
            callBack && callBack.call(obj);
            // if(callBack){
            //     callBack();
            // }
            clearInterval(timer);
        }
    },20);

    function getStyle(obj,property) {
        return obj.currentStyle ? obj.currentStyle[property] : getComputedStyle(obj)[property];
    }
}
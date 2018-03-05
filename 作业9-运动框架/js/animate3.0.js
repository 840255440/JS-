/**
 * Created by liuping on 2018/2/27.
 */
 function animate(obj,myJSON,time,callBack) {

    var startJSON = {}; /*存所有属性开始的值*/
    var targetJSON = {}; /*存所有属性目标值*/
    var stepJSON = {}; /*存所有属性步长*/
    var maxCount = time/20;  //执行的最大次数
    var count = 0;

    for(var k in myJSON){
        startJSON[k] = parseFloat(getStyle(obj,k));
        targetJSON[k] = parseFloat(myJSON[k]);
        stepJSON[k] = (targetJSON[k] - startJSON[k])/maxCount;
    }

    // console.log(startJSON);
    // console.log(targetJSON);
    // console.log(stepJSON);

    var timer = setInterval(function () {
        for(var k in myJSON){
            startJSON[k] += stepJSON[k];
            if(k == "opacity"){
                console.log(k+startJSON[k]);
                obj.style[k] = startJSON[k];
                obj.style.filter = "alpha(opacity =" + startJSON[k]*100 + ")";
            }else {
                obj.style[k] = startJSON[k] + "px";
            }
        }
        count++;
        if(count === maxCount){
            for (var k in myJSON){
                if(k == "opacity"){
                    obj.style[k] = targetJSON[k];
                    obj.style.filter = "alpha(opacity =" + targetJSON[k]*100 + ")";
                }else{
                    obj.style[k] = targetJSON[k] + "px";
                }
            }
            if(callBack){
                callBack.call(obj);
            }
            clearInterval(timer);
        }
    },20);

    for (var k in myJSON){
        obj.style[k] = targetJSON[k] + "px";
    }
    function getStyle(obj,property) {
        return obj.currentStyle ? obj.currentStyle[property] : getComputedStyle(obj)[property];
    }
}
/**
 * Created by liuping on 2018/3/15.
 */
function scrollBar(obj,content) {
    var Barline = document.createElement("div");
    var BarlineTop = document.createElement("i");
    BarlineTop.setAttribute('class','iconfont icon-jiantouarrow492');
    var BarlineBottom = document.createElement("i");
    BarlineBottom.setAttribute('class','iconfont icon-jiantouarrow486');
    Barline.style.cssText = "position: absolute;top: 0px;right: 0px;height: 100%;width: 30px;border-shadow:0 0  10px #000;" +
        "border-radius: 10px;background-color:#999999";

    BarlineTop.style.cssText = "position:absolute; top 0;width: 100%;background:#999999;height: 30px;line-height: 30px;font-size:30px;color:#000;";
    BarlineBottom.style.cssText = "position:absolute; bottom: 0;width: 100%;background:#999999; height: 30px;line-height: 30px;font-size:30px;color:#000;";
    Barline.appendChild(BarlineTop);
    Barline.appendChild(BarlineBottom);

    //滚动条设计

    var BarHeight = obj.clientHeight*(obj.clientHeight-60)/content.clientHeight;
    var Bar = document.createElement("div");
    Bar.style.cssText = "position: absolute;top: 30px;background: #bbbbbb;width: 100%";
    Bar.style.height = BarHeight + "px";
    Barline.appendChild(Bar);

    obj.appendChild(Barline);

    var Top = Bar.offsetTop;
    var barMax = Barline.offsetHeight - 30 - Bar.offsetHeight;

    mouseWheel(obj,function (e) {
       var e = e || window.event;
       var del = -e.wheelDelta/120 || e.detail/3;

       if(del >= 0){
           Top += 10;
       }else{
           Top -= 10;
       }

       Top = Math.min(barMax,Top);
       Top = Math.max(30,Top);
       Bar.style.top = Top + "px";
       change();
    });

    function change() {
        var contentTop = (Top-30)*(content.offsetHeight)/(Barline.offsetHeight-60);
        content.style.top = -contentTop + "px";
    }

    Bar.onmousedown = function (e) {
        var e = e || window.event;
        var startY = e.clientY;
        var startTop = Bar.offsetTop;
        document.onmousemove = function (e) {
            content.style.userSelect = "none";
            var e = e || window.event;
            var endY = e.clientY;
            Top = startTop + endY - startY;
            Top = Math.min(barMax,Top);
            Top = Math.max(30,Top);
            Bar.style.top = Top + "px";
            change();
        }
        document.onmouseup = function () {
            content.style.userSelect = "";
            document.onmousemove = null;
        }
    };

    BarlineTop.onclick = function () {
        Top -= 20;
        Top = Math.min(barMax,Top);
        Top = Math.max(30,Top);
        Bar.style.top = Top + "px";
        change();
    };

    BarlineBottom.onclick = function () {
        Top += 20;
        Top = Math.min(barMax,Top);
        Top = Math.max(30,Top);
        Bar.style.top = Top + "px";
        change();
    };
    function mouseWheel(obj,callBack) {
        obj.onmousewheel === null ? obj.onmousewheel = callBack : obj.addEventListener('DOMMouseScroll',callBack);
    }
}
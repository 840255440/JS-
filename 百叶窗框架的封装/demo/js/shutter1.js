function shutter(myJSON) {
    var width = myJSON.width || $(window).width(); //用户没有传参数，默认浏览器宽度
    var height = myJSON.height;
    var $shutter = $("#shutter");   //获取到最大的盒子shutter
    var $li = $("#shutter ul li");  //获取到li
    var length = $li.length;    //li的长度

    /*shutter的样式*/
    $shutter.css({
        position: "relative",
        width: width,
        height: height,
        margin: "100px auto",
        boxShadow: "0 0 10px 0  #000",
        overflow: "hidden"
    });
    /*li的样式*/
    $li.css({
        position: "absolute",
        width: width*3/4,
        height:height,
        top: 0
    });
    $("li img").css({
        width: width*3/4,
        height:height
        /*
            1080/1920 = height/width
        */
    });

    var liW = $li.width();  //每个li的宽度

    var avg = width/length;  //第一个平均数
    var avg2 = (width - liW)/(length - 1);

    $li.each(function (i) {
        $(this).css({left:avg*i});
    });

    $li.mouseenter(function () {
        /*记录鼠标移入的这个li的索引*/
        var index = $(this).index();

        $li.each(function (i) {
            $(this).stop(true);
            if(i <= index){
                $(this).animate({left:avg2*i},500);
            }else{
                $(this).animate({left:liW + avg2*(i-1)},500);
            }
        });
    });
    /*鼠标移出*/
    $li.mouseleave(function () {
        $li.each(function (i) {
            $(this).stop(true);
            $(this).animate({left:width/length*i},500);
        });
    });
}
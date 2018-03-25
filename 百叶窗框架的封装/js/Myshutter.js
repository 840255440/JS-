/**
 * Created by liuping on 2018/3/25.
 */
function Myshuutter(Json){
    $shutter = $(".shutter");
    $li = $(".shutter ul li");
    $length = $(".shutter ul li").length;
    $objWidth = Json["width"]*4/3;
    $objHeight = Json["height"];

    //样式设置
    $shutter.css({
        position: "relative",
        margin: "100px auto",
        width: $objWidth,
        height: $objHeight,
        boxShadow: "0 0 10px 0 #ff6600",
        overflow: "hidden"
    })
    $(".shutter ul").css({
        listStyle: "none",
        left: 0
    });
    $(".shutter ul li").css({
        top: "0",
        position: "absolute",
    });
    $(".shutter li img").css({
        width: Json["width"],
        height: Json["height"]
    });

    $ImgLeft = $shutter.width()/$length;
    $LiLeft = ($shutter.width()-$li.width())/($length-1);
    $li.each(function () {
        $(this).css({
            left:  $(this).index()*$ImgLeft
        });
    });

    $li.mouseenter(function () {
        var index = $(this).index();
        $li.each(function (i) {
            $(this).stop(true);
            if(i<=index){
                $(this).animate({
                    left: $(this).index()*$LiLeft
                },500)
            }else{
                $(this).animate({
                    left: $li.width() +(i-1)*$LiLeft
                },500)
            }
        })
    })
    $li.mouseleave(function () {
        $li.each(function (i) {
            $(this).stop(true);
            $(this).animate({left: $ImgLeft*i},500)
        })
    })
}
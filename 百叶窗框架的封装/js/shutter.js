/**
 * Created by liuping on 2018/3/25.
 */
var $shutterWidth= $(".shutter").width();//窗口宽度
var $ImgWidth = $(".shutter ul li img").width();
var $IndexWidth = $shutterWidth/$(".shutter ul li").length;
var $IndexAvg = ($shutterWidth-$ImgWidth)/($(".shutter ul li").length-1);
console.log($IndexWidth);
$("ul li").each(function () {
    $(this).css({
        left:  '+='+($(this).index())*$IndexWidth
    });
});

    $("ul li").mouseenter(function () {
        var index = $(this).index();
        $( $("ul li")).each(function (i) {
            $(this).stop(true);
            if(i<=index){
                $(this).animate({
                    left: $IndexAvg*i
                },500)
            }else{
                $(this).animate({
                    left:  $ImgWidth +(i - 1)*$IndexAvg
                },500)
            }
        })
        })
    $("ul li").mouseleave(function () {
        $(this).stop(true);
        $("ul li").each(function (i) {
            $("ul li").eq(i).animate({
                left: i*$IndexWidth
            },500)
        })
    })


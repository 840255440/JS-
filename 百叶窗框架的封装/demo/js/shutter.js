var $li = $("#shutter ul li"); //获取li
var $width = $("#shutter").width();      //获取总宽度
var $liW = $li.width();    //获取每个li的宽度
var $length = $li.length;   //获取li的长度
$li.mouseenter(function () {

    /*记录鼠标移入的这个li的索引*/
    var index = $(this).index();

    /*
    * 一张图片宽度   +   4*每个分配到的宽度  =  总宽度
    * 每个分配到的宽度 = (800 - $li.width())/($li.length-1)
    *
    * 拿移动到中间图片来说
    * 左边：0 50 100
    * */
    var num = ($width - $liW)/($length - 1);
    //console.log(num);
    $li.each(function (i) {
        $(this).stop(true);
        if(i <= index){
            $(this).animate({left:num*i},500);
        }else{
            $(this).animate({left:$liW + num*(i-1)},500);
        }
    });
});
/*鼠标移出*/
    $li.mouseleave(function () {
        $li.each(function (i) {
            $(this).stop(true);
            $(this).animate({left:$width/$length*i},500);
        });
    });
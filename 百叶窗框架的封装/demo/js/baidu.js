
/*创建script标签，放入jsonP链接*/
function get(val) {
    var script = $("<script></script>");
    script.attr("src","https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=jsonP&_="+new Date().getTime());
    //console.log(script.attr("src"));
    $("body").append(script);
}

function jsonP(myJSON) {
    var arr = myJSON.s;  //得到的是联想词数组
    var length = arr.length;
    if(length > 4)length = 4;
    for( var i=0; i<length; i++ ){
        var li = $("<li></li>");
        li.html("<a href='https://www.baidu.com/s?wd="+arr[i]+"'></a>");
    }
}
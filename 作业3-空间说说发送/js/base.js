/**
 * Created by liuping on 2018/1/28.
 */
var oBox = document.getElementsByTagName("box");
var oImg1 = document.getElementById("img1"); //获取第一张图片
var oImg2 = document.getElementById("img2");//获取第二张图片
var oText = document.getElementById("text");//获取textarea里面的内容
var oBtn = document.getElementById("btn");//获取按钮
var oArticle = document.getElementById("article");//获取ul，一会我们会在ul里面动态的添加内容

// var imgSrc = oImg1.src; //将此时的li里面的img的src存在imgSrc里面
console.log(oBox.innerHTML);

// oImg1.onclick = function () {
//     console.log("111");
//     this.classList.remove("on");
//     oImg2.classList.add("on");
//     imgSrc = oImg2.src;
// }
// oImg2.onclick = function () {
//     this.classList.remove("on");
//     oImg1.classList.add("on");
//     imgSrc = oImg1.src;
// }

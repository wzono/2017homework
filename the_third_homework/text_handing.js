var textLength = $(".before").text().length;
var i = 0;

function textHanding(textLength){//改变before的内容
    //操作文字
    var textBefore,textAfter,text;
    textBefore = $(".before").text();//如果textBefore是从外面传过来的变量，则textBefore则一直都没有改变，自己在函数内部定义textBefore,则可以不断获得改变后的数组。
    textAfter = $(".after").text();
    textBefore = textBefore.split("")//将string转化为Array
    text = textBefore.slice(0,1);
    textAfter = textAfter + text;
    textBefore.splice(0,1);
    textBefore = textBefore.join("")//将Array转化成string
    $(".before").html(textBefore);
    $(".after").html(textAfter);
    if(textBefore==""){
        window.clearInterval(operate);
        window.clearInterval(progressTwo);
        $(".progress").css("display","none");
        $("button").html("搬运完毕~");
    }
    //操作数字进度条
    var progressLength = textAfter.length;
    var progressThree = progressLength + "/" +textLength;
    $(".progress-three").html(progressThree);
    //操作进度条1
    var width = progressLength/textLength*100;
    width = width + "%"
    $(".progressbar").css("width",width);
}

function progressTwoHanding(){//处理进度条2
    //j和i都是正常运行
    var spanList = document.getElementsByClassName("progress-two")[0].getElementsByTagName("span");
    for(var j=0;j<5;++j){
        spanList[j].setAttribute("class","");
        if(j==i){
            spanList[j].setAttribute("class","on");
        }
    }
    ++i;
    if(i==5){
        i = i-5;
    }
}

$(document).ready(function(){
  $("button").click(function(){
    $("button").html("搬运中...");
    $(".progress").css("display","block");
    operate = window.setInterval("textHanding(textLength)",50); //setInterval中的函数是不能传递参数的，如果需要传递参数就应该使用双引号。暂时不知道为什么。以及window的作用
    progressTwo = window.setInterval("progressTwoHanding()",500)//操作进度条2
    })
});
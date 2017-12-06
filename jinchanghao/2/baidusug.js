// 参考https://www.cnblogs.com/xmhu/p/5902623.html
var text=document.getElementById("searchText");
text.onkeyup = function(){

    var keywords=text.value;
    var JSONP=document.createElement("script");
    JSONP.src="http://suggestion.baidu.com/su?wd=" + keywords + "&cb=getdata";
    JSONP.type="text/javascript";
    document.body.appendChild(JSONP);

};

function getdata(data){
    var url;
    var content="";
    // 当不输入文字时隐藏提示栏
    if(text.value==""){
        document.getElementById("sug").style.display="none";
    }
    else{
        document.getElementById("sug").style.display="block";
        for (var i=0;i<data.s.length;i++){
            // 对不包含关键字的部分加粗
            if(data.s[i].indexOf(text.value)==-1){
                url="\"https://www.baidu.com/s?ie=UTF-8&wd="+data.s[i]+"\"";
                content+="<li><a href="+url+">"+data.s[i]+"</a></li>";
            }
            else{
                url="\"https://www.baidu.com/s?ie=UTF-8&wd="+data.s[i]+"\"";
                content+="<li><a href="+url+">"+text.value+"<b>"+data.s[i].replace(text.value,"")+"</b>"+"</a></li>";
            }
        }
        document.getElementById("sug").innerHTML="<ul>"+content+"</ul>";
    }
    
}



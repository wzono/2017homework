var list=document.getElementById("list");
var search_input=document.getElementById("search_input");
search_input.onkeyup = function () {

  var wd_value = search_input.value;
  var script = document.createElement("script");
  script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + wd_value + "&cb=callbackFunction";//自定义回调函数名为callbackFunction
  document.body.appendChild(script);
  document.body.removeChild(script);
};

function callbackFunction(data) {//data是跨域获得的json中的数据
  var result="";
  for (var i = 0; i < data.s.length; i++) {
      result += "<li><a href=\"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=56060048_3_pg&wd="+"\" data.s[i] > "+data.s[i] + "</a></li>"
    };
  list.innerHTML = result;
  list.style.border="1px solid #ccc"
};



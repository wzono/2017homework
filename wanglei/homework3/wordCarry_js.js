var text=document.getElementsByClassName("text")[0];
var carry_text=document.getElementsByClassName("text")[1];
var carry_btn=document.getElementsByClassName("carry_btn")[0];
var progress_num=document.getElementsByClassName("progress_num")[0];
var control_bar=document.getElementById("progress_bar");
var progress_bar=document.getElementsByClassName("progress_bar");


carry_btn.onclick=function () {
  var origin_container=text.innerHTML.split("");
  var carried_container=carry_text.innerHTML.split('');
  var num=0;
  var final_num=origin_container.length;
  control_bar.style.display="block";
  progress_num.style.display="inline-block";
  var start=setInterval(function () {
    if (num<=final_num){
    text.innerHTML=origin_container.join('');
    if (origin_container[0]!==undefined) {
      carry_text.innerHTML += origin_container[0];
    }
    origin_container.splice(0,1);
    num+=1;
    progress_num.innerHTML=num+'/'+origin_container.length;
    carry_btn.innerHTML="搬运中";
  }
  else{
      carry_btn.innerHTML="搬运完成";
    }
  },100)
  var num2 = 0;
  var controlbar_move=setInterval(function () {
    if (num2<5) {
      for (var a = 0; a < 5; a++) {
        if (num2 == a) {
          progress_bar[a].style.backgroundColor = "red";
        }
        else {
          progress_bar[a].style.backgroundColor = "white"
        }
      }
      num2 += 1;
    }
    else {num2=0}
  },500)
  
  
  
  
  
  
  
  
};
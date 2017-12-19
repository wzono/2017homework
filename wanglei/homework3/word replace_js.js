var searchText=document.getElementsByClassName("form-control")[0];
var replaceText=document.getElementsByClassName("form-control")[1];
var text=document.getElementsByClassName("text")[0];
var searchBtn=document.getElementById("searchbtn");
var replaceBtn=document.getElementById("replacebtn");


searchBtn.onclick=function (){
  var search=new RegExp(searchText.value);
  if (search.test(text.innerHTML)===true){
  text.innerHTML= text.innerHTML.split(searchText.value)[0]+"<span style='color: blue'>"+searchText.value+"</span>"+text.innerHTML.split(searchText.value)[1];
  }
  else {alert("没有找到哦~")}
};

replaceBtn.onclick=function () {
  var search=new RegExp(searchText.value);
  var replace=replaceText.value;
  if (search.test(text.innerHTML)===true){
    text.innerHTML=text.innerHTML.split(searchText.value)[0]+
    "<span style='color: blue'>"+replaceText.value+"</span>"+text.innerHTML.split(searchText.value)[1];
  }
  else {alert("没有找到哦~")}
};

















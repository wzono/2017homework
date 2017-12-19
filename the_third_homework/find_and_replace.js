$(document).ready(function(){
  var text,findContent,replaceContent,content;
  $("#find").click(function(){
      findContent = $("#findarea").val();
      text = $(".text").html();
      content = "<span style=\"font-size:18px;color:red;font-weight:600\">" + findContent +"</span>";
      text = text.split(findContent).join(content);
      $(".text").html(text)
  })
  $("#replace").click(function(){
      findContent = $("#findarea").val();
      replaceContent = $("#replacearea").val()
      text = $(".text").html();
      content = "<span style=\"font-size:18px;color:red;font-weight:600\">" + replaceContent +"</span>";
      text = text.split(findContent).join(content);
      $(".text").html(text)
  })
})

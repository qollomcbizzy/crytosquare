//this is the user interfance
$(document).ready(function(){
  $("form#crytosquare").submit(function(event){
    event.preventDefault();
    var sentence=$("input#sentence").val();
    $("#output").text(result);  
  });
});

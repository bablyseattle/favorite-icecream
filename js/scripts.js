$(document).ready(function(){
  $(".btn").click(function(event){
    var flavors = ["chocolate", "vanilla", "coconut", "mango"];
    var ids = ["flavor1", "flavor2", "flavor3", "flavor4"];
    var currentId = 0;
    flavors.forEach(function(flavor){
      currentId+=1;
      $("#flavor"+currentId).text(flavor);
        });
    event.preventDefault();
  });
});

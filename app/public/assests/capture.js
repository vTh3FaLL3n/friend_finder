
$("#submit").on("click", function(event) {
    event.preventDefault();
    
    var userData = {
      name: $("#name").val(),
      points: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
   
    $.post("/api/friends", userData, function(data) {
    
      $("#friend-name").text(data.name);
      console.log(data.name);
    });
  
  });

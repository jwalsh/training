var og_access_token = "";

$(function() {
  $.getJSON(
    "https://graph.facebook.com/btaylor?access_token=" + og_access_token + "&callback=?",
    function(response) {
      console.log(response);
      $("#fullName").html("Name: " + response.first_name + " " + response.last_name);
      $("#location").html("Location: " + response.hometown.name);
      for (var w in response.work) {
        $("<li>")
          .html(response.work[w].employer.name)
          .bind(
            "click",
            // function () {
            //   alert(response.work[w].employer.name);
            // }
            function (work) {
              return function() {
                alert(work.employer.name);
              }
            }(response.work[w])
          )
          .appendTo("#work");
      }
    } 
  )

})
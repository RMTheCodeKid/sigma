$(document).ready(function(){

  var kloutKey = "jd6cc9femtsv3ssxzfuz37tp";

  $("#userLookup").click(function(){

   var userName = $("input").val();

   $.ajax({
     url: "http://api.klout.com/v2/identity.json/twitter?screenName="+userName+"&key="+kloutKey,
     crossDomain: true,
     dataType: "json",
     type: "GET",
     success: function(data){
        console.log(data);
     },
     error: function(data){
        console.log(data);
     }
   })//end of ajax call

  })//end of userLookup for KloutId

}) //End of .ready() function

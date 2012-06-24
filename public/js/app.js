$(document).ready(function(){

  //var kloutPeople = {};

  var kloutPeople =  [
      {"name":"bradwilson", "score": "58.270538330078125"},
      {"name":"carolineghosn", "score":" 57.5209846496582"},
      {"name":"SaraJChipps", "score":"57.16282653808594"},
      {"name":"gblock", "score":"54.87932205200195"},
      {"name":"amandapouchot", "score":"54.46243667602539"}
   ];




  $("#userLookup").click(function(){
    $("#influencees").html("");

   //var userName = $("input").val();
  var list = $('<ul></ul>');
  var l;
    for(i =0; i < kloutPeople.length; i++){
       // console.log(kloutPeople[i].name  + " " + kloutPeople[i].score);
       var kloutItem = kloutPeople[i].name + "  " +  " Klout Score " + kloutPeople[i].score + "\n";
       var kloutData = $('<ul></ul>');
       kloutData.html(kloutItem);
       list.append(kloutData);
    }
    $("#influencees").append(list);
  })//end of userLookup for Klout Influences & Influencers

}) //End of .ready() function

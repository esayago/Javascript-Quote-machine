$(document).ready(function(){
  $.getJSON("https://got-quotes.herokuapp.com/quotes", function(val){
      $("#quote").html('" ' + val.quote + '"');
      $("#by").html("- "+val.character);
      $(".twitter-share").attr("href","https://twitter.com/intent/tweet/?text=" + val.quote)
    });
  $("#getQuote").on("click", function(){
    $.getJSON("https://got-quotes.herokuapp.com/quotes", function(val){
      $("#quote").html('" ' + val.quote + '"');
      $("#by").html("- "+val.character);
      $(".twitter-share").attr("href","https://twitter.com/intent/tweet/?text=" + val.quote)
    });
  });
});
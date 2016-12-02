// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

$(document).ready(function(){
  var data = [];
  $.ajax({
    url: 'http://www.mattbowytz.com/simple_api.json?data=all',
    dataType: 'json',
  }).done(function(ret){
    for(item in ret.data.programming) data.push(ret.data.programming[item].toLowerCase());
    for(item in ret.data.interests) data.push(ret.data.interests[item].toLowerCase());
  });

  $(".flexsearch-input").keyup(function(event){
    var search = $(".flexsearch-input").val() || "";
    search = search.toLowerCase();
    if(search === ""){
      //do nothing
    }else{
       googleSearch(search);
    }
  });

  //google search
  function googleSearch(search){
    var list = "";
    for(item in data){
      if( data[item].substring(0, search.length) === search ) {
        list += ( "<li><a href='http://www.google.com/search?q="+data[item]+"' target='_blank'>" + data[item] + "</a></li>" );
      }
    }
    $("#resultingList").html(list);
  }
});

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();
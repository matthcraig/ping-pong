
var pingPong = function(entry){
  var entryArray = [];
  for (var index = 0; index <= entry; index += 1){
    entryArray.push(index);
  }
  entryArray.forEach(function(number){
    if(number % 15 === 0 && number > 1){
    entryArray[number] = "Pingpong";
  } else if (number % 5 === 0 && number > 1){
    entryArray[number] = "Pong";
  } else if (number % 3 === 0 && number > 1){
    entryArray[number] = 'Ping';
  }
  });
return entryArray;
}

$(document).ready(function() {
$("form#ping-pong").submit(function(event){
event.preventDefault();

var entry = parseInt($("input#entry").val());
var result = pingPong(entry);
$("#result").text(result);
  });
});

var pingPong = function(entry) {
    if (entry % 3 === 0) {
      return "ping";
    }
    else if (entry % 5 === 0) {
      return "pong";
    }
    else if (entry % 15 === 0) {
      return "pingpong";
    };
};
    
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var entry = parseInt($("input#entry").val());
      var result = pingPong(entry);
      $("#result").text(result);
    });
});
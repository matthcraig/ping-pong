
var pingPong = function(entry) {
    if (entry % 15 === 0) {
      return "PingPong!";
    }
    else if (entry % 5 === 0) {
      return "Pong";
    }
    else if (entry % 3 === 0) {
      return "Ping";
    }
    else if (entry % 15 !== 0 || entry % 5 !== 0 || entry % 3 !== 0) {
        return entry;
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
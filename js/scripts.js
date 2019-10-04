var pingPong = function() {
    if (/*something*/) {
      return true;
    } else {
      return false;
    }
  };
  
  $(document).ready(function() {
    $("form#leap-year").submit(function(event) {
      event.preventDefault();
      var entry = parseInt($("input#entry").val());
      var result = pingPong;

      $(".entry").text(entry);

    });
    $("#result").show();

    });
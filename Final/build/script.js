jQuery(".container").submit(function( event ) {
  
    var $btn = jQuery('.login-submit');
    $btn.toggleClass("shrinking");
    
    // Commented to easily toggle bewteen button's states
    // $btn.attr("disabled", "disabled");
    
    window.setTimeout(function() {
      $btn.toggleClass("loading");
    }, 250);
    
    event.preventDefault();
  });
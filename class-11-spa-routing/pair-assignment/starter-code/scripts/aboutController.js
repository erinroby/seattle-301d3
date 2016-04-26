(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    // this route says, just show my about page.
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);

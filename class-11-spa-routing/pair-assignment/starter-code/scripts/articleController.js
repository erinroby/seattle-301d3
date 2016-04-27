(function(module) {
  var articlesController = {};

<<<<<<< HEAD
  // DONE: Create the `articles` table when the controller first loads,
  //  with the code that used to be in index.html:
  Article.createTable();

  articlesController.index = function() {
    // DONE: Complete this function that kicks off the fetching and rendering
    //  of articles, using the same
    //  code that used to be in index.html:
    // initialize index page, articleView maybe? ER.
    Article.fetchAll(articleView.initIndexPage);

    // DONE: But wait! There's more: Also be sure to hide all the main section
    // elements, and reveal the articles section:
    $('main > section').hide();
    $('#articles').show();
    //now the route controls this, not a jQuery event!!! We're querrying the DOM over and over listening for events. We're also spoofed the browser into thinking we're on another page to save the history url.
=======
  // TODO: Create the `articles` table when the controller first loads,
  //  with the code that used to be in index.html:

  articlesController.index = function() {
    // TODO: Complete this function that kicks off the fetching and rendering
    //  of articles, using the same
    //  code that used to be in index.html:

    // TODO: But wait! There's more: Also be sure to hide all the main section
    //  elements, and reveal the articles section:
>>>>>>> d081f7cee5d9bb6f92f190f5848760146c7bbddb
  };

  module.articlesController = articlesController;
})(window);

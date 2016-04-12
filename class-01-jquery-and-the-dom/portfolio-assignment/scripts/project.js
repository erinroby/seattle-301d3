var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.description = opts.description;
  this.createdOn = opts.createdOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.category);
  $newProject.find('h1').text(this.title);
  $newProject.find('.description-copy').html(this.description);

  $newProject.find('time').html('project created about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');

  $newProject.removeClass('template');

  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.createdOn)) - (new Date(a.createdOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

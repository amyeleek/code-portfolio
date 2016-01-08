function Project(args){
  i = this; //so context is not lost inside the loop, we create a new variable to hold our values
  $.each(args, function(key, value){
    i[key] = value;
  });
};

Project.prototype.toHtml = function(){
  //standard Handlebars, get template, compile template, insert data, shove onto page
  var getTemplate = $('#project-template').html();
  var compTemplate = Handlebars.compile(getTemplate);

  var html = compTemplate(this);
  $('#projects').append(html);
};

//Project.prototype.append = function (obj){
//  $('#projects').append(obj);
//};

test.forEach(function(obj){
  proj = new Project(obj);
  proj.toHtml();
});

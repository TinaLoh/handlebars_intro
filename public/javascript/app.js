var source   = $("#entry-template").html();
var template = Handlebars.compile(source);


for(var i=1; i<10; i++) {

  var context = {
    title: "Title " + i,
    body: "I am the body for item " + i,
    author: 'Author ' + i
  };

  var post = template(context);

  $('#posts').append(post);

}



// var context1 = {title: "My New Post", body: "This is my first post!"};
// var v1 = template(context1);
//
// $('#v1').append(v1)
//
// var context2 = {title: "My Second Post", body: "This is my second post!"};
// var v2 = template(context2);
//
// $('#v2').append(v2)

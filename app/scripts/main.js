var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());

  $('.create-post-form').on('submit', function(event){
    $(document).trigger('create:post', [{title: "Cool", body: "Cool"}]);
  });

  var view = new PostsView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

// var title = $('.create-post-form-title').val();
//
//   console.log(title);

$(document).on('create:post', function(){
var title = $('.create-post-form-title').val();
var body = $('.create-post-form-body').val();
  $.ajax({
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',
    method: 'POST',
    data: {title: title, body: body}
  });
});

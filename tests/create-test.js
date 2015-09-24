var expect = chai.expect;
require('main');

describe('create post form', function() {
  it('should trigger a create:post event on the document with the title and body', function(done){
    $('.create-post-form-title').val('Post Title');
    $('.create-post-form-body').val('Post Body');

    $(document).on('create:post', function(event, post){
      expect(false).to.equal(true);
      done();
    });

    $('create-post-form-submit').click();

  });
});

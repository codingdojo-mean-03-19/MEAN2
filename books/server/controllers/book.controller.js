const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');

module.exports = {
  // getting numerous of a particular resource (books) Book[]
  index(_request, response) {
    console.log('books index');
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.InternalServerError).json(error));
  },

  // single resource - Book
  show(request, response) {
    console.log('books show');

    const { book_id: bookId } = request.params;
    Book.findById(bookId)
      .then(book => {
        console.log('book found', book);
        response.json(book);
      })
      .catch(error => response.status(Http.NoContent).json(error));
  },

  // createa single resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // update single resource
  update(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndUpdate(bookId, { $set: { ...request.body } }, { new: true })
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // remove single resource
  destroy(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndRemove(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.UpgradeRequired).json(error));
  },
};

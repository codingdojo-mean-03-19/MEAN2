const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'supply a book title'],
    trim: true
  },
  year: Number,
  pages: {
    type: Number,
    required: [true, 'pages are required'],
    min: [1, 'more pages needed'],
  },
  publisher: String,
  author: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

// export class Book {
//   id: number;
//   title: string;
//   year: number;
//   pages: number;
//   author: string;
//   publisher: string;
// }

module.exports = mongoose.model('Book', BookSchema);

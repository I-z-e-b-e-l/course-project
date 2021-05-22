const mongoose = require ('mongoose');

const {Schema} = mongoose;

const comicSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'A title is required'],
        minLength: [1, 'Minimum length for a title is one character.']
    },
    author: {
        type: String,
        required: [true, 'An author is required'],
        minLength: [1, 'Minimum length for author\'s name is one character.']
    },

    publisher: {
        type: String,
        required: [true, 'A publisher is required'],
        minLength: [3, 'Minimum length for a publisher is three characters.']
    },

    genre: {
        type: String,
        required: [true, 'A genre is required'],
        minLength: [6, 'Minimum length for a genre is six characters.']
    },

    pages: {
        type: Number, 
        minLength: [3, 'Minimum length for number of pages is 3.'],
        maxLength: [7312, 'The longest book in the world is 7312 pages long. This one is probably shorter.']
    },

    rating: {
        type: Number,
        minLength: [1, 'Minimum rating is 1.'],
        maxLength: [5, 'Maximum rating is 5.']
    },

    synopsis: {
        type: String,
        required: [true, 'A genre is required'],
        minLength: [6, 'Minimum length for a genre is six characters.']
    },

    image:{
        // required: [true, 'An image is required'],
    }

})

const Comic = mongoose.model('Comic', comicSchema)

module.exports=Comic;
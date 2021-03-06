const mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    comment: {
        type: String,
        required: true
    }
}, { id: false })
const PostSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    post: {
        type: String,
        required: true
    },
    comments: {
        type: [CommentSchema],
        default: []
    }

})

const Post = mongoose.model('Post', PostSchema, 'posts')
module.exports = Post
const express = require('express')
const postRoute = express.Router()

const postController = require('../controllers/postControllers')

// (4) all post page
postRoute.get('/', postController.getAllPost)

// (3) create post
postRoute.get('/new', postController.createPostForm)
postRoute.post('/new', postController.createPost)

// (6) edit post
postRoute.patch('/new', postController.updatePost)

// (5) single post
postRoute.get('/:id', postController.getPostById)

// (6) delete post
postRoute.delete('/delete', postController.deletePost)

module.exports = postRoute
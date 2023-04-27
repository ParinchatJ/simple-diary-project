const express = require('express')
const postRoute = express.Router()

const postController = require('../controllers/postControllers')

// (4) all post page
postRoute.get('/', postController.getAllPost)

// (3) create post
postRoute.get('/new', postController.createPostForm)
postRoute.post('/new', postController.createPost)
postRoute.get('/new/done', postController.postNewDone)

// (6) edit post
postRoute.get('/update/:id', postController.updatePost)
postRoute.post('/update/:id', postController.editPostSave)

// (5) single post
postRoute.get('/:id', postController.getPostById)

// (6) delete post
postRoute.get('/delete/:id', postController.deletePost)

module.exports = postRoute
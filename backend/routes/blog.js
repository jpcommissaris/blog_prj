const express = require('express')
const router = express.Router()
const {requireSignin, adminMiddleware} = require('../controllers/auth')
const {create, listAllBlogs, listAllBlogsCategoriesTags, read, remove, update, photo} = require('../controllers/blog')

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', listAllBlogs)
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags)
router.get('/blog/:slug', read)
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove)
router.put('/blog/:slug', requireSignin, adminMiddleware, update)
router.get('/blog/photo/:slug', photo)

module.exports = router





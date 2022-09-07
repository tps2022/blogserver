// blogPosts.controller.js
const express = require("express");
const router = express.Router();
const BlogPosts =require( "../models/blogs.js");

//Index Route
router.get('/', (req, res) => {
  BlogPosts.find({}, (err, foundBlogPosts) => {
      res.json(foundBlogPosts);
  });
});

// New - Will be handled by React application
// Delete Route
router.delete('/:id', (req, res) => {
  BlogPosts.findByIdAndRemove(req.params.id, (err, deletedBlogPost) => {
      res.json(deletedBlogPost);
  });
});


// Update Route
router.put('/:id', (req, res) => {
  BlogPosts.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBlogPost) => {
      res.json(updatedBlogPost);
  });
});
// Create Route
router.post('/', (req, res) => {
BlogPosts.create(req.body, (err, createdBlogPost) => {
      res.json(createdBlogPost); //.json() will send proper headers in response so client knows it's json coming back
  });
});
// Edit - Will be handled by React application
// Show
// Show
router.get('/:id', (req, res) => {
  BlogPosts.findById(req.params.id, (err, foundBlogPost) => {
      res.json(foundBlogPost);
  });
});

// export const getAllBlogPosts = async (req, res) => {
//   try {
//     const blogPosts = await BlogPost.find();
//     res.status(200).json(blogPosts);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const addBlogPost = async (req, res) => {
//   const { title, description, fileUpload, creator, tags } = req.body;

//   const createNewPost = new BlogPost({
//     title,
//     description,
//     fileUpload,
//     creator,
//     tags,
//   });

//   try {
//     await createNewPost.save();
//     res.status(201).json(createNewPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const getSinglePost = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const singlepost = await BlogPost.findById(id);

//     res.status(200).json(singlepost);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const updateSingleBlogPost = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, creator, fileUpload, tags } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`post ${id} not found`);

//   const updatedBlogPost = {
//     creator,
//     title,
//     description,
//     tags,
//     fileUpload,
//     _id: id,
//   };
//   await BlogPost.findByIdAndUpdate(id, updatedBlogPost, { new: true });
//   res.json(updatedBlogPost);
// };

// export const likeBlogPost = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const post = await BlogPost.findById(id);

//   const updatedBlogPost = await BlogPost.findByIdAndUpdate(
//     id,
//     { upvote: post.upvote + 1 },
//     { new: true }
//   );

//   res.json(updatedBlogPost);
// };

// export const removeSingleBlogPost = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`post ${id} not found`);

//   await BlogPost.findByIdAndRemove(id);

//   res.json({ message: "Successfully deleted" });
// };

module.exports = router;
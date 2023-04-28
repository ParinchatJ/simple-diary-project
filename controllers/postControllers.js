const PostModel = require("../models/postSchema");

// GET ALL POST

const getAllPost = async (req, res) => {
  const allPost = await PostModel.find().sort([["date", -1]]); // date now
  if (!allPost) return res.status(204).json({ message: "No post found." });
  res.render('allPostPage', { allPost });
};

// CREATE POST
const createPostForm = async (req, res) => {
  res.render('createPostPage')
}

const createPost = async (req, res) => {

  const { name, date, topic, tell_story } = req.body ?? {}

  // Validate
  try {
    if (!req?.body?.name || !req?.body?.date) {
      return res.status(400).render('createPostPage', { message: "Name and date are required!" , name, date, topic, tell_story })
    }
  
    if (!req?.body?.tell_story || !req?.body?.topic) {
      return res.status(400).render('createPostPage', { message: "Topic and storry are required!", name, date, topic, tell_story })
    }

    const resultPost = await PostModel.create({
      name: name,
      date: date,
      topic: topic,
      tell_story: tell_story
    });

  } catch (error) {
    console.error(`Error to create post = ${error}`);
  }

  res.status(201).redirect('/post/new/done')
};

const postNewDone = async (req, res) => {
  res.render('createPostDonePage')
}

// UPDATE POST

const updatePost = async (req, res) => {
  // Verify
  // dont have ID
  if (!req?.params?.id) {
    return res.status(400).json({
      message: "ID parameter is required.",
    });
  }

  const postID = await PostModel.findOne({ _id: req.params.id }).exec();
  // cant find ID match
  if (!postID) {
    return res
      .status(204)
      .json({ message: `No Post match ID ${req.params.id}.` });
  }

  res.render('updatePostPage', { postID });
};

// update post save
const editPostSave = async (req, res) => {
  const { name, date, topic, tell_story, emoji } = req.body ?? {}

  if (!req?.params?.id) {
    return res.status(400).json({
      message: "ID parameter is required.",
    });
  }

  const postID = await PostModel.findOne({ _id: req.params.id }).exec();
  // cant find ID match
  if (!postID) {
    return res
      .status(204)
      .json({ message: `No Post match ID ${req.params.id}.` });
  }

  if (name) postID.name = name;
  if (date) postID.date = date;
  if (topic) postID.topic = topic;
  if (tell_story) postID.tell_story = tell_story;
  if (emoji) postID.emoji = emoji;
  
  const result = await postID.save();
  res.render('updatePostDone')
}

// GET POST BY ID

const getPostById = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({
      message: "ID parameter is required.",
    });
  }

  const postID = await PostModel.findOne({ _id: req.params.id }).exec();
  // cant find ID match
  if (!postID) {
    return res
      .status(204)
      .json({ message: `No Post match ID ${req.params.id}.` });
  }

  res.render('postId', {postID});

  // const { id } = req.params; // can use to tell url param
  // res.send(`Single post id = ${id}`);
};


// DELETE POST

const deletePost = async (req, res) => {
  // Validate
  // dont have ID
  if (!req?.params?.id) {
    return res.status(400).json({
      message: "ID parameter is required.",
    });
  }

  const postID = await PostModel.findOne({ _id: req.params.id }).exec();
  // cant find ID match
  if (!postID) {
    return res
      .status(204)
      .json({ message: `No Post match ID ${req.params.id}.` });
  }

  const result = await postID.deleteOne({ _id: req.params.id });
  res.redirect('/post')
};

module.exports = {
  getAllPost,
  createPost,
  updatePost,
  getPostById,
  deletePost,
  createPostForm,
  postNewDone,
  editPostSave
};

const UserModel = require("../models/homeSchema");
const PostModel = require("../models/postSchema")

const getQuestionPre = async (req, res) => {
  res.render('knowYouPage')
}

const postQuestionPre = async (req, res) => {
  if (!req?.body?.name) {
    return res.status(400).json({ message: "Name is required!" });
  }

  try {
    const result = await UserModel.create({
      name: req.body.name,
      date_of_birth: req.body.date_of_birth,
      goal: req.body.goal,
      inspiration: req.body.inspiration,
    });

    res.status(201).redirect('/myspace')
  } catch (error) {
    console.error(`Error to post preQuestion = ${error}`);
  }
};

const getMyspace = async (req, res) => {
  const user = await UserModel.find().sort({ _id: -1 }).limit(1);
  if (!user) return res.status(204).json({ message: "No User found." });

  const post3ID = await PostModel.find({ name: user[0].name }).sort([["date", -1]]).limit(3);
  // cant find name match
  if (!post3ID) {
    return res
      .status(204)
      .json({ message: `No Post match` });
  }

  res.render('myspacePage', {user, post3ID});
};

module.exports = {
  getQuestionPre,
  postQuestionPre,
  getMyspace,
};

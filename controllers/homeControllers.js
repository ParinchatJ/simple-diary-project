const UserModel = require("../models/homeSchema");

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

    res.status(201).json(result)
  } catch (error) {
    console.error(`Error to post preQuestion = ${error}`);
  }
};

const getMyspace = async (req, res) => {
  const user = await UserModel.find().sort({ _id: -1 }).limit(1);
  if (!user) return res.status(204).json({ message: "No User found." });
  res.render('myspacePage', { user });
};

module.exports = {
  getQuestionPre,
  postQuestionPre,
  getMyspace,
};

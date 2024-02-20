import Article from "../models/Article.js";

const getArticles = async () => {
  return await Article.find({}).populate("category").populate("tags");
};

const getArticleByID = async (id) => {
  return await Article.findOne({ _id: id })
    .populate("category")
    .populate("tags");
};

const getLatestArticles = async () => {
  return await Article.find({}).sort({ createdAt: -1 }).limit(3);
};

// JÓ-E ÍGY?
const getArticlesByCategory = async (category) => {
  return await Article.find({ category: category })
    .populate("category")
    .populate("tags");
};
const getArticlesByTag = async (tag) => {
  return await Article.find({ tags: tag })
    .populate("category")
    .populate("tags");
};

export {
  getArticles,
  getArticleByID,
  getLatestArticles,
  getArticlesByCategory,
  getArticlesByTag,
};

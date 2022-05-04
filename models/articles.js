import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({

})

const Article = mongoose.model("Article", ArticleSchema);

export default Article
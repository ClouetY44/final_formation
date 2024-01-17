import Query from "../model/Query.js";

const getAll = async (req, res) => {
    try {
        const queryArticle = "SELECT date, subject.id AS subject , user.id AS user, subject.Title, subject.Content, user.User_name FROM article JOIN subject ON article.SUBJECT_id = subject.id JOIN user ON article.USER_id = user.id;";
        const articles = await Query.run(queryArticle)
        res.json(articles)
    } catch {
        res.status(500).json({ msg: error })
    }
}

export default getAll
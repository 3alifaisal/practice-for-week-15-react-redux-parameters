import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./SingleArticle.css";
import { useSelector } from "react-redux";

const SingleArticle = () => {
  const { id } = useParams();

  const articles = useSelector((state) => state.articleState.entries);
  const article = articles.find((article) => {
    return article.id === id;
  });

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;

import React, { useState } from "react";
import CardHeader from "../Atoms/Text/cardHeader";
import CardContent from "../Atoms/Text/cardContent";
import timeIcon from "../../../assets/images/timeIcon.png";
import heartIcon from "../../../assets/images/heartIcon.png";
import fullHeartIcon from "../../../assets/images/fullHeartIcon.png";
import { addFavorite, removeFavorite } from "../../../utils/localStorage";
import { timeSince } from "../../../utils/timeSince";

function Card({ article, getNews }) {
  const [articleState, setArticleState] = useState({ ...article });
  const [isFavoriteState, setIsFavoriteState] = useState(article?.isFavorite);

  const handleFave = () => {
    const updatedArticle = {
      ...articleState,
      isFavorite: !articleState.isFavorite,
    };
    setArticleState(updatedArticle);
    setIsFavoriteState((prevState) => !prevState);

    if (articleState.isFavorite) {
      removeFavorite(updatedArticle);
      getNews();
    } else {
      addFavorite(updatedArticle);
    }
  };
  return (
    <div className="card-container">
      <a href={article?.story_url} target="_blank" rel="noreferrer">
        <div className="card-header">
          <img className="card-icon-time" src={timeIcon} alt="timeIcon" />
          <CardHeader
            text={timeSince(article?.created_at) + " by " + article.author}
          />
        </div>
        <CardContent text={article.story_title} />
      </a>
      <button className="card-icon-heart-container" onClick={handleFave}>
        <img
          className={"card-icon-heart"}
          src={!isFavoriteState ? heartIcon : fullHeartIcon}
          alt="heartIcon"
        />
      </button>
    </div>
  );
}

export default Card;

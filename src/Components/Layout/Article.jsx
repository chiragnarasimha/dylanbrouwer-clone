import "./Article.scss";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Article = ({ imgSrc, desc, title }) => {
  return (
    <article className="article">
      <div className="article__section">
        <div
          className="article__section__image"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
      </div>
      <div className="article__section">
        <div className="article__section__description">{desc}</div>
      </div>
      <div className="article__section">
        <div className="article__section__title">
          <h2>{title}</h2>
          <FontAwesomeIcon
            icon={faPlus}
            className="article__section__title__font-awesome-icon"
          />
        </div>
      </div>
      <div className="article__section">
        <div className="article__section__nav">
          <button
            class="article-nav-button"
            type="button"
            onclick="handleLeftClick()"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </button>
          <button
            class="article-nav-button"
            type="button"
            onclick="handleRightClick()"
          >
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article;

import "./Article.scss";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Article = ({
  imgSrc,
  id,
  desc,
  title,
  data_index,
  data_status,
  handleLeftClick,
  handleRightClick,
  button_error,
}) => {
  return (
    <article
      className="article"
      id={id}
      data_index={data_index}
      data_status={data_status}
    >
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
            id="FontAwesomeIcon"
            icon={faPlus}
            className="article__section__title__font-awesome-icon"
          />
        </div>
      </div>
      <div className="article__section">
        <div className="article__section__nav">
          <button
            // button_error={button_error}
            type="button"
            onClick={handleLeftClick}
          >
            <FontAwesomeIcon id="FontAwesomeIcon" icon={faArrowLeftLong} />
          </button>
          <button
            // button_error={button_error}
            type="button"
            onClick={handleRightClick}
          >
            <FontAwesomeIcon id="FontAwesomeIcon" icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article;

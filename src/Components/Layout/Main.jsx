import "./Main.scss";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faCodepen,
  // faDumpsterFire
} from "@fortawesome/free-brands-svg-icons";

const Main = (props) => {
  const content = [
    {
      imgSrc: "",
      desc: "",
      title: "",
    },
    {
      imgSrc: "",
      desc: "",
      title: "",
    },
    {
      imgSrc: "",
      desc: "",
      title: "",
    },
    {
      imgSrc: "",
      desc: "",
      title: "",
    },
  ];

  return (
    <main className="main">
      <article className="article">
        <div className="article__section">
          <div className="article__section__image"> </div>
        </div>
        <div className="article__section">
          <div className="article__section__description"> </div>
        </div>
        <div className="article__section">
          <div className="article__section__title"> </div>
        </div>
        <div className="article__section">
          <div className="article__section__nav"> </div>
        </div>
      </article>
    </main>
  );
};

export default Main;

import "./Main.scss";
import React, { useEffect, useState } from "react";

import Article from "./Article";
const INITIAL_CONTENT = [
  {
    id: `ar1`,
    imgSrc:
      "https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    desc: (
      <>
        This is a recreation (from scratch) of
        <a
          // To open the link in a new tab
          target="_blank"
          rel="noreferrer"
          href="https://www.dylanbrouwer.design/work"
        >
          dylanbrouwer.design/work
        </a>
      </>
    ),
    title: "Recreation From Scratch",
    data_status: "active",
    button_error: "no-error",
  },
  {
    id: `ar2`,
    imgSrc:
      "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    desc: "A place where books hang out waiting to be grabbed. But don't be too grabby now, ya hear.",
    title: "Wicked Cool Library Shelves",
    data_status: "inactive",
    button_error: "no-error",
  },
  {
    id: `ar3`,

    imgSrc:
      "https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    desc: "The neatest lighthouse you ever saw. Ehh, actually it's kind of messy. But that's why the pic is of the outside.",
    title: "Neato Toledo Lighthouse",
    data_status: "inactive",
    button_error: "no-error",
  },
  {
    id: `ar4`,
    imgSrc:
      "https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    desc: "The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.",
    title: "Super Space Blob",
    data_status: "inactive",
    button_error: "no-error",
  },
];
const Main = () => {
  const [content, setContent] = useState(INITIAL_CONTENT[0]);
  const [contentIndex, setContentIndex] = useState({ old: 0, new: 0 });

  const leftClickHandler = (id) => {
    const selectedContentIndex = INITIAL_CONTENT.findIndex(
      (item) => item.id === id
    );
    setContent(INITIAL_CONTENT[selectedContentIndex]);
    let newIndex = selectedContentIndex - 1;
    if (newIndex < 1) {
      newIndex = 0;
      INITIAL_CONTENT[newIndex].button_error = "error";
    }

    setContentIndex({ old: selectedContentIndex, new: newIndex });
    INITIAL_CONTENT[selectedContentIndex].data_status = "inactive-to-left";
    INITIAL_CONTENT[newIndex].data_status = "active";
  };

  console.log({ contentIndex2: contentIndex });

  const rightClickHandler = (id) => {
    const selectedContentIndex = INITIAL_CONTENT.findIndex(
      (item) => item.id === id
    );
    setContent(INITIAL_CONTENT[selectedContentIndex]);
    let newIndex = selectedContentIndex + 1;
    if (newIndex > 3) {
      newIndex = 3;
    }

    setContentIndex({ old: selectedContentIndex, new: newIndex });
    INITIAL_CONTENT[selectedContentIndex].data_status = "inactive-to-right";
    INITIAL_CONTENT[newIndex].data_status = "active";
  };

  const articles = INITIAL_CONTENT.map((article, index) => (
    <Article
      key={`${index} ${article.title}`}
      id={article.id}
      imgSrc={article.imgSrc}
      desc={article.desc}
      title={article.title}
      data_index={index}
      data_status={article.data_status}
      handleLeftClick={leftClickHandler.bind(null, article.id)}
      // handleLeftClick={leftClickHandler}
      handleRightClick={rightClickHandler.bind(null, article.id)}
      button_error={article.button_error}
    />
  ));

  return <main className="main">{articles}</main>;
};

export default Main;

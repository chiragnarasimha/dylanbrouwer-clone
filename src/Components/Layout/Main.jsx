import "./Main.scss";
import React from "react";

import Article from "./Article";

const Main = () => {
  const content = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      desc: `This is a recreation (from scratch) of ${(
        <a href="https://www.dylanbrouwer.design/work">
          dylanbrouwer.design/work
        </a>
      )}`,
      title: "Recreation From Scratch",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
      desc: "A place where books hang out waiting to be grabbed. But don't be too grabby now, ya hear.",
      title: "Wicked Cool Library Shelves",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1660580554695-d2ca5008f1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      desc: "The neatest lighthouse you ever saw. Ehh, actually it's kind of messy. But that's why the pic is of the outside.",
      title: "Neato Toledo Lighthouse",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      desc: "The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.",
      title: "Super Space Blob",
    },
  ];

  const content1 = content[1];
  console.log(content1);

  return (
    <main className="main">
      <Article
        imgSrc={content1.imgSrc}
        desc={content1.desc}
        title={content1.title}
      />
    </main>
  );
};

export default Main;

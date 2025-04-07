import { useState } from "react";

const arr = [
  {
    id: 1,
    name: "photo1.png",
    src: "/photo1.png",
  },
  {
    id: 2,
    name: "photo2.png",
    src: "/photo2.png",
  },
  {
    id: 3,
    name: "photo3.png",
    src: "/photo3.png",
  },
];

export default function App() {
  const [curIndex, setCurIndex] = useState(0);
  function leftSide() {
    setCurIndex((prevIndex) =>
      prevIndex < arr.length - 1 ? 0 : prevIndex - 1
    );
  }

  function rightSide() {
    setCurIndex((prevIndex) =>
      prevIndex >= arr.length - 1 ? 2 : prevIndex + 1
    );
  }

  return (
    <div className="conatiner">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {arr[curIndex].name}
      </h1>
      <PhotoName
        gallery={curIndex}
        changeImgLeft={leftSide}
        changeImgRight={rightSide}
      />
    </div>
  );
}

function PhotoName({ gallery, changeImgLeft, changeImgRight }) {
  return (
    <div className="photo-name">
      <button className="btn-1" onClick={changeImgLeft}>
        👈
      </button>
      <img src={arr[gallery].src} alt="" />
      <button className="btn-2" onClick={changeImgRight}>
        👉
      </button>
    </div>
  );
}

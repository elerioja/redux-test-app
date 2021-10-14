import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as HeartIcon } from "../../images/heart.svg";
import { actions } from "../redux/libraryState";

export default function Photo({ photo }) {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.photos);

  const handleLikeButtonClick = (photo) => {
    if (library.includes(photo)) {
      dispatch(actions.removeFromLibrary(photo));
    } else {
      dispatch(actions.addToLibrary(photo));
    }
  };
  return (
    <div
      className="photo-container"
      onClick={() => {
        handleLikeButtonClick(photo);
      }}
    >
      <img alt={photo.photographer} src={photo.src.small} className="photo" />
      <div
        className={` like-button ${
          library.includes(photo) === true ? "liked" : ""
        }`}
      >
        <HeartIcon />
      </div>
    </div>
  );
}

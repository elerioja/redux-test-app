import React from "react";
import Loading from "../Loading";
import Photo from "../Photo";

const PhotoWall = ({ data = null, isLoading }) => {
  if (data.length < 1 && isLoading === true) {
    return <Loading />;
  }

  if (data.length < 1 && isLoading === false) {
    return null;
  }

  return (
    <div className="photo-wall-container">
      {data.map((item) => (
        <Photo key={item.id} photo={item} />
      ))}
    </div>
  );
};

export default PhotoWall;

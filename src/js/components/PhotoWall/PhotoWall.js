import React from "react";
import Loading from "../Loading";
import Photo from "../Photo";

const PhotoWall = ({ data = null }) => {
  if (!data || data.length < 1) {
    return <Loading />;
  }

  return (
    <div className="photo-wall">
      <h1>Photos</h1>
      <div className="photo-wall-container">
        {data.map((item) => (
          <Photo key={item.id} photo={item} />
        ))}
      </div>
    </div>
  );
};

export default PhotoWall;

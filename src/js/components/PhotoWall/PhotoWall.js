import React from "react";
import Loading from "../Loading";
import PhotoGallery from "../PhotoGallery";

export default ({ data = null }) => {
  if (!data) return <Loading />;
  return <PhotoGallery />;
};

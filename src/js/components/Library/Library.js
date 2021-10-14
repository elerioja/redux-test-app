import React from "react";
import Photo from "../Photo";

export default function Library({ data }) {
  console.log("data", data);
  return (
    <div>
      <h1>My library</h1>
      <div className="library-container">
        {data.map((item) => (
          <Photo key={item.id} photo={item} />
        ))}
      </div>
    </div>
  );
}

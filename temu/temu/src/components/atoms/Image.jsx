import React from "react";

export const Image = ({ obj }) => {
  return (
    <div>
      <img
        src={obj.image} // where to get the picture from
        alt={obj} //text if image doesn’t load
        style={{
          // inline styles
          width: obj.width, // how wide the image is
          height: obj.height, // how tall the image is
          objectFit: obj.objectFit, // how the image fills the box
        }}
      ></img>
      {console.log(obj, "object hai beru")}
    </div>
  );
};

export default Image;

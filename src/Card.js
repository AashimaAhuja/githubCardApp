import React from "react";

export const Card = props => {
  return (
    <>
      <div className="Card">
        <img
          src={props.image}
          alt="placeholder_image"
          style={{ width: "75px", height: "75px" }}
        />
        <div className="Card-content">
          <span className="name">{props.name}</span>
          <span className="company">{props.company}</span>
        </div>
      </div>
    </>
  );
};

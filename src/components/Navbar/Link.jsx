import React from "react";

const Link = ({route}) => {
  return (
    <div>
      <li className="mr-5">
        <a href={route.url}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;

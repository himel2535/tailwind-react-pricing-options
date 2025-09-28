import React from "react";

const Link = ({route}) => {
  return (
    <div>
      <li className="cursor-pointer hover:bg-amber-500">
        <a href={route.url}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;

import React from "react";
import Link from "./Link";
const urlData = [
  { id: 1, name: "Google", url: "https://www.google.com" },
  { id: 2, name: "YouTube", url: "https://www.youtube.com" },
  { id: 3, name: "Facebook", url: "https://www.facebook.com" },
  { id: 4, name: "Twitter", url: "https://www.twitter.com" },
  { id: 5, name: "LinkedIn", url: "https://www.linkedin.com" }
];

const Navbar = () => {
  return (
    <nav>
      {/* <ul className="flex">
        <li className="mr-5">
          <a href="/">Home</a>
        </li>
        <li className="mr-5">
          <a href="/">About</a>
        </li>
        <li className="mr-5">
          <a href="/">Blog</a>
        </li>
      </ul> */}

      <ul className="flex">
        {
            urlData.map(route=> <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;

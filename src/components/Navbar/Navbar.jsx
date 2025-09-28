import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const urlData = [
  { id: 1, name: "Google", url: "https://www.google.com" },
  { id: 2, name: "YouTube", url: "https://www.youtube.com" },
  { id: 3, name: "Facebook", url: "https://www.facebook.com" },
  { id: 4, name: "Twitter", url: "https://www.twitter.com" },
  { id: 5, name: "LinkedIn", url: "https://www.linkedin.com" },
];

const Navbar = () => {
  const link = urlData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between px-10 py-5">

      <div className="flex gap-5">
        <span onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X></X> : <Menu className="cursor-pointer "></Menu>}
        </span>
        <ul className={` bg-amber-200 px-3 text-black duration-800 ${
          open? "absolute top-12" : "absolute -top-50"
        }`}>{link}</ul>
        <h1>Navbar</h1>

        
      </div>

      <ul className="md:flex hidden  gap-5">{link}</ul>
      <button className="btn">Click</button>
    </nav>
  );
};

export default Navbar;

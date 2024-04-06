import Link from "next/link";
import React from "react";

function Navlinks({styling}:any) {
  return (
    <ul className={`${styling} `}>
      <li>
        <Link href={"#home"}>Home</Link>
      </li>
      <li>
        <Link href={"#about"}>About</Link>
      </li>
      <li>
        <Link href={"#testimonials"}>Testimonials</Link>
      </li>
      <li>
        <Link href={"#work"}>Our Work</Link>
      </li>
      <li>
        <Link href={"#news"}>News</Link>
      </li>
      <li>
        <Link href={"#contact"}>Contact</Link>
      </li>
    </ul>
  );
}

export default Navlinks;

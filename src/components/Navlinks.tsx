import Link from "next/link";
import React from "react";

function Navlinks({styling}:any) {
  return (
    <ul className={`${styling} `}>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>About</Link>
      </li>
      <li>
        <Link href={"/"}>Testimonials</Link>
      </li>
      <li>
        <Link href={"/"}>Our Work</Link>
      </li>
      <li>
        <Link href={"/"}>News</Link>
      </li>
      <li>
        <Link href={"/"}>Contact</Link>
      </li>
    </ul>
  );
}

export default Navlinks;

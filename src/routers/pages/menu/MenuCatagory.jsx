import React from "react";
import MenuItem from "../shared/MenuItem";
import Cover from "../shared/Cover";
import { Link } from "react-router-dom";

export default function MenuCatagory({ items, title, img }) {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">
          order Now
        </button>
      </Link>
    </div>
  );
}

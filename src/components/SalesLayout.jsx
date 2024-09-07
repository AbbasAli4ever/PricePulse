import React from "react";
import ItemsBanner from "./ItemsBanner";
import SideBar from "./SideBar";

export default function SalesLayout({ children }) {
  // Ensure children is an array and has exactly two elements
  const [firstChild, secondChild] = React.Children.toArray(children);

  console.log(firstChild, secondChild);

  return (
    <div>
      {firstChild}
      <div className="flex w-full flex-col sm:flex-row">
        <SideBar />
        {secondChild}
      </div>
    </div>
  );
}

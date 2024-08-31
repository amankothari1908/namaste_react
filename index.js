import React from "react";
import ReactDOM from "react-dom/client";

// Js Function
const Heading = () => (
  <h1 id="title" key="h1">
    THIS IS HEADING
  </h1>
);

// React Component
const HeaderComponent = () => {
  return (
    <div>
      {Heading()} or <Heading /> (this is called component composition)
      <h1>This is amazing</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "HEELO PARCEL ");
const heading2 = React.createElement("h2", {}, "NICE GOING ON");
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

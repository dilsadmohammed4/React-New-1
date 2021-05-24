//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
const name = "Dilsad Mohammed";
var d = new Date();
const date = d.getFullYear();
ReactDOM.render(
  <div>
    <h1>Hello Dilsad!</h1>
    <p>Created by {name}</p>
    <p>Copyright {date}.</p>
  </div>,
  document.getElementById("root")
);

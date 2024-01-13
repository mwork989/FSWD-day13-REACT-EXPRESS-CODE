import React from "react";
import ReactDOM from "react-dom/client";
import AppES6 from "./Components/Containers/AppES6/AppES6";
import AppClassComponent from "./Components/Containers/AppClass/AppClass";
import AppES5 from "./Components/Containers/AppES5/AppES5";
import App from "./Components/Containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <div>
    {/* <AppES6 name="maria" designation="tester"/>
    <AppES6 name="david"  designation="software developer"/>
    <AppES6 name="timothy" designation="technical architect"/> */}
    <App/>
  </div>
);

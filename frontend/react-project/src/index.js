import React from "react";
import ReactDOM from "react-dom/client";
import AppES6 from "./Components/Containers/AppES6/AppES6";
import AppClassComponent from "./Components/Containers/AppClass/AppClass";
import AppES5 from "./Components/Containers/AppES5/AppES5";
import App from "./Components/Containers/App";

import 'bootstrap/dist/css/bootstrap.min.css';
import CounterOne from "./Components/stateComponents/counterOne";
import CounterTwo from "./Components/stateComponents/counterTwo";
import CounterThree from "./Components/stateComponents/counterThree";
import Employee from "./Components/stateComponents/Employee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <div>
    {/* <AppES6 name="maria" designation="tester"/>
    <AppES6 name="david"  designation="software developer"/>
    <AppES6 name="timothy" designation="technical architect"/> */}
    {/* <App/> */}
    {/* state management examples */}
     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <CounterThree/> */}
     <Employee/>
  </div>
);

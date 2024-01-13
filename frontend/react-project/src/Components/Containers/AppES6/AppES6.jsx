import { useState } from "react";
import "./AppES6.css";

const AppES6 = (props) => {
   
  const [address,setAddress] = useState('bangalore')

  const { name, designation } = props;
  const nameStyle = { color: "green", fontSize: "20px" };
  const empComponentInStyle = {
    border: "1px solid blue",
    backgroundColor: "skyblue",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };

  const clickEvent = (event,name) => {
    console.log(event,name);
  };

  const changeAddress = ()=>{
    setAddress("Delhi")
  }

  return (
    <div className="containers-style">
      <h1
        style={{
          color: "blue",
          backgroundColor: "lightblue",
          border: "1px solid blue",
        }}
      >
        Welcome to react training from app functional component Es6 format
      </h1>
      <p style={nameStyle}>Name : {name}</p>
      <p style={nameStyle}>Designation : {designation}</p>
      <p>Address: {address}</p>
      {/* <button onClick={clickEvent}>Click Way1</button> */}
      <button onClick={(event) => clickEvent(event)}>Click Way2</button>
      <button onClick={(event) => changeAddress(event)}>chang Address</button>
    </div>
  );
};

export default AppES6;

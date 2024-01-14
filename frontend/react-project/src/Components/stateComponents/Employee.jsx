import { useState } from "react";

const emp = {
  name: "david",
  designation: "developer",
};

const Employee = () => {
  const [numbers, setNumbers] = useState([]);
  const [obj, setObj] = useState({ value1: "", value2: "" });
  const [employee, setEmployee] = useState(emp);

  const changeObj = (event, value) => {
    if (value === "value1") {
      setObj({ ...obj, value1: event.target.value });
    } else {
      setObj({ ...obj, value2: event.target.value });
    }
  };

  const updateEmployee = () => {
    setEmployee({ name: "davidsr", designation: "senior developer" });
  };

  const addNumberIntoArray = () => {
    console.log(numbers)
    setNumbers([...numbers,{
        id: numbers.length,
        value: Math.floor(Math.random() * 10) + 1
      }]);
  };

  return (
    <>
      <h1>Employee Component</h1>
      <form>
        <input
          type="text"
          placeholder="value1"
          value={obj.value1}
          onChange={(event) => changeObj(event, "value1")}
        />
        <input
          type="text"
          placeholder="value2"
          value={obj.value2}
          onChange={(event) => changeObj(event)}
        />
      </form>
      <p>obj value1: {obj.value1}</p>
      <p>obj value2: {obj.value2}</p>

      <hr />
      <p>Name:{employee.name}</p>
      <p>Desingation:{employee.designation}</p>
      <button onClick={updateEmployee}>Update Employee</button>
      <hr />
      <button onClick={addNumberIntoArray}>add a number field</button>
      <ul>
        {numbers.map(numberObj => (
          <li key={numberObj.id}>{numberObj.value}</li>
        ))}
      </ul>
    </>
  );
};

export default Employee;


import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

const [foodLists,setFoodList] = useState([])

useEffect(()=>{
  // asking the data from node-express-server  from http://localhost:3000
   fetch('http://localhost:4002/food-details').then(response => response.json()).then(data => setFoodList(data))

},[])


  return (
    <div>
         <h1>Food List</h1>
          <div>
            {
              foodLists && foodLists.map((food,index)=>(
                  <ul >
                     <li>{food.name}</li>
                     <li>{food.name}</li>
                     <li>{food.price}</li>
               
                  </ul>
              ))
            }
          </div>
    </div>
  );
}

export default App;

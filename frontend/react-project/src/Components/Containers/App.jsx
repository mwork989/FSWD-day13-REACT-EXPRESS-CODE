

import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Layout from '../Layout/Layout';
import AppES6 from './AppES6/AppES6';
import FoodApp from '../FoodApp/FoodApp';


const App = () => {

    const Router = createBrowserRouter(
        createRoutesFromElements(
            //rooute definitions 
            <Route  path="/" element ={<Layout/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/es6app" element={<AppES6/>}></Route>
                <Route path="/foodapp" element={<FoodApp/>}></Route>
            </Route>
          
        )
    )

    return ( <div>
        <RouterProvider router={Router}></RouterProvider>
    </div>  );
}
 
export default App;
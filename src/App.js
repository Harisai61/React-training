import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navigation from './Navigation';
function App() {
  return (
  
   <BrowserRouter>
   <div>
    <Navigation /> 
   <Switch>
   <Route path = '/' component ={Home}  exact/>
   <Route path ='/About' component = {About}/>
   <Route path ='/Contact' component = {Contact}/> 
   <Route component ={Error} />
   </Switch>
  </div> 
   </BrowserRouter>
  );
}

export default App;

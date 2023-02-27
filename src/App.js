import React from "react";
import Todolist from "./component/todolist/Todolist";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hooks from "./component/Hooks/Hooks";

//optimised or reduced code for app
const App = () => {
  return (

      <Router>
          <Header />
          <Routes>
          <Route exact path="/" element = {<Todolist/>} />   
          <Route path="/about" element = {<About/>} /> 
          </Routes>
           <Hooks/>  
      </Router>

  );
};
export default App;

// import React, { Component } from 'react'
// import Todolist from './component/todolist/Todolist'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Todolist/>
//       </div>
//     )
//   }
// }

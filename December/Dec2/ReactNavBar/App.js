import Home from "./Dec2/Home"
import Page1 from "./Dec2/Page1"
import Page2 from "./Dec2/Page2"
import Page3 from "./Dec2/Page3"

import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Dec2/Nav"




function App() {
  return (
    <>

      <Router>

      <Nav/>

  

       <Switch>

        <Route  path="/page1" component={Page1} />

        <Route  path="/page2" component={Page2} />
        <Route  path="/page3" component={Page3} />

        <Route exact path="/" component={Home} />
         

       </Switch>
   

       <h2 style={{backgroundColor:'#ccc', color:'black', textAlign:'center'}}> Footer </h2>

      </Router>

    </>
  )
}

export default App
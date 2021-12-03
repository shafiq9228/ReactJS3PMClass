import Home from "./Dec3/Home"
import Page1 from "./Dec3/Page1"
import Page2 from "./Dec3/Page2"
import Page3 from "./Dec3/Page3"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Dec3/Nav";
import Error from "./Dec3/Error";
import Footer from "./Dec3/Footer";


function App() {

  return (
    <>

      <Router>

     <Nav/>



        <Switch>

            <Route path="/page1">
              <Page1/>
            </Route>
            <Route path="/page2">
              <Page2/>
            </Route>
            <Route path="/page3">
              <Page3/>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route >
              <Error/>
            </Route>

        </Switch>

<Footer/>

      </Router>

    </>
  )
}

export default App
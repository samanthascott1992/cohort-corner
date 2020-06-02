import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./pages/Links";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import library from "./client/public/images/library.png"
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";



function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div> loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
        <Router>
       <div>
         {/* <Nav /> */}
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route exact path="/links/">
             <Links />
           </Route>
           <Route exact path="/links/:id">
             <Detail />
           </Route>
           <Route>
             <NoMatch />
           </Route>
         </Switch>
       </div>
     </Router>
      </header>
    </div>
  );
}

export default App;
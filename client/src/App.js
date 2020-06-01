import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import library from "./client/public/images/library.png"
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
         <Nav />
         <Switch>
           <Route exact path={["/", "/books"]}>
             <Books />
           </Route>
           <Route exact path="/books/:id">
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




// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path={["/", "/books"]}>
//             <Books />
//           </Route>
//           <Route exact path="/books/:id">
//             <Detail />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

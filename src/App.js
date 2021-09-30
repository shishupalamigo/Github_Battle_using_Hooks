import React, { useState } from "react";
import { BrowserRouter, Route,  } from "react-router-dom";
import Header from "./components/Header";
import GitHubStars from "./components/GitHubStars";
import GithubBattle from "./components/GitHubBattle";
import Battle from "./components/Battle";

function App () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     darkMode: false
  //   }
  // }
  let [ darkMode, setDarkMode ] = useState(false);
  function toggleDarkMode () {
    // this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
    setDarkMode(!darkMode);
  } 

    return (
      <div className={darkMode ? "bg-gray-900 text-white min-h-screen": ""}>
      <BrowserRouter>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Route path="/" exact>
        <GitHubStars darkMode={darkMode}/>
      </Route>
      <Route path="/battle" exact>
        <GithubBattle  darkMode={darkMode}/>
      </Route>
      <Route path="/userbattle" >
        <Battle darkMode={darkMode} />
      </Route>
      </BrowserRouter>
      </div>
    );
  };

export default App;

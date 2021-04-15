import logo from './logo.svg';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import Start from './Start';
import Result from './Result';
import React, {useState} from 'react'

function App() {

  const [playerChoise, setPlayerChoise] = useState("")

  
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path to="/">
            <Start setPlayerChoise={setPlayerChoise}/>
          </Route>
          <Route path to="Result">
            <Result playerChoise={playerChoise}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

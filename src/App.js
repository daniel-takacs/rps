import logo from './logo.svg';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import Start from './components/Start';
import Result from './components/Result';
import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {

  const [playerChoise, setPlayerChoise] = useState("")
  const [score, setScore] = useState(0)
  
  return (
    <div className="App">
      <HashRouter>
        <Header score={score}/>
        <Switch>
          <Route exact path to="/">
            <Start setPlayerChoise={setPlayerChoise}/>
          </Route>
          <Route path to="Result">
            <Result playerChoise={playerChoise} score={score}setScore={setScore}/>
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

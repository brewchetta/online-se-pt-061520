import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import About from './About'
import ComicList from './ComicList'
import ComicView from './ComicView'
import NavBar from './NavBar'

import './App.css';

function App() {

  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/comics')
    .then(res => res.json())
    .then(setComics)
  }, [])

  return (
    <div className="App">

      <Router>

        <NavBar />

        <Route exact path="/" component={Welcome} />

        <Route exact path="/about" component={About} />

        <Route path="/comics" render={() => <ComicList comics={comics} />} />

        <Route exact path="/comics/:title" render={routerProps => <ComicView comics={comics} {...routerProps} />} />

      </Router>


    </div>
  );
}

export default App;

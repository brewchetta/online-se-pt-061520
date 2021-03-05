import { useEffect, useState } from 'react'
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

      <NavBar />

      <Welcome />

    </div>
  );
}

export default App;

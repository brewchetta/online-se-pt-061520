import './App.css';
import OurFirstComponent from './OurFirstComponent'
import OurFirstFunctionalComponent from './OurFirstFunctionalComponent'

function App() {

  return (
    <div className="App">

      <h1>Welcome to our new app!</h1>

      <p>Some description of your app!</p>

      <OurFirstComponent message="Hey I'm a prop" />

      <OurFirstFunctionalComponent message="Hey I'm a prop from a functional component!" />

    </div>
  );

}

export default App;

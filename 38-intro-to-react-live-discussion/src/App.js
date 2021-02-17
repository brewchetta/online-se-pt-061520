import GratitudeListItem from './GratitudeListItem.js'
import './App.css';

function App() {

  const foods = ["pizza", "pasta", "burgers", "sandwiches", "fries", "salads"]

  const renderFoods = () => foods.map(food => <GratitudeListItem item={food} /> )

  return (
    <div className="App">

      <h1>Gratitude List</h1>

      {renderFoods()}

    </div>
  );
}

export default App;

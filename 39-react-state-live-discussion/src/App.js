import { useState } from "react"
import GratitudeListItem from './GratitudeListItem.js'
import './App.css';

function App() {

  const [foods, setFoods] = useState(["pizza", "pasta", "burgers", "sandwiches", "fries", "salads", "ice cream"])

  const [darkModeOn, setDarkModeOn] = useState(false)

  const handleClick = () => {
    setDarkModeOn(!darkModeOn)
  }

  const removeItem = foodName => {
    console.log(foodName);
    setFoods(foods.filter(f => f !== foodName))
  }

  const renderFoods = () => foods.map(food => <GratitudeListItem key={food} item={food} removeItem={removeItem} /> )

  return (
    <div className="App" style={darkModeOn ? {backgroundColor: 'black', color: "white"} : null}>

      <button onClick={handleClick}>Dark Mode</button>

      <h1>Gratitude List</h1>

      {renderFoods()}

    </div>
  );
}

export default App;

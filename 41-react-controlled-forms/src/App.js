import CalculatorForm from "./CalculatorForm"
import RobotImg from './assets/calcutron.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Calcutron T-1000</h1>

      <CalculatorForm />

      <img id="robot-img" src={RobotImg} alt={"Calculating the future"} />

    </div>
  );
}

export default App;

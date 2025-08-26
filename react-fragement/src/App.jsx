import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodList from "./components/FoodList"
import Container from './components/Container';

const App = () => {
  // map which will store name of healthy foods
  let healthyFoods = ["bhat", "dal", "soya", "chicken", "panner", "tofu", "fish"];

  return (
    <Container>
      <h1 className='my-h1'>Healthy Foods</h1>

      {/* Here, i am passing props from parent to child. */}
      <FoodList healthyFoods={healthyFoods} />
    </Container>
  );
};

export default App;

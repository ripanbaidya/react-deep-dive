import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalRendering from "./ConditionalRendering"
import BackendFrameworks from "./BackendFrameworks"

const App = () => {
  // map which will store name of some popular backend frameworks
  let backendFrameworks = ["Node.js", "Django", "Spring Boot", "Ruby on Rails", "Flask"];

  return (
    <>
      {/* <ConditionalRendering /> */}
      <h1 className='my-h1'>Backend Frameworks</h1>

      {/* Here, i am passing props from parent to child. */}
      <BackendFrameworks frameworks ={backendFrameworks}/>
    </>
  );
};

export default App;

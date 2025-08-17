import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Navbar } from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* Import the navigation bar*/}
      <Navbar/>

      <h1 className='text-center bold'>VIEW USERS FROM HERE</h1>
      {/*Adding Home page to see the users */}
      <Home/>
    </div>
  );
}

export default App;

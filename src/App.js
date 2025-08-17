import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Navbar } from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      {/* Import the navigation bar*/}
      <Navbar/>

      <h1 className='text-center'>Create CRUD application</h1>
    </div>
  );
}

export default App;

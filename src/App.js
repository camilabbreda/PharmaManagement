// import logo from './logo.svg';
// import './App.css';
// import Menu from './Components/Menu';
// import Login from './Pages/Login';
// import NewMedicine from "./Pages/NewMedicine";
// import Map from "./Pages/Map"
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu";
import Rotas from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      
      <Rotas />
    </BrowserRouter>
  );
}

export default App;

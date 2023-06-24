import Navbar from "../src/components/layout/navigationbar"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./components/page/home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

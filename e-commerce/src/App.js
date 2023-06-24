import Navbar from "../src/components/layout/navigationbar"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./components/page/home"
import ProductCatalog from "./pages/productcatalog"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="productcatalog" element={<ProductCatalog/>} ></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

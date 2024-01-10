import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/product' exact element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
import {HashRouter, Routes, Route} from "react-router-dom"
// import ApiHome from "./ApiHome";
import ApiProducts from "./ApiProducts";
import ApiProductsDetails from "./ApiProductsDetails";
import ApiHomeX from "./ApiHomeX";

function App() {
  return (
    <div className="App" >
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<ApiProducts></ApiProducts>}></Route>
          <Route path="/ApiProducts" element={<ApiProducts></ApiProducts>}></Route>
          <Route path="/ApiProductsDetails/:id" element={<ApiProductsDetails></ApiProductsDetails>}></Route>
          <Route path="*" element={<ApiHomeX></ApiHomeX>}></Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;

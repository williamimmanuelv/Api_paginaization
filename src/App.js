import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ApiHome from "./ApiHome";
import ApiProducts from "./ApiProducts";
import ApiProductsDetails from "./ApiProductsDetails";
import ApiHomeX from "./ApiHomeX";

function App() {
  return (
    <div className="App" >      
      
      <Router>
        <Routes>
          <Route path="/" element={<ApiHome></ApiHome>}></Route>
          <Route path="/ApiProducts" element={<ApiProducts></ApiProducts>}></Route>
          <Route path="/ApiProductsDetails/:id" element={<ApiProductsDetails></ApiProductsDetails>}></Route>
          <Route path="*" element={<ApiHomeX></ApiHomeX>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

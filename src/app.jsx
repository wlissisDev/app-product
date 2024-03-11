import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/productsPage";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductsPage/>}/>
    </Routes>
  )
}


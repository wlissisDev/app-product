import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/productsPage";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { PrivateRoute } from "./util/privateRoute";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/adicionar" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}


import {
  Route,
  BrowserRouter as Router,
  Routes
}
  from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalogo } from "./pages/Catalogo";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalogo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
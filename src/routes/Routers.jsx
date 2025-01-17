import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AllFoods } from "../pages/AllFoods";
import { Cart } from "../pages/Cart";
import { Contact } from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default Routers;

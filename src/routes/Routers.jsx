import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AllFoods } from "../pages/AllFoods";
import { FoodDetails } from "../pages/FoodDetails";
import { Cart } from "../pages/Cart";
import { Contact } from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default Routers;

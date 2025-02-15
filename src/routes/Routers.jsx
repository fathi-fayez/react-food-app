import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AllFoods } from "../pages/AllFoods";
import { FoodDetails } from "../pages/FoodDetails";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default Routers;

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Routers from "../../routes/Routers";
import { Carts } from "../UI/cart/Carts";
import { useSelector } from "react-redux";

export const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

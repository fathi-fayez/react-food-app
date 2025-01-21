import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
// React Icons
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { NavLink, Link } from "react-router-dom";

import "../../../src/styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }

      return () => window.removeEventListener("scroll");
    });
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <h5>Tasty Treat</h5>
          </div>

          {/* ===== menu ===== */}
          <div className='navigation ' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5'>
              {nav__links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {link.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ===== nav right icons ===== */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon' onClick={toggleCart}>
              <CiShoppingBasket />
              <span className='cart__count'>{totalQuantity}</span>
            </span>

            <span className='user__icon'>
              <Link to='/login'>
                <FaRegUser />
              </Link>
            </span>

            <span className='mobile__menu__icon' onClick={toggleMenu}>
              <AiOutlineMenu />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

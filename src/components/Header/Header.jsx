import { useRef } from "react";
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
    path: "/home",
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
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className='header'>
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
            <span className='cart__icon'>
              <CiShoppingBasket />
              <span className='cart__count'>2</span>
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

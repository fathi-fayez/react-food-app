// import products from "../assets/fake-data/products";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart-page.css";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {cartItems.length === 0 ? (
                <h5 className='text-center'>Cart is empty</h5>
              ) : (
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <Tr key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className='cart__total mt-5'>
                <h6>
                  Subtotal: $<span>{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className='cart__btns'>
                  <button className='addToCard__btn me-4'>
                    <Link to='/foods'>Continue Shopping</Link>
                  </button>
                  <button className='addToCard__btn'>
                    <Link to='/checkout'>Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

import PropTypes from "prop-types";

const Tr = (props) => {
  const { image01, title, price, quantity, id } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className='text-center cart__img-box '>
        <img src={image01} alt='cart-image' />
      </td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}</td>
      <td className='text-center cart__item-del' onClick={deleteItem}>
        <RiDeleteBin5Line />
      </td>
    </tr>
  );
};

Tr.propTypes = {
  item: PropTypes.shape({
    image01: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

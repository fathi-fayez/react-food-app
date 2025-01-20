import { ListGroupItem } from "reactstrap";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import PropTypes from "prop-types";

export const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  CartItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image01: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }).isRequired,
  };

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className='border-0 cart__item'>
      <div className='cart__item-info d-flex gap-2'>
        <img src={image01} alt='product-img' />
        <div className='cart__product-info d-flex align-items-center justify-content-between gap-4 w-100'>
          <div>
            <h6 className='cart__product-title'>{title}</h6>
            <p className='cart__product-price d-flex align-items-center gap-5'>
              {quantity} x <span>${totalPrice}</span>
            </p>

            <div className='increase__decrease-btn d-flex align-items-center justify-content-between'>
              <span className='increase__btn' onClick={incrementItem}>
                <FaPlus />
              </span>

              <span className='quantity'>{quantity}</span>

              <span className='decrease__btn' onClick={decreaseItem}>
                <RiSubtractFill />
              </span>
            </div>
          </div>

          <span className='delete__btn' onClick={deleteItem}>
            <IoMdClose />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

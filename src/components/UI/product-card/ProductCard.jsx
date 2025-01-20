import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

export const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className='product__item'>
      <div className='product__img'>
        <img src={image01} alt='product__img' className='w-50' />
      </div>
      <div className='product__content'>
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='product__price'>${price}</span>
          <button className='addToCard__btn' onClick={addToCart}>
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image01: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

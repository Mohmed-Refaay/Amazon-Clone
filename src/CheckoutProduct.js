import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ title, img, rate, price, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={img} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rate)
            .fill()
            .map((_) => (
              <StarRateIcon />
            ))}
        </div>

        <button onClick={removeItem} className="checkoutProduct__btn">
          Remove From The Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

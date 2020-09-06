import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer'
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="totalprice">
              Total Price ({basket.length} items): {value}
            </p>
            <div className="giftcontainer">
                <input type="checkbox" />
                <p>This order contain a gift</p>
            </div>
            <button className="subtotal__btn">Proceed to Checkout</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal;

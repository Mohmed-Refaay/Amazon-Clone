import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider'
function Product({title, price, rate, img, id}) {
    const [_, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title,
                price,
                rate,
                img,
                id
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <span className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </span>
                <div className="product__rate">{ 
                    Array(rate).fill().map((_) => <StarRateIcon />)
                }</div>
            </div>
            <img className="product__img" src={img} alt="" />
            <button onClick={addToBasket} className="product__btn">Add To Your Cart</button>
        </div>
    )
}

export default Product

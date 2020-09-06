import React from 'react'
import {useStateValue} from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'



function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                
             <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._Cb423492668_.jpg" alt="2" />
        
             {basket?.length === 0 ? (
                    <div>
                        <h2 style={{margin: '10px 0'}}>Your Shopping Basket is empty </h2>
                        <p >You have no items in your basket. To buy one or more items, click "Add to Basket" blow the product you want</p>
                    </div>
                ) : (
                    <div>
                        <h2 style={{margin: '10px'}}>Your Shopping Basket</h2>
                        <hr style={{width: '70%'}}></hr>
                        {basket?.map(item => (
                            <CheckoutProduct 
                                title={item.title}
                                img={item.img}
                                rate={item.rate}
                                price={item.price}
                                id={item.id}
                            
                            />
                        ))}
                        
                    </div>
                ) }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
        
    )
}

export default Checkout

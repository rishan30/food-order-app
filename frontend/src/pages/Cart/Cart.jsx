import React, { useContext } from 'react';

import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>LKR {item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>LKR {item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='remove'> Remove</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null; // Added this to fix the warning
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>LKR {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>LKR {getTotalCartAmount() === 0 ? 0 : 250}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>LKR {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 250}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')} >PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promocode' />
                            <button>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

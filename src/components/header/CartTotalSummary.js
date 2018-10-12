import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import '../../style/ecommerce/pages/style-shop.css'

class CartTotalSummary extends Component {
    render() {
        return (
            <div className="top-cart-block shopping-cart" style={{paddingBottom: "16px"}}>
                <div className="top-cart-info">
                    <a href="#"
                       className="top-cart-info-count cart-qty"
                       data-value="">0 items</a>
                    <a href="#"
                       className="top-cart-info-value cart-total"
                       data-value="">
                        CDN$43
                    </a>
                </div>
                <FontAwesomeIcon icon={faShoppingCart} size={'lg'} style={{height: '2rem', width: '2.125rem'}}/>

                <div className="top-cart-content-wrapper">
                    <div className="top-cart-content" style={{
                        width: '480px'
                    }}>
                        <ul className="scroller">
                            <div id="cartItem">
                                </div>
                        </ul>

                        <div className="text-right">
                            <a href="#"
                               className="btn btn-primary">View Cart</a>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default CartTotalSummary
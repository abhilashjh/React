import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class ProductSearch extends Component {
    render() {
        return (
            <div className="col-md-2 col-xs-12 additional-nav">
                <div className="form-group-product-search">
                    <div className={"input-group"} style={{flexWrap: 'noWrap'}}>
                        <input type="text" name="product_search" id="product_search"
                               placeholder="Product Search"
                               className="form-control-product-search input-circle-left"/>
                        <span className={" input-group-text input-group-append input-circle-right"} id="btnSearch"
                              style={{backgroundColor: '#FFFFFF !important',  cursor:'pointer', lineHeight:'1', fontSize: '0.9rem'}}>
                    <a href="javascript: void(0)">
                        <FontAwesomeIcon icon={faSearch} size={'xs'}/>
                    </a>
                </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSearch
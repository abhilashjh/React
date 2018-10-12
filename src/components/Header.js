import React, {Component} from 'react';
import CartTotalSummary from './header/CartTotalSummary'
import CategoryList from './header/CategoryList'
import NavigationList from './header/NavigationList'
import ProductSearch from './header/ProductSearch'
import StoreLogo from './header/StoreLogo'
import UserInfo from './header/UserInfo'

class Header extends Component {
    render() {
        return (
            <div>
                <div className={'pre-header'}>
                    <div className={'container'} style={{color: '#616b76', lineHeight: '1.2'}}>
                        <div className={'row'}>
                            <UserInfo/>
                            <NavigationList/>
                            <ProductSearch/>
                        </div>
                    </div>
                </div>
                <div className={'header'} style={{borderRadius: '0', minHeight: '100px'}}>
                    <div className={'container'}>
                            <StoreLogo/>
                            <CategoryList/>
                            <CartTotalSummary/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header
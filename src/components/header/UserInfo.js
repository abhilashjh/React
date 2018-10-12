import React, {Component} from 'react';

class UserInfo extends Component{
    render(){
        return(
            <div style={{display: 'inline-block'}} className={'additional-shop-info col-md-2 col-sm-2 col-xs-12'}>
                <ul className={'list-unstyled list-inline'}>
                    <li>Welcome Guest</li>
                </ul>
            </div>
        );
    }
}

export default UserInfo
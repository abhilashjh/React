import React, {Component} from 'react';
import NavigationItem from './NavigationItem'

class NavigationList extends Component {
    render() {
        return (
            <div className="col-md-8 col-sm-8 col-xs-12">
                <ul className="list-unstyled list-inline float-right margin-top-1">
                    <li style={{display:'inline-block'}}><a href="#">Home</a></li>


                    <li style={{display:'inline-block'}}><a href="#">
                        Contact Us
                    </a></li>


                    <li style={{display:'inline-block'}}><a href="#">
                        Information
                    </a></li>


                    <li style={{display:'inline-block'}}><a href="#">
                        Co-Brand Info
                    </a></li>


                    <li style={{display:'inline-block'}}><a href="#">My Account</a></li>
                    <li style={{display:'inline-block'}}><a href="#">Logout</a></li>

                </ul>
            </div>
        );
    }
}

export default NavigationList
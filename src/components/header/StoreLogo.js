import React, {Component} from 'react';

class StoreLogo extends Component {
    render() {
        return (
            <div className={'site-logo'}>
                <img src={"https://s3.amazonaws.com/com-arrow-production/8080dda9-0e62-4f44-9c44-50286b857548.jpeg"}
                     alt={"Store-Logo"} style={{maxWidth: '150px', maxHeight: '70px'}}/>
            </div>
        );
    }
}

export default StoreLogo
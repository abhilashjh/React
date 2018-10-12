import React, {Component} from 'react';
import '../style/App.css';
import PageHeader from './Header'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../style/style.css'
import '../style/theme/custom.css'

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader />
            </div>
        );
    }
}

export default App;

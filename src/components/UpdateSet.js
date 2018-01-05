import React, { Component } from 'react';

import FileNav from './FileNav';

class UpdateSet extends Component {
    render() {
        return (
            <li>
                {this.props.data.name}
                <FileNav></FileNav>
            </li>
        );
    }
}

export default UpdateSet;
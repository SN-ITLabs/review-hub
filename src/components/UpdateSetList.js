import React, { Component } from 'react';

import UpdateSet from './UpdateSet';

class UpdateSetList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.updateSetListData.map(updateSet =>
                        <UpdateSet data={updateSet} key={updateSet.name}></UpdateSet>
                    )}
                </ul>
            </div>

        );
    }
}

export default UpdateSetList;
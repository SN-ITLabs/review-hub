import React from 'react';
import UpdateSetList from './UpdateSetList';

class UpdateSetListContainer extends React.Component {
    constructor() {
        super()
        this.state = { updateSetListData: [{ name: 'abc' }, { name: 'pqk' }, { name: 'xyz' }] }
    }

    // componentDidMount() {
    //     fetch({
    //         url: "/update-sets.json",
    //         dataType: 'json',
    //         success: updateSetListData => this.setState({ updateSetListData: updateSetListData })
    //     })
    // }

    render() {
        return <UpdateSetList updateSetListData={this.state.updateSetListData} />
    }
}

export default UpdateSetListContainer;
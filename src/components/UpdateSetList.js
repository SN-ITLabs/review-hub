import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import UpdateSet from './UpdateSet';

export default class UpdateSetList extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        open: false,
      };
    }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: !item.state.open,
    });
  };

  render() {
    return (
      <div>
        <br />
          <List>
            <Subheader>All Update Sets (Change the updateSetList in mainContainer to modify the below list data)</Subheader>
            {this.props.updateSets.map(updateSetData =>
                <UpdateSet updateSet={updateSetData} key={updateSetData.sys_id} />
            )}
          </List>
      </div>
    );
  }
}






/*import React, { Component } from 'react';

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

export default UpdateSetList;*/
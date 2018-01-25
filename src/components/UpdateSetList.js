import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import UpdateSet from './UpdateSet';

export default class UpdateSetList extends React.Component {

    constructor(props){
      super(props);
      this.state={
        profiles : []
       }
    }

    handleUpdateSetProfiles(profiles){
        this.props.profileHandler(profiles);
    }


  render() {
    return (
      <div>
        <br />
          <List>
            <Subheader>All Update Sets (Change the updateSetList in fetch all updatesets action to modify the below list data)</Subheader>
            {this.props.updateSets.map(updateSetData =>
                <UpdateSet updateSet={updateSetData} 
                key={updateSetData.sys_id} 
                profileHandler={this.handleUpdateSetProfiles.bind(this)}
                />
            )}
          </List>
      </div>
    );
  }
}
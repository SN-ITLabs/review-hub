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

    hanleReviewers(reviewers){
       this.props.reviewHandler(reviewers);
    }

  render() {
    return (
      <div>
        <br />
          <List>
            <Subheader>All Change Sets</Subheader>
            {Object.keys(this.props.changeSets).map(name =>
              <UpdateSet changeSetName = {name} 
              changeSet={this.props.changeSets[name]} 
              profileHandler={this.handleUpdateSetProfiles.bind(this)}
              revieweHandler={this.hanleReviewers.bind(this)}
              />
            )}

          </List>
      </div>
    );
  }
}
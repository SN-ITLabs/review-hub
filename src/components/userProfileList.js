import React from 'react';

import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import UserProfile from './UserProfile';

export default class UserProfileList extends React.Component{
    
    constructor(props){
        super(props);
        // keep the initization code here
    }

    render(){
        return(
            <List>
            <Subheader>Reviewer Details</Subheader>
            {/* {this.props.userProfiles.map(userProfile =>
                <UserProfile profile={userProfile} key={userProfile.sys_id} />
            )} */}

                {/* {Object.keys(this.props.reviews).map(reviewer => */}
                     <UserProfile review={this.props.reviews}  />
                {/* )} */}

          </List>
        );
    }
}
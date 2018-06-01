import React from 'react';

import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import UserProfile from '../containers/UserProfileContainer';

export default class RightBar extends React.Component{
    
    render(){
    
        return(
            <List>
            <Subheader>Reviewer Details</Subheader>
                {/* {this.props.userProfiles.map(userProfile =>
                    <UserProfile profile={userProfile} key={userProfile.sys_id} />
                )} */}

                {/* {Object.keys(this.props.reviews).map(reviewer => */}
                     <UserProfile />
                {/* )} */}

          </List>
        );
    }
}
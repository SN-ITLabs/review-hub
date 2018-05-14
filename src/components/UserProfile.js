import React from 'react';

import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

export default class UserProfile extends React.Component{
    
    constructor(props){
        super(props);
        // keep the initization code here
    }

    render(){
        return(
            <ListItem 
            // primaryText={this.props.review['changed_by']} 
            primaryText={this.props.reviewers ? this.props.reviewers.changed_by : null} 
            leftIcon={<AccountCircle />}  
            primaryTogglesNestedList={true}
            secondaryText={this.props.reviewers ? this.props.reviewers.reviewer : null}
            />
        );
    }
}

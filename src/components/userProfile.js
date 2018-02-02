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
            // <ListItem 
            // primaryText={this.props.profile.name} 
            // leftIcon={<AccountCircle />}  
            // secondaryText={this.props.profile.description}
            // primaryTogglesNestedList={true}
            // />

            <ListItem 
            primaryText={this.props.review['changed_by']} 
            leftIcon={<AccountCircle />}  
            primaryTogglesNestedList={true}
            secondaryText={this.props.review['sys_updated_by']}
            />

        );
    }
}
import React from 'react';

import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import File from './file';

export default class UpdateSet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // make sure you are maintaing the state properly
        }
    }

    render(){
        return(
            <ListItem 
            primaryText={this.props.updateSet.name} 
            leftIcon={<AccountCircle />}  
            secondaryText={this.props.updateSet.description}
            primaryTogglesNestedList={true}
            nestedItems={
                this.props.updateSet.files.map(fileData =>
                    <File file={fileData} key={fileData.sys_id} />
                )
            }
            />
        );
    }
}










/*import React, { Component } from 'react';

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

export default UpdateSet;*/
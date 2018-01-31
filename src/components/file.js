import React from 'react';

import {ListItem} from 'material-ui/List';
import Book from 'material-ui/svg-icons/action/book'

export default class File extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            profiles : []
        }
    }
    
    handleUpdateSetProfiles(){
       // this.setState = {
         //   profiles : this.props.file.userProfiles
     //   }
       
        this.props.profileHandler(this.props.file.userProfiles);
    }
    render(){
        return(
        //     <ListItem
        //     key={this.props.file.sys_id}
        //     primaryText={this.props.file.name}
        //     leftIcon={<Book />}  
        //     secondaryText={this.props.file.description}
        //     onClick={this.handleUpdateSetProfiles.bind(this)}
        //     className ="fileItem"
        //   />

        <ListItem
            primaryText={this.props.file.record_name}
            leftIcon={<Book />}  
            secondaryText={this.props.file.sys_updated_by}
            onClick={this.handleUpdateSetProfiles.bind(this)}
            className ="fileItem"
          />

        );
    }

}
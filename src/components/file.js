import React from 'react';

import {ListItem} from 'material-ui/List';
import Book from 'material-ui/svg-icons/action/book'

export default class File extends React.Component{
   
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <ListItem
            key={this.props.file.sys_id}
            primaryText={this.props.file.name}
            leftIcon={<Book />}  
            secondaryText={this.props.file.description}
            className ="fileItem"
          />
        );
    }

}
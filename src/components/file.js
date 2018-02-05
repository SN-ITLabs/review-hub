import React from 'react';

import {ListItem} from 'material-ui/List';
import Book from 'material-ui/svg-icons/action/book'

import Differ from './DifferCom';

export default class File extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            showDiffer : false       
        }
    }
    
    handleUpdateSetProfiles(){
       // this.setState = {
         //   profiles : this.props.file.userProfiles
     //   }
        var fileUser = this.props.file;
        var reviewUser = {};
        reviewUser["changed_by"] = fileUser["changed_by"];
        reviewUser["sys_updated_by"] = fileUser["sys_updated_by"];

        this.props.profileHandler(reviewUser);
    }

    handleReview(e){
       // e.preventDefault();
       this.setState({
        showDiffer : !this.state.showDiffer
       });
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
         <div className="file-content">
            <ListItem
                primaryText={this.props.file.record_name}
                leftIcon={<Book />}  
                secondaryText={this.props.file.sys_updated_by}
                onClick={this.handleUpdateSetProfiles.bind(this)}
                rightIconButton = {
                    <div className="review-buttons">
                        <button type='button' className='btn btn-primary btn-sm' onClick={this.handleReview.bind(this)}>Show Diff</button>&nbsp;
                    </div>
                }
                className ="fileItem"
            />

            { this.state.showDiffer ? <Differ className="differ" /> : null}

         </div>
        );
    }

}
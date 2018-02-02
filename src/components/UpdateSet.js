import React from 'react';

import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import File from './File';

const nestedStyle = {
    style : {paddingLeft:'50px'}
}

export default class UpdateSet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            profiles : []
           }
    }

    handleUpdateSetProfiles(profiles){
        this.props.profileHandler(profiles);
    }
    
    handleReviewers(){
       var changeSet = this.props.changeSet;
       
       var reviewer = {};
       reviewer["changed_by"] = changeSet["changed_by"];
       reviewer["sys_updated_by"] = changeSet["sys_updated_by"];
       
       this.props.revieweHandler(reviewer);
    }

    render(){
        return(
            // <ListItem 
            // primaryText={this.props.updateSet.name} 
            // leftIcon={<AccountCircle />}  
            // secondaryText={this.props.updateSet.description}
            // primaryTogglesNestedList={true}
            // nestedListStyle = {nestedStyle.style}
            // nestedItems={
            //     this.props.updateSet.files.map(fileData =>
            //         <File file={fileData} key={fileData.sys_id} profileHandler={this.handleUpdateSetProfiles.bind(this)}/>
            //     )
            // }
            // />
           
            <ListItem 
            primaryText={this.props.changeSetName} 
            leftIcon={<AccountCircle />}  
            primaryTogglesNestedList={true}
            nestedListStyle = {nestedStyle.style}
            nestedItems={
                this.props.changeSet.files.map(fileData =>
                    <File file={fileData} profileHandler={this.handleUpdateSetProfiles.bind(this)}/>
                )
            }
            onClick={this.handleReviewers.bind(this)}
            />


        );
    }
}

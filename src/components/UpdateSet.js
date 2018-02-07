import React from 'react';
import { connect } from "react-redux";


import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import {changesetReviewSuccess,changesetReviewReject} from '../actions/ReviewActions';

import File from './File';

const nestedStyle = {
    style : {paddingLeft:'50px'}
}

class UpdateSet extends React.Component{
    constructor(props){
        super(props);
        //this.state={}
    }

    handleUpdateSetProfiles(profiles){
        this.props.profileHandler(profiles);
    }
    
    handleReviewers(){
       var changeSet = this.props.changeSet;
       
       var reviewer = {};
       reviewer["changed_by"] = changeSet["created_by"];
       reviewer["sys_updated_by"] = changeSet["reviewer"];
       
       this.props.revieweHandler(reviewer);
    }

    handleReviewSuccess(){
        this.props.dispatch(changesetReviewSuccess(this.props.changeSetName));
    }

    handleReject(){
        this.props.dispatch(changesetReviewReject(this.props.changeSetName));
    }

    render(){
        return(
            <ListItem 
            primaryText={this.props.changeSetName} 
            leftIcon={<AccountCircle />}  
            primaryTogglesNestedList={true}
            nestedListStyle = {nestedStyle.style}
            nestedItems={
                this.props.changeSet.files.map((fileData, index) =>
                    <File file={fileData} profileHandler={this.handleUpdateSetProfiles.bind(this)} key={fileData.change_id} changeName={this.props.changeSetName + "_" + index}/>
                )
            }
            secondaryText={this.props.changeSet.instance}
            onClick={this.handleReviewers.bind(this)}
            rightIconButton = {
                <div className="review-buttons-updateset">
                    <button type='button' className='btn btn-success btn-sm' onClick={this.handleReviewSuccess.bind(this)}>Accept</button>&nbsp;
                    <button type='button' className='btn btn-danger btn-sm' onClick={this.handleReject.bind(this)}>Reject</button>
                </div>
            }
            />
        );
    }
}

const stateMap = state => {
    return {
        
    };
};
export default connect(stateMap)(UpdateSet);

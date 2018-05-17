import React from 'react';

import AcceptIcon from 'material-ui/svg-icons/action/done'
import RejectIcon from 'material-ui/svg-icons/content/clear'

import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import File from '../containers/FileContainer';

const nestedStyle = {
    style : {paddingLeft:'50px'}
}

class UpdateSet extends React.Component{
   
    handleChangesetReviewSuccess(e){
        e.stopPropagation();
       // this.props.changesetReviewSuccess(this.props.changeSetName);
    }

    handleChangeSetReject(e){
        e.stopPropagation();
       // this.props.changeSetReject(this.props.changeSetName);
    }

    handleUpdateSetReviewers(){
        var updateSetReviewer = {};
        updateSetReviewer.reviewer = this.props.changeSet.reviewer;
        updateSetReviewer.changed_by = this.props.changeSet.changed_by;

        this.props.updateSetReviewers(updateSetReviewer);
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
                    <File file={fileData} key={fileData.change_id} changeName={this.props.changeSetName + "_" + index}
                    />
                )
            }
            secondaryText={ 
                <React.Fragment>
                    <br></br>
                    {this.props.changeSet.instance} 
                    <AcceptIcon className="accept-button" onClick={this.handleChangesetReviewSuccess.bind(this)}/>&nbsp;
                    <RejectIcon className="reject-button" onClick={this.handleChangeSetReject.bind(this)}/>
                </React.Fragment>
            }
             onClick={this.handleUpdateSetReviewers.bind(this)}
            // rightIconButton = {
            //     <div className="review-buttons-updateset">
            //         <button type='button' className='btn btn-success btn-sm' onClick={this.handleReviewSuccess.bind(this)}>Accept</button>&nbsp;
            //         <button type='button' className='btn btn-danger btn-sm' onClick={this.handleReject.bind(this)}>Reject</button>
            //     </div>
            // }
            />
        );
    }
}

export default UpdateSet;
import React from 'react';
import { connect } from "react-redux";


import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import {changesetReviewSuccess,changesetReviewReject} from '../actions/ReviewActions';

import File from '../containers/FileContainer';

const nestedStyle = {
    style : {paddingLeft:'50px'}
}

class UpdateSet extends React.Component{
   
    handleReviewSuccess(e){
        e.stopPropagation();
        console.log(e.target);
       // this.props.dispatch(changesetReviewSuccess(this.props.changeSetName));
    }

    handleReject(e){
        e.stopPropagation();
        console.log(e.target);
        //this.props.dispatch(changesetReviewReject(this.props.changeSetName));
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
            secondaryText={ this.props.changeSet.instance
                // <React.Fragment>
                // <p> {this.props.changeSet.instance} </p>
                // </React.Fragment>
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

// const stateMap = state => {
//     return {
        
//     };
// };
// export default connect(stateMap)(UpdateSet);

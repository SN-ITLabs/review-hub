import React from 'react';

import {ListItem} from 'material-ui/List';
import Book from 'material-ui/svg-icons/action/book'
import AcceptIcon from 'material-ui/svg-icons/action/done'
import RejectIcon from 'material-ui/svg-icons/content/clear'

class File extends React.Component{
   
    handleReview(e){
       //this.props.dispatch(this.props.showDiffer);
       this.props.differHandler(this.props.showDiffer);
    }

    handleFileReviewers(){
        var fileReviewer = {};
        fileReviewer.changed_by = this.props.file.developer;
        fileReviewer.reviewer = this.props.file.reviewer;

        this.props.fileReviewers(fileReviewer);
        this.props.dispatch(this.props.file.change_id,this.props.file.fileid);
    }

    handleReviewSuccess(e){
        e.stopPropagation();
        //console.log(e.target);
        this.props.changesetReviewSuccess('',this.props.file.change_id);
    }

    handleReject(e){
        e.stopPropagation();
       // console.log(e.target);
        this.props.changeSetReject('',this.props.file.change_id);
    }


    render(){
        return(
         <div className="file-content">
            <ListItem
                primaryText={this.props.file.file_name}
                 leftIcon={<Book />}  
                secondaryText={
                     <React.Fragment>
                         <br></br>
                        {this.props.file.type}&nbsp;&nbsp;
                        <AcceptIcon className="accept-button" onClick={this.handleReviewSuccess.bind(this)}/>&nbsp;
                        <RejectIcon className="reject-button" onClick={this.handleReject.bind(this)}/>
                    </React.Fragment>
                
                }
                // rightIconButton = {
                    
                //      <div className="review-buttons-updateset">
                //         <AcceptIcon onClick={this.handleReviewSuccess.bind(this)}/>&nbsp;
                //         <RejectIcon onClick={this.handleReject.bind(this)}/>
                //     </div> 
                // }
                className ="fileItem"
                onClick={this.handleFileReviewers.bind(this)}
            />

            {/* { this.state.showDiffer ? <Differ className="differ" change={this.props.changeName}/> : null} */}

         </div>
        );
    }
}

export default File;
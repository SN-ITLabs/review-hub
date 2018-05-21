import React from 'react';
import {List} from 'material-ui/List'
import UpdateSet from '../containers/UpdateSetContainer'

class LeftBar extends React.Component{
    componentDidMount(){
        this.props.loadPendingReviews();
    }
    
    render(){
        console.log("Change-Sets = ");
        console.log(JSON.stringify(this.props.changeSets));

        return(
            <React.Fragment>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item active">
                        <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="toreview-tab" data-toggle="tab" href="#toreview" role="tab" aria-controls="toreview" aria-selected="false">ToReview</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active in" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <List>
                        {this.props.changeSets && Object.keys(this.props.changeSets).map(name =>
                            <UpdateSet changeSetName = {name} 
                            changeSet={this.props.changeSets[name]}
                        />
                        )}
                    </List> 
                     {Object.keys(this.props.changeSets).length == 0 ? "No Changesets Found" : null}
                    </div>
                    <div className="tab-pane fade" id="toreview" role="tabpanel" aria-labelledby="toreview-tab">
                         TODO: has to be implemented 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LeftBar;
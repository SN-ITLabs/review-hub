import React from 'react';

import Differ from '../containers/DifferContainer';
import AcceptIcon from 'material-ui/svg-icons/action/done'
import RejectIcon from 'material-ui/svg-icons/content/clear'


class MainDiff extends React.Component{

    handleReviewSuccess(){
        this.props.changeSetSuccess('',this.props.change);
    }

    handleReject(){
        this.props.changeSetReject('',this.props.change);
    }

    render(){
        return(
            <section className="main">
               { this.props.differData ?
                <React.Fragment>
                    <AcceptIcon className="accept-button" onClick={this.handleReviewSuccess.bind(this)}/>
                    <RejectIcon className="reject-button" onClick={this.handleReject.bind(this)}/>
                    <Differ className="differ"/>
                 </React.Fragment>
                : 
                <p className="main-text">Please select a file to see the difference</p>
                }
            </section>
        )
    }
}

export default MainDiff;
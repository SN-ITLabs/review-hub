import React from 'react';

import Differ from '../containers/DifferContainer'
import PropertiesPane from '../containers/PropertiesContainer'
import AcceptIcon from 'material-ui/svg-icons/action/done'
import ConfigurationIcon from 'material-ui/svg-icons/action/settings-input-composite'
import ScriptIcon from 'material-ui/svg-icons/action/code'
import RejectIcon from 'material-ui/svg-icons/content/clear'
import ExpandIcon from 'material-ui/svg-icons/navigation/unfold-more'
import CollapseIcon from 'material-ui/svg-icons/navigation/unfold-less'
import LikeIcon from 'material-ui/svg-icons/action/thumb-up'
import '../css/ReviewerContent.css'

class MainDiff extends React.Component{

    constructor(props, context) {
        super(props);        
        this.state = {
            expandMode: this.props.expandMode
        }
    }
    

    handleReviewSuccess(){
        this.props.changeSetSuccess('',this.props.change, this.props.fieldName);
    }

    handleReject(){
        this.props.changeSetReject('',this.props.change, this.props.fieldName);
    }
    
    showConfigurationDiff() {

    }

    showCodeDiff() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({expandMode: nextProps.expandMode});
    }

    toggleMode(){
        this.props.toggleMode();
    }

    render(){
        var expandCollapseButton, propertiesPane, buttonBarClassName = "button-bar";
        if('full_screen' == this.state.expandMode) {
            expandCollapseButton = (<CollapseIcon className="accept-button" onClick={this.toggleMode.bind(this)}/>);
            propertiesPane = (<PropertiesPane/>);
            buttonBarClassName = "button-bar-expandmode";
        }else {
            expandCollapseButton = (<ExpandIcon className="accept-button" onClick={this.toggleMode.bind(this)}/>);
        }

        var script_or_configuration;

        if("configuration" == this.props.fieldName) {
            script_or_configuration = (<ConfigurationIcon className="accept-button" />);
        }else {
            script_or_configuration = (<ScriptIcon className="accept-button" />);
        }
        var accept,reject;
 
        if(this.props.personaTab == 'Reviewer'){
            accept = (<AcceptIcon className="accept-button" onClick={this.handleReviewSuccess.bind(this)}/>);
            reject = (<RejectIcon className="reject-button" onClick={this.handleReject.bind(this)}/>);
        }else{
            accept = null;
            reject = null;
        }

        return(<section>
                { this.props.differData ?
                <React.Fragment>
                    <div className={buttonBarClassName}>
                        {expandCollapseButton}                                                
                        {accept}
                        {reject}
                        {script_or_configuration}
                        <LikeIcon className="accept-button"/>                        
                    </div>
                    <Differ className="differ"/>    
                    {propertiesPane}                                
                 </React.Fragment>
                : 
                <p className="main-text">Please select a file to see the difference</p>
                }
            </section>);
    }
}

export default MainDiff;
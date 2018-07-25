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
import Rating from "react-rating";

class MainDiff extends React.Component{

    constructor(props, context) {
        super(props);        
        this.state = {
            expandMode: this.props.expandMode
        }
        this.changeRating=this.changeRating.bind(this);
    }
    
    changeRating(value){
        var fileId=this.props.commentary.header.fileid;
        var params={};
        params.sysparam_change=fileId;
        params.sysparam_rating=value;
        this.props.saveRating(params);
    }

    handleReviewSuccess(){
     this.props.checkRatingBeforeChangeStateUpdate('',this.props.change, this.props.fieldName,true);
    }

    handleReject(){
        this.props.checkRatingBeforeChangeStateUpdate('',this.props.change, this.props.fieldName,false);
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
        var isRatingReadOnly=true;
        if(this.props.personaTab=='Reviewer'){
            isRatingReadOnly=false;
        }
        var initialRating=0;
        var commentaries = this.props.commentary;
        initialRating=commentaries.header.rating?commentaries.header.rating:initialRating;

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
                        {isRatingReadOnly? ( <Rating initialRating={initialRating} 
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x" 
                                    fullSymbol="fa fa-star fa-2x"
                                    onChange={(rating)=>{this.changeRating(rating)}}
                            />):(
                            <Rating initialRating={initialRating} 
                                    emptySymbol="fa fa-star-o fa-2x" 
                                    fullSymbol="fa fa-star fa-2x"
                                    onChange={(rating)=>{this.changeRating(rating)}}
                            />)}
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
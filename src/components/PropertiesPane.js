import React from 'react';
import ReactDOM from 'react-dom'

import '../css/PropertiesPane.css'

import DetailPane from './DetailPane'
import CommentsPane from './CommentsPane'
import ReviewHistory from './ReviewHistory'
import Draggable from 'react-draggable';
// import Recommendations from './Recommendations'


class PropertiesPane extends React.Component{

    constructor(props, context) {
        super(props);

        this.state = {    
            activeTab: 'Details',
            tabs: ['Details','Recommendations', 'Review History', 'Comments'],
            style:{
                height: '100px',
                background:'#f2f2f2',
                minHeight:'100px',
                marginRight: '4vh',
                minHeight: '170px'
            }
        }
        this.makeTabActive = this.makeTabActive.bind(this);
    }

    componentDidMount(){
        this.props.propertyDetails(this.props.change);
    }

    makeTabActive(tabName) {
        this.setState({activeTab: tabName});
    }

    handleDrag(event,data){
        var elem= ReactDOM.findDOMNode(data.node);
        this.setState({style: {height:data.node.clientHeight-data.deltaY}});
    }
       
    getContent() {
        var content;
        switch(this.state.activeTab) {
            case 'Details': 
                content = (<DetailPane details={this.props.changeDetails}/>);
                break;
            case 'Recommendations':
                content = (<div> In Recommendations </div>);
                break;
            case 'Review History': 
                content = (<ReviewHistory/>);
                break;
            case 'Comments': 
                content = (<CommentsPane comments={this.props.changeComments}/>);
                break;
                
        }
        return content;
    }

    render(){

        var tabsPane = [];
        var self = this;
        var tabContent = this.getContent();
        this.state.tabs.forEach(function(tabObj) {
            if(tabObj == self.state.activeTab) {
                tabsPane.push(<div className="activeTab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }else {
                tabsPane.push(<div className="Tab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }
        });
        
        const bounds={
            bottom: 0,
            top:-500
        }
        return(                 
            <Draggable axis="y" handle=".dragHandle" onDrag={this.handleDrag.bind(this)} bounds={bounds}>
                <div class="propertiesPane">
                    <div className="dragHandle">
                        {tabsPane}
                    </div>
                    
                    <div className="propertiesPaneContent" style={this.state.style}>
                        {tabContent}
                    </div>
                    
                </div> 
            </Draggable>              
        );
    }
}

export default PropertiesPane;
import React from 'react';
import '../css/Persona.css';
import ReviewerContainer from '../containers/ReviewContainer';
import DeveloperContainer from '../containers/DeveloperContainer'
import HomeContent from './HomeContent';
import '../css/ReviewerContent.css';

export default class Persona extends React.Component{
    constructor(props, context) {
        super(props);
        this.state = {
            'tabs': [
                {
                    'name': 'Home',
                    'className': 'Persona-li-active'
                },
                {
                    'name': 'Reviewer',
                    'className': 'Persona-li',
                    'persona': true
                },
                {
                    'name': 'Developer',
                    'className': 'Persona-li',
                    'persona': true
                }
            ],
            'activeTab': this.props.personaTab
        };
        this.getTabs = this.getTabs.bind(this);
        this.containerClassName = 'homeContentArea';
    }

    componentWillReceiveProps(nextProps) {
        this.setState({activeTab:nextProps.personaTab});
        this.makeTabActive(nextProps.personaTab);
    }

    makeTabActive(tabName) {
        var self = this;
        var activeTab = this.state.activeTab;
        var updateTabs = this.state.tabs;
        updateTabs.forEach(function(tab) {
            var tabs = self.state.tabs;
            if(tab.name == tabName) {                
                tab.className = 'Persona-li-active';
                activeTab = tab.name;
            }else {
                tab.className = 'Persona-li';
            }
        })
        console.log('tabs = ' + JSON.stringify(updateTabs));
        this.setState({tabs: updateTabs, activeTab: activeTab});
    }    

    getMainContent() {
        var content;
        switch(this.state.activeTab) {
            case 'Home': 
                content = (<HomeContent/>);
                this.containerClassName = 'homeContentArea';
                break;
            case 'Reviewer':
                content = (<ReviewerContainer/>);
                this.containerClassName = 'ContentArea';
                break;
            case 'Developer': 
                content = (<DeveloperContainer/>);
                this.containerClassName = 'ContentArea';
                break;
        }
        console.log(content);
        return content;
    }

    getTabs() {
        var tabs2render = [];
        var self = this;
        this.state.tabs.forEach(function(tab) {
            tabs2render.push((<li className={tab.className} onClick={() => self.makeTabActive(tab.name)} key={tab.name}>{(tab.persona == true)?<div className="being">{tab.name}</div>:tab.name}</li>));
        })
        return tabs2render;
    }

    render(){
        var mainContent = this.getMainContent();    
        var tabs = this.getTabs();

        return(
            <div>
                <ul className="Persona-ul">   
                    {tabs}                 
                </ul>   
                <ul className={this.containerClassName}>      
                    {mainContent}
                </ul>
            </div>
        );
    }
}
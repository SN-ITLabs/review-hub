import React from "react";
import './css/App.css';
import './css/LiveStream.css';
import Footer from './components/Footer';

import LeftBar from './containers/LeftBarContainer';
import Header from './containers/HeaderContainer';

import MainDiff from './containers/MainDiffContainer';
import RightBar from './components/RightBar';
import Persona from './components/Persona';

import CircularProgress from 'material-ui/CircularProgress';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: grey900
    }
});


class App extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            showingLiveStream: true,
            appContainerClassName: 'app-container-min',
            liveStreamClassName: 'app-livestream',
            liveStreamTobe: '[--]',
            commentOnClassName: 'commentOn'
        }
        this.toggleLiveStream = this.toggleLiveStream.bind(this);
        this.reviewText = " has added comment ";
        this.comment = "Please look at the above code and avoid duplicates. Please look at the above code and avoid duplicates. Please look at the above code and avoid duplicates."
        this.dateTime = "02/03/2018 5:20PM IST";
        this.commentOn = (<a href="#">FileName(ChangeSetName)</a>);        
    }

    toggleLiveStream() {        
        var liveStreamClassName = (!this.state.showingLiveStream)?'app-livestream': 'app-livestream-minimize';
        var liveStreamTobe = (!this.state.showingLiveStream)?'[--]':'[+]';
        var appContainerClassName = (!this.state.showingLiveStream)?'app-container-min':'app-container-max';
        var commentOnClassName = (!this.state.showingLiveStream)?'commentOn':'commentOn-min';
        this.setState({showingLiveStream: !this.state.showingLiveStream, liveStreamClassName, liveStreamTobe, appContainerClassName, commentOnClassName});
    }

    render() {
        var streamContent = [];        
        streamContent.push(<div className="NewComment">
                                <div className="userName">Chaitanya</div>
                                <div className="commentConjunction"/>
                                {this.state.showingLiveStream?
                                (<div className="commentDescription">                                    
                                    {this.comment}  
                                </div>):""}
                                <div className={this.state.commentOnClassName}>{this.commentOn}</div>                            
                                <div className="endComment"/>
                                <div className="dateTime">{this.dateTime}</div>                                    
                            </div>);

        streamContent.push(<div className="NewComment">
                                <div className="userName">Chaitanya</div>
                                <div className="commentConjunction"/>
                                {this.state.showingLiveStream?
                                (<div className="commentDescription">                                    
                                    {this.comment}  
                                </div>):""}
                                <div className={this.state.commentOnClassName}>{this.commentOn}</div>                            
                                <div className="endComment"/>
                                <div className="dateTime">{this.dateTime}</div>                                    
                            </div>);

        return (
            <MuiThemeProvider muiTheme={muiTheme}>            
                <div className={this.state.appContainerClassName}>
                   { this.props.fetching ? <CircularProgress className="loading_icon"/>  : null}
                    <section className="app-head">
                        <Header/>                        
                    </section>
                    <section className="persona">   
                        <Persona/>                 
                    </section>                    
                </div>
                <div className={this.state.liveStreamClassName}>
                    <div className="minimizeStream" onClick={() => this.toggleLiveStream()}>{this.state.liveStreamTobe}</div>                    
                    <div className="NotificationBell">
                        <a class="fa fa-bell">
                            <span class="fa fa-comment"></span>
                            <span class="num">2</span>
                        </a>
                    </div>
                    <div className="StreamTitle">Activity Stream</div>
                    <div className="streamContent">
                        {streamContent}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
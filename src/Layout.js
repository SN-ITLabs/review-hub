import React from "react";
import './css/App.css';
import './css/LiveStream.css';

import Header from './containers/HeaderContainer';
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
            showingLiveStream: false,
            appContainerClassName: 'app-container-max',
            liveStreamClassName: 'app-livestream-minimize',
            liveStreamTobe: '[--]',
            commentOnClassName: 'commentOn'
        }

        this.toggleLiveStream = this.toggleLiveStream.bind(this);
        this.reviewText = " has added comment ";
    }

    componentDidMount(){
        this.props.dispatch();
    }

    toggleLiveStream() {
        var liveStreamClassName = (!this.state.showingLiveStream)?'app-livestream': 'app-livestream-minimize';
        var appContainerClassName = (!this.state.showingLiveStream)?'app-container-min':'app-container-max';

       /* var liveStreamTobe = (!this.state.showingLiveStream)?'[--]':'[+]';
        var appContainerClassName = (!this.state.showingLiveStream)?'app-container-min':'app-container-max';
        var commentOnClassName = (!this.state.showingLiveStream)?'commentOn':'commentOn-min';
        this.setState({showingLiveStream: !this.state.showingLiveStream, liveStreamClassName, liveStreamTobe, appContainerClassName, commentOnClassName});
        */

        this.setState({
            ...this.state,
            showingLiveStream: !this.state.showingLiveStream,
            liveStreamClassName: liveStreamClassName,
            appContainerClassName:appContainerClassName
        });

    }

    render() {
        var showing = this.state.showingLiveStream;
     return (
            <MuiThemeProvider muiTheme={muiTheme}> 
               <React.Fragment>       
                <div className={this.state.appContainerClassName}>
                   { this.props.fetching ? <CircularProgress className="loading_icon"/>  : null}
                    <section className="app-head">
                        <Header/>                        
                    </section>
                    <section className="persona">   
                        <Persona/>                 
                    </section>                    
                </div>
                <div className="NotificationBell" onClick={() => this.toggleLiveStream()}>
                        <a className="fa fa-bell">
                            <span className="fa fa-comment"></span>
                            <span className="num">2</span>
                        </a>
                </div>
                <div className={this.state.liveStreamClassName}>
                    {/* <div className="minimizeStream" onClick={() => this.toggleLiveStream()}>{this.state.liveStreamTobe}</div>                    
                    <div className="NotificationBell">
                        <a className="fa fa-bell">
                            <span className="fa fa-comment"></span>
                            <span className="num">2</span>
                        </a>
                    </div> */}
                    <div className="StreamTitle">Activity Stream</div>
                    <div className="streamContent">
                        {this.props.comments && this.props.comments.map(function(comment, i) {
                          return(
                             <div className="NewComment">
                                <div className="userName">{comment.user}</div>
                                <div className="commentConjunction"/>
                                { showing ?
                                (<div className="commentDescription">                                    
                                    {comment.desc}  
                                </div>):""}
                                <div className="commentOn">
                                   <a href="#">{comment.changeName}</a>
                                </div>                            
                                <div className="endComment"/>
                                <div className="dateTime">{comment.dateTime}</div>                                    
                            </div>
                           )
                         })
                       }
                    </div>
                </div>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default App;
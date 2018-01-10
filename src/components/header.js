import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey900,white,grey300} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        textColor: white,
        canvasColor: grey300
    },
    appBar: {
      height: 50,
    },
  });

  const user = {
      name : 'Haribabu Garbhana',
      id : 23
  }

export default class Header extends React.Component{

    constructor(props){
        super(props);

        // keep the initilization components here..
        this.state = {
            value : 1,
            userInfo: user,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                 <AppBar
                        iconElementLeft = { 
                                <div className="logoSection">
                                    <img src="servicenow_logo.png" alt="Service Now"/>
                                    <h6 className="logo_header">ReviewHub</h6>
                                </div>
                        }
                        iconElementRight={
                            <div className = "user_info_section">
                                <DropDownMenu value={this.state.value} onChange={this.handleChange} autoWidth={true}>
                                    <MenuItem value={1} primaryText={this.state.userInfo.name}/>
                                    <MenuItem value={2} primaryText="Log Out" />
                                </DropDownMenu>
                            </div>
                        }
               />
            </MuiThemeProvider>
        );
    }
}
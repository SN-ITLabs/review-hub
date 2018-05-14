import React from "react";

class Header extends React.Component {

    // componentDidMount(){
    //     this.props.dispatch();
    // } 

    render() {
        const logoSRC = "/images/logos/logo_service-now_light.png";
        return (
            <React.Fragment>
                <div className="logoSection">
                    <img src={logoSRC} alt="Service Now" />
                    <h6 className="logo_header">ReviewHub</h6>
                </div>
                <div className="loginSection">
                   <span>{this.props.user.name}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
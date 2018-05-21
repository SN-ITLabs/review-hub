import React from "react";
import '../css/Header.css';

class Header extends React.Component {

    // componentDidMount(){
    //     this.props.dispatch();
    // } 

    render() {
        const logoSRC = "/images/logos/snow_logo.png";
        return (
            <React.Fragment>
                <div className="Logo">
                    <img src={logoSRC} alt="Service Now" className="HeaderLogo"/>
                    <div className="HeaderTitle">Review Central</div>
                </div>
                {/* <div className="loginSection">
                   <span>{this.props.user.name}</span>
                </div> */}
            </React.Fragment>
        )
    }
}

export default Header;
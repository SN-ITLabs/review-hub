import React from "react";
import '../css/Header.css';
import { HUB_CONST } from "../util/Constants"
class Header extends React.Component {

    // componentDidMount(){
    //     this.props.dispatch();
    // } 

    render() {
        let logoSRC = "NewLogo.png";

        if (HUB_CONST.IS_LOCAL){
            logoSRC =  "/images/logos/snow_logo.png";
        }

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
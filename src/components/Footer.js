import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                             &copy; 2017 Service Now
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
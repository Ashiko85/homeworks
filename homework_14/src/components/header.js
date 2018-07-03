import React, {Component} from 'react';

class Header extends React.Component {

    render(){

        return(
            <div>
                {this.props.applicationName}
            </div>
        );
    }
}

export default Header;

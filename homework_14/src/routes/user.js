import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';

class Users extends PureComponent{
    render() {
        return(
            <Fragment>
                <Header applicationName="Homework 14"/>
                <Menu/>
                {this.props.match.params.userList}
                <Footer currentDatde=" "/>
            </Fragment>
        )
    }
}

export default Users

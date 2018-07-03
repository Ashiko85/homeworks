import React, { PureComponent } from 'react';

class ShowUsers extends PureComponent{

    renderList = () => this.props.userList.map((item)=><div>{item}</div>);

    render(){
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

export default ShowUsers;

import React, { Component} from 'react';
import {connect} from 'react-redux'

class ProfilePage extends Component {
    constructor(props){
        super()
    }

    render() {
       // console.log(this.props)
        return (
            <div> profile page </div>
        )
    }
}


export default connect(null, {})(ProfilePage)
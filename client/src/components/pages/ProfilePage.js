import React, { Component} from 'react';
import {connect} from 'react-redux'
import {handle_menu_state} from '../../actions'

class ProfilePage extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
            <div> profile page </div>
        )
    }
}
function map_state_to_props(state) {
    return {
        menu: state.menu
    }
}

export default connect(map_state_to_props, {handle_menu_state})(ProfilePage)
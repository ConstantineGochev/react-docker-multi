import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetch_boats_data} from '../../actions'

class BoatRentalPage extends Component {
    constructor(props) {
        super()
        this.state =  {

        }
    }
    componentDidMount () {
        this.props.fetch_boats_data()
    }
    render() {
        console.log(this.props.boats)
        return (
            <div>boat rental  page </div>
        )
    }
}
function map_state_to_props(state) {
    return {
        boats: state.boats
    }
}
export default connect(map_state_to_props, {fetch_boats_data})(BoatRentalPage)
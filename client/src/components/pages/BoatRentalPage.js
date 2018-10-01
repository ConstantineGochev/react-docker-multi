import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetch_boats_data} from '../../actions'
import Draggable from 'react-draggable';

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
     //   console.log(this.props)
        return (
            <div><h1>boat rental  page</h1>
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25, 25]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
            </div>
        )
    }
}
function map_state_to_props(state) {
    return {
        boats: state.boats
    }
}
export default connect(map_state_to_props, {fetch_boats_data})(BoatRentalPage)
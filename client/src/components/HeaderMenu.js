import React, {Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import {connect} from 'react-redux'
import {handle_menu_state } from '../actions'
import {slide as BurgerMenu} from 'react-burger-menu';
import ProfileMenuLayout from './ProfileMenuLayout';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

//import {history} from '../App'

class HeaderMenu extends Component {
    constructor(props) {
        super()
        this.state = {
            active_item: localStorage.getItem('active_item') || 'home',

        }
    }
    handleItemClick = (e, { name, to }) => {
        localStorage.setItem('active_item', name)
        this.setState({ active_item: name })
    }
    toggle_profile_menu = () => {
        // action for menu state with the opposite props
         this.props.handle_menu_state(!this.props.menu.isOpen)
        //  //we have to force update to the component
        //  this.forceUpdate()
        
    }
    // handle_menu_state_change = (state) => {
    //     // send the state of the menu to the reducer
    //      this.props.handle_menu_state(state.isOpen)
       
    // }


    render() {
        console.log(this.props.menu)
        const { active_item } = this.state
        return (
            <div>
                <Menu stackable size='large' fixed='top'>
                    <Menu.Item>
                        <img src={logo} />
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' name='home' active={active_item === 'home'} onClick={this.handleItemClick} />

                    <Menu.Item
                        as={Link}
                        to='/boat-rental'
                        name='boat rental'
                        active={active_item === 'boat rental'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='help'
                        as={Link}
                        to='/help'
                        active={active_item === 'help'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='register your yacht'
                        as={Link}
                        to='/register-boat'
                        active={active_item === 'register your yacht'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='my profile'
                            active={active_item === 'my profile'}
                            onClick={this.toggle_profile_menu}
                        />
                    </Menu.Menu>
                </Menu>
        
                <BurgerMenu right isOpen={this.props.menu.isOpen} onChange={(state) => this.props.handle_menu_state(state.isOpen) } className='burger-menu' width={'30%'} >
                    <ProfileMenuLayout  />
                </BurgerMenu>
            </div>
        )
    }
}
function map_state_to_props (state) {
    return {
        auth: state.auth,
        menu: state.menu
    }
}

export default connect(map_state_to_props,{handle_menu_state})(HeaderMenu)
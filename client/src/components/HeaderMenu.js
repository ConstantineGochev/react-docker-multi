import React, {Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
//import {history} from '../App'

class HeaderMenu extends Component {
    constructor(props) {
        super()
        this.state = {
            active_item: localStorage.getItem('active_item') || 'home'
        }
    }
    handleItemClick = (e, { name, to }) => {
        localStorage.setItem('active_item', name)
        this.setState({ active_item: name })
    }
    render() {
        //console.log(this.props)
        const { active_item } = this.state
        return (
            <Menu stackable size='large'>
                <Menu.Item>
                    <img src={logo} />
                </Menu.Item>
                <Menu.Item as={Link} to= '/' name='home' active={active_item === 'home'} onClick={this.handleItemClick} />

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
                        name='signup'
                        active={active_item === 'signup'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default HeaderMenu
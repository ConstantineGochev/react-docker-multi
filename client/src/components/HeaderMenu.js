import React, {Component} from 'react';
import { Menu, Segment,  Sidebar, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import {connect} from 'react-redux'
import NotRegisteredMenuLayout from './NotRegisteredMenuLayout'



class HeaderMenu extends Component {
    constructor(props) {
        super()

        this.state = {
            active_item: localStorage.getItem('active_item') || 'home',
            visible: false
        }
    }
    handleItemClick = (e, { name, to }) => {
        localStorage.setItem('active_item', name)
        this.setState({ active_item: name })
    }


    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        // console.log(this.state.visible)
        // console.log(this.props)
        const { active_item, visible } = this.state
        return (
            <div>
                <Menu stackable size='large' >
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
                            onClick={this.handleButtonClick}
                        />
                    </Menu.Menu>
                </Menu>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        direction='right'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'
                        id="side-menu"
                    >
                    <Button  icon='close' circular onClick={this.handleSidebarHide} />
                    <NotRegisteredMenuLayout {...this.props} />

                    </Sidebar>
            </div>
        )
    }
}
function map_state_to_props (state) {
    return {
        auth: state.auth,
    }
}

export default connect(map_state_to_props,{})(HeaderMenu)
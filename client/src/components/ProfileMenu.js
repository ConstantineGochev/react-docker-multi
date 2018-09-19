import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import ProfileMenuLayout from './ProfileMenuLayout' 

const ProfileMenu = (props) => (

    <Menu right isOpen={props.isOpen} width={'30%'} onStateChange={(state) => props.profile_menu_state(state)}>
        <ProfileMenuLayout />
    </Menu>


)

export default ProfileMenu
import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import ProfileMenuLayout from './ProfileMenuLayout';
import MediaQuery from 'react-responsive';
 

const ProfileMenu = (props) => (
    <div>
        <Menu right isOpen={props.isOpen} width={'30%'} onStateChange={(state) => props.profile_menu_state(state)}>
            <ProfileMenuLayout />
        </Menu>
        <MediaQuery maxDeviceWidth={1224}>
            <Menu right isOpen={props.isOpen} width={'80%'} onStateChange={(state) => props.profile_menu_state(state)}>
                <ProfileMenuLayout />
            </Menu>
        </MediaQuery>
    </div>

)

export default ProfileMenu
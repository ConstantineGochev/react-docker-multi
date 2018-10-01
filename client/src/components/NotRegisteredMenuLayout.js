import React, { Component } from 'react'
import {connect} from 'react-redux';
import {login_user, register_user} from '../actions'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon,TransitionablePortal } from 'semantic-ui-react';


class ProfileMenuLayout extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            //for registration
            name_reg: '',
            email_reg: '',
            password_reg: '',
            password_reg_confirm: '',
            show_registration_layout: false,
        }

        document.body.addEventListener('click', function() {
            console.log('test');
          });
          
    }

    handleFormChange = (e) => {
        e.preventDefault();
        //console.log(e.target.name)
        
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    handleRegistration = async () => {
        const data = {
            email: this.state.email_reg,
            password: this.state.password_reg
        }
        await this.props.register_user(data)
        await this.forceUpdate()

    }
    handleLogin = async () => {
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.props)
        const { email, password } = this.state
        var data_obj = {
            email,
            password
        }
        console.log(this.props.history)
        var self = this

        await this.props.login_user(data_obj,()=> {

           self.props.history.push('/profile')
           document.body.click();
        })
        await this.forceUpdate()


    }
    check_register_errors = () => {
        if(this.props.auth.errors.reg_error !== null) {
            return this.props.auth.errors.reg_error
        } else {
            return null
        }
    }
    check_login_errors = () => {
       // console.log(this.error)
        if(this.props.auth.errors.auth_error !== null && this.props.auth.authenticated === false) {
            return this.props.auth.errors.auth_error
        } else if (this.props.auth.errors.auth_error === null && this.props.auth.authenticated ===false ) {
            return null
        }
    }
    change_layout = () => {
        this.setState({
            show_registration_layout: !this.state.show_registration_layout
        })
    }
    render_layout() {
        if (this.state.show_registration_layout === false) {

            return (
                <div>
                    <div>
                        <br />
                        <Header as='h4' color='teal' textAlign='center'>
                            Log-in to your account
                         </Header>
                 
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' name='email' onChange={this.handleFormChange} />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        onChange={this.handleFormChange}
                                    />
                                    <Button color='teal' fluid size='large' onClick={this.handleLogin}>
                                        Login
                                    </Button>
                                    <p style={{color: 'red'}}>{this.check_login_errors()}</p>
                                </Segment>
                            </Form>
             
                        <Message>
                            New to us? <a onClick={this.change_layout}>Sign Up</a>
                        </Message>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <Header as='h4' color='teal' textAlign='center'>
                        Register
                    </Header>
            
                        <Form size='large' className='registration-form'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' name='name_reg' onChange={this.handleFormChange} />
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' name='email_reg' onChange={this.handleFormChange} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password_reg'
                                    onChange={this.handleFormChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm password'
                                    type='password'
                                    name='password_reg_confirm'
                                    onChange={this.handleFormChange}
                                />

                                <Button color='teal' fluid size='large' onClick={this.handleRegistration}>
                                    Register
                             </Button>
                                <p style={{color: 'red'}}>{this.check_register_errors()}</p>
                            </Segment>
                        </Form>
                        <Message>
                           Already have an account? <a onClick={this.change_layout}>Log in</a>
                        </Message>
     
            </div>
            )
        }
    }

    render() {
      //  console.log(this.state.email)
     // console.log(this.props)
     console.log(this.error)
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h4' color='teal' textAlign='left'>
                            <Button onClick={this.change_layout}>{this.state.show_registration_layout? 'Login': 'Register'}</Button>
                        </Header>
                        <Header as='h5' color='teal' textAlign='center'>
                            Sign up in one click
                            </Header>
                        <div className='social-buttons-wrapper'>
                            <Button color='facebook' className='social-buttons'>
                                <Icon name='facebook' /> Facebook
                               </Button>
                            <Button color='google plus' className='social-buttons'>
                                <Icon name='google' /> Google Plus
                                </Button>
                            <Button color='instagram' className='social-buttons'>
                                <Icon name='instagram' /> Instagram
                                </Button>
                        </div>
                        {this.render_layout()}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


function map_state_to_props (state) {
    return {
        auth: state.auth,
     
    }
}
export default connect(map_state_to_props, {login_user, register_user})(ProfileMenuLayout)
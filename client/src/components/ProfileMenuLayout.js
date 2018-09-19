import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';


class ProfileMenuLayout extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <div className='login-form'>

                    <style>
                    {`
                       body > div,
                       body > div > div,
                       body > div > div > div.login-form {
                       height: 100%;}`
                    }
                    </style>
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <p></p>
                            <Header as='h4' color='teal' textAlign='left'>
                               <Button>Register</Button>
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
                            <Header as='h4' color='teal' textAlign='center'>
                             Log-in to your account
                            </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                    />
                                    <Button color='teal' fluid size='large'>
                                        Login
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us? <a href='#'>Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ProfileMenuLayout
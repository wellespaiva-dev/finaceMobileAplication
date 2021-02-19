import React, { Component } from 'react'

import { Container, LoginButton, TextButton, ButtonContainer, SignUp, ForgotPassword, TitleSignUp, TitleForgot } from './styles'

import HearderLogo from '../../components/hearderLogo'
import InputAddress from '../../components/inputAddress'
import InputPassword from '../../components/inputPassword'

export default class SignIn extends Component{
    render(){
        return(
            <Container>
                <HearderLogo />
                <InputAddress />
                <InputPassword />
                <LoginButton onPress={()=> {this.props.navigation.navigate("Home")}}>
                    <TextButton>Login</TextButton>
                </LoginButton>
                <ButtonContainer>
                    <SignUp>
                        <TitleSignUp>SignUp</TitleSignUp>
                    </SignUp>
                    <ForgotPassword>
                        <TitleForgot>Forgot Password?</TitleForgot>
                    </ForgotPassword>
                </ButtonContainer>
            </Container>
        );
    }
}
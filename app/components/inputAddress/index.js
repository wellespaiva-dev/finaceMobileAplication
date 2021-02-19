import React, { Component } from  'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Title, InputContainer, Input } from './styles'

export default class InputAddress extends Component{
    render(){
        return(
            <Container>
                <Title>Email Address</Title>
                <InputContainer>
                    <Icon name='mail-outline' size={20} color='#333' />
                    <Input/>
                </InputContainer>
            </Container>
        );
    }
}
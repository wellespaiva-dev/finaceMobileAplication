import React, { Component } from  'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SvgVisibility from '../../assets/SvgVisibility'
import SvgVisibilityOff from '../../assets/SvgVisibilityOff'

import { Container, Title, InputContainer, Input, ButtonVisibility } from './styles'

export default class InputPassword extends Component{

    constructor(props){
        super(props)
        this.state = {
            showCancel: true
        }

        this.visibilityInput = this.visibilityInput.bind(this);
    }

    visibilityInput(){
        const {showCancel} = this.state
        if(showCancel === false){
            this.setState({showCancel: true})
        }else{
            this.setState({showCancel: false})
        }
    }

    render(){
        return(
            <Container>
                <Title>Password</Title>
                <InputContainer>
                    <Icon name='lock-outline' size={20} color='#333' />
                    <Input secureTextEntry={this.state.showCancel}/>
                    {
                        this.state.showCancel === true &&
                        <ButtonVisibility onPress={() => this.visibilityInput()}>
                            <SvgVisibility fill='#333' width={25} height={25} />
                        </ButtonVisibility>
                    }
                    {
                        this.state.showCancel === false &&
                        <ButtonVisibility onPress={() => this.visibilityInput()}>
                            <SvgVisibilityOff fill='#333' width={25} height={25} />
                        </ButtonVisibility>
                    }
                </InputContainer>
            </Container>
        );
    }
}
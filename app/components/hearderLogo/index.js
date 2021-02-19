import React, { Component } from 'react'

import { Container } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SvgLogo from '../../assets/SvgLogo'

export default class HearderLogo extends Component{
    render(){
        return(
            <Container>
                <SvgLogo fill="#FFF" width={50} height={50} />
            </Container>
        );
    }
}
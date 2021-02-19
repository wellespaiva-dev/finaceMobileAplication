import React, { Component } from 'react'

import SvgAlarm from '../../assets/SvgAlarm'

import { Container, HeadlineContainer, Headline, Title, Data } from './styles'

import CardHeader from '../../components/CardHeader'
import CardFooter from '../../components/CardFooter'

export default class Dashboard extends Component{
    render(){
        return(
            <Container>
                <CardHeader/>
                <HeadlineContainer>
                    <Headline>
                        <Title>Overview</Title>
                        <SvgAlarm fill='#000' width={20} height={20} />
                    </Headline>
                    <Data>Sept 13, 2020</Data>
                </HeadlineContainer>
                <CardFooter />
            </Container>
        );
    }
}
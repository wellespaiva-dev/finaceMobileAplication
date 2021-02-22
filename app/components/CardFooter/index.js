import React from 'react'

import { Container, CardContainer, Transaction, LogoTransaction, InformationTransaction, TitleTransaction, Information, Value } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function CardFooter(){
    return(
        <Container showsVerticalScrollIndicator={false}>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='arrow-upward' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Sent</TitleTransaction>
                        <Information>Sending Payment to Clients</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$150</Value>
            </CardContainer>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='arrow-downward' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Receive</TitleTransaction>
                        <Information>Receive Salary from company</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$250</Value>
            </CardContainer>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='local-atm' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Loan</TitleTransaction>
                        <Information>Loan for the Car</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$400</Value>
            </CardContainer>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='arrow-upward' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Sent</TitleTransaction>
                        <Information>Sending Payment to Clients</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$150</Value>
            </CardContainer>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='arrow-downward' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Receive</TitleTransaction>
                        <Information>Receive Salary from company</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$250</Value>
            </CardContainer>
            <CardContainer>
                <Transaction>
                    <LogoTransaction>
                        <Icon name='local-atm' size={25} color='#333' />
                    </LogoTransaction>
                    <InformationTransaction>
                        <TitleTransaction>Loan</TitleTransaction>
                        <Information>Loan for the Car</Information>
                    </InformationTransaction>
                </Transaction>
                <Value>$400</Value>
            </CardContainer>
        </Container>
    );
}
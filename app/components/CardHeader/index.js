import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Header, Content, Foto, UserName, Profession, CardFooter, CardFooterItem, Valor, Title, Line } from './styles'


export default function CardHeader(){
    return(
        <Container>
            <Header>
                <Icon name='view-headline' size={20} color='#333'/>
                <Icon name='drag-indicator' size={20} color='#333'/>
            </Header>
            <Content>
                <Foto source={require('../../assets/fotoProfile.jpeg')}/>
                <UserName>Welles Paiva</UserName>
                <Profession>Desenvolvedor Mobile</Profession>
            </Content>
            <CardFooter>
                <CardFooterItem>
                    <Valor>$8900</Valor>
                    <Title>Income</Title>
                </CardFooterItem>
                <Line/>
                <CardFooterItem>
                    <Valor>$5500</Valor>
                    <Title>Expenses</Title>
                </CardFooterItem>
                <Line/>
                <CardFooterItem>
                    <Valor>$890</Valor>
                    <Title>Loan</Title>
                </CardFooterItem>
            </CardFooter>
        </Container>
    );
}
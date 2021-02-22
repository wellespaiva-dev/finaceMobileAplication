import styled from 'styled-components';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Container = styled.ScrollView`
`;


export const CardContainer = styled.View`
    flex-direction: row;
    height: 70px;
    width: ${width -40}px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    border-radius: 20px;
    margin-bottom: 10px
`;

export const Transaction = styled.View`
    flex-direction: row;
    align-items: center;
`

export const LogoTransaction = styled.View`
    width: 45px;
    height: 45px;
    background: #E9F0FB;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`


export const InformationTransaction = styled.View`
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px
`;

export const TitleTransaction = styled.Text`
    font-size: 18px;
    color: #333;
    font-weight: bold;
`;

export const Information = styled.Text`
    font-size: 12px;
    color: #A9A9A9;
`;

export const Value = styled.Text`
    font-size: 15px;
    color: #333;
    font-weight: bold;
    padding: 0 5px;
`;
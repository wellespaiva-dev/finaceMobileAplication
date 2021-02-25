import styled from 'styled-components/native';

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Container = styled.View`
    width: ${width-60}px;;
    height: 68px;
    border-radius: 20px;
    padding: 10px;
    justify-content: center;
    background: #FFF;
    opacity: 0.9;
    margin-top: 20px
`;

export const Title = styled.Text`
    font-size: 12px;
    color: #666666;
    padding-top: 15px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 10px;
    align-items: center;
`;

export const Input = styled.TextInput`
    font-size: 15px;
    color: #333;
    margin-left: 2px;
    width: 80%
`;

export const ButtonVisibility = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;
 
import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width - 40}px;
    height: ${height/2}px;
    border-radius: 10px;
    align-items: center;
    background: #FFF;
    margin-top: 20px;
    padding: 10px 0;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Foto = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const UserName = styled.Text`
    font-size: 20px;
    color: #5B628F;
    font-weight: bold;
    margin-top: 10px;
`;

export const Profession =  styled.Text`
    font-size: 12px;
    color: #333;
`;

export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`;

export const CardFooterItem = styled.View` 
    align-items: center;
    margin: 10px;
`;

export const Valor = styled.Text`
    font-size: 16px;
    color: #5B628F;
    font-weight: 100
`;

export const Title = styled.Text`
    font-size: 11px;
    color: #333;
    font-weight: 100
`;

export const Line = styled.View`
    border-width: 0.3px;
    height: 35px;
    background: #333;
    margin: 10px
`;
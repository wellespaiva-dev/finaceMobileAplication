import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: #E9F0FB;
`;

export const HeadlineContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Headline = styled.View`
    flex-direction: row;
    align-items: center
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #5B628F;
    font-weight: bold;
    padding: 10px 20px;
    margin-right: -10px
`;

export const Data = styled.Text`
    font-size: 15px;
    color: #5B628F;
    font-weight: 600;
    padding: 0 20px;
`;
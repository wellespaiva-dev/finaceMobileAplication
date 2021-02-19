import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #E9F0FB;
  align-items: center;
  justify-content: center;
`;

export const LoginButton  = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: #5B628F;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SignUp = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TitleSignUp = styled.Text`
  color: #333;
  font-size: 12px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TitleForgot = styled.Text`
  color: #333;
  font-size: 12px;
`;


import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const StyledFloatingBotton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: blueviolet;
`;

export const StyledPlusText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const StyledEmptyView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledEmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #b1b1b1;
`;

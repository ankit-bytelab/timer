import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledAddTitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #b1b1b1;
`;

export const StyledInputRowView = styled.View`
  flex-direction: row;
  gap: 10px;
  padding: 16px;
`;

export const StyledInput = styled.TextInput`
  border: 1px solid #b1b1b1;
  flex: 1;
  min-height: 50px;
  border-radius: 12px;
  padding: 0px 16px;
`;

export const StyledAddButton = styled.TouchableOpacity<{disabled?: boolean}>`
  background-color: blueviolet;
  padding: 16px;
  border-radius: 10px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const StyledAddButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

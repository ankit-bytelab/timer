import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledWorldClockText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const StyledButtonRowView = styled.View`
  flex-direction: row;
  gap: 10px;
  padding: 16px;
`;

export const StyledTimeZoneButton = styled.TouchableOpacity<{
  isActive: boolean;
}>`
  flex: 1;
  background-color: blueviolet;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? 'blueviolet' : '#ACACAC')};
`;

export const StyledButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

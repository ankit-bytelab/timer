import {styled} from 'styled-components/native';

export const StyledContainer = styled.View`
  padding: 16px;
  background-color: #fff;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

export const StyledCountText = styled.Text`
  font-size: 24px;
  flex: 1;
  font-weight: bold;
`;

export const StyledSwipeableContainer = styled.View`
  background-color: red;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5px;
  padding-right: 16px;
  flex: 1;
`;

export const StyledDeleteText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const StyledPlayPauseButton = styled.TouchableOpacity`
  padding: 8px;
`;

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';

type IconProps = {
  color?: string;
};

type ButtonAmountProps = {
  background?: string;
};

export const Container = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  elevation: 8;
  ${Platform.OS === 'android' && 'box-shadow: 0px 2px 4.65px rgba(3, 12, 23, 0.3);'}
`;

export const InfoArea = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 50%;
  width: 100%;
`;

export const PhotoArea = styled.View`
  width: 100px;
  height: 75px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  ${Platform.OS === 'android' ? 'elevation: 8;' : 'shadow-offset: 0px 2px; shadow-opacity: 0.3; shadow-radius: 4.65;'}
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 90%;
  height: 90%;
`;

export const InfoTextArea = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  margin-top: 5px;
`;

export const AmountArea = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const AmountText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin: 0 7px;
`;

export const ButtonAmount = styled.TouchableOpacity<ButtonAmountProps>`
  background: ${props =>
    props.background ? props.background : props.theme.colors.white};

  border-width: 1px;
  border-color: ${props => props.theme.colors.pink};
  align-items: center;
  justify-content: center;
  padding: 1.5%;
  border-radius: 3px;
`;

export const Icon = styled(AntDesign)<IconProps>`
  font-size: 12px;
  color: ${props => (props.color ? props.color : props.theme.colors.pink)};
`;

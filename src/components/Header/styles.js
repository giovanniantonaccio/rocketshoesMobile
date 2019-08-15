import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Basket = styled(Icon).attrs({
  name: 'shopping-basket',
  color: colors.light,
  size: 26,
})``;

export const BasketCounter = styled.Text`
  position: absolute;
  top: -7px;
  right: -7px;
  background: ${colors.primary};
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  color: ${colors.light};
  font-weight: bold;
  font-size: 12px;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding: 2px;
`;

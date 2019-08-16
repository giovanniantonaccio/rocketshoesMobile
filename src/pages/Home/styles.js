import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  margin-left: 15px;
  flex-grow: 0;
`;

export const Container = styled.View`
  width: 220px;
  background: ${colors.light};
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
  padding-left: 10px;
  padding-right: 10px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

export const ProductAmountIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  color: colors.light,
  size: 16,
})``;

export const ProductAmountText = styled.Text`
  color: ${colors.light};
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  color: ${colors.light};
  text-transform: uppercase;
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 14px;
  flex: 1;
  text-align: center;
  padding: 12px 30px;
`;

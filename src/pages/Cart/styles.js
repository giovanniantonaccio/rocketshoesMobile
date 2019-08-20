import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.light};
  margin: 10px;
  border-radius: 4px;
`;

export const EmptyContainer = styled.View`
  padding: 50px 20px;
`;

export const EmptyCart = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  color: colors.darkGray,
  size: 52,
})`
  align-self: center;
`;

export const EmptyText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;

export const ProductContainer = styled.ScrollView``;

export const List = styled.FlatList``;

export const Product = styled.View`
  margin: 10px;
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  /* flex-direction: column; */
  padding-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
  max-width: 200px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
`;

export const ProductDeleteContainer = styled.TouchableOpacity``;

export const ProductDelete = styled(Icon).attrs({
  name: 'delete-forever',
  color: colors.primary,
  size: 24,
})``;

export const ProductFooter = styled.View`
  background: ${colors.lightGray};
  padding: 5px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const MinusControlContainer = styled.TouchableOpacity``;

export const MinusControl = styled(Icon).attrs({
  name: 'remove-circle-outline',
  color: colors.primary,
  size: 20,
})``;

export const AmountControl = styled.Text`
  background: ${colors.light};
  min-width: 45px;
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
  font-weight: normal;
  font-size: 12px;
  padding: 2px;
`;

export const PlusControlContainer = styled.TouchableOpacity``;

export const PlusControl = styled(Icon).attrs({
  name: 'add-circle-outline',
  color: colors.primary,
  size: 20,
})``;

export const FooterTotal = styled.Text`
  font-weight: bold;
  margin-right: 5px;
`;

export const TotalText = styled.Text`
  color: ${colors.darkGray};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
`;

export const TotalAmount = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity``;

export const SubmitButtonText = styled.Text`
  color: ${colors.light};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 13px;
  margin: 10px;
  border-radius: 4px;
  background: ${colors.primary};
`;

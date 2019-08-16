import React, { Component } from 'react';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  List,
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  ProductAmount,
  ProductAmountIcon,
  ProductAmountText,
  ButtonText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Container>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            <AddToCartButton>
              <ProductAmount>
                <ProductAmountIcon />
                <ProductAmountText>3</ProductAmountText>
              </ProductAmount>
              <ButtonText>Adicionar</ButtonText>
            </AddToCartButton>
          </Container>
        )}
      />
    );
  }
}

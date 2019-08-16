import React, { Component } from 'react';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProductHeader,
  ProductDetails,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductDeleteContainer,
  ProductDelete,
  ProductPrice,
  ProductFooter,
  MinusControlContainer,
  MinusControl,
  AmountControl,
  PlusControlContainer,
  PlusControl,
  FooterTotal,
  Controls,
  SubmitButton,
  SubmitButtonText,
  TotalText,
  TotalAmount,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductHeader>
                <ProductDetails>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductInfo>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                  </ProductInfo>
                </ProductDetails>
                <ProductDeleteContainer>
                  <ProductDelete />
                </ProductDeleteContainer>
              </ProductHeader>
              <ProductFooter>
                <Controls>
                  <MinusControlContainer>
                    <MinusControl />
                  </MinusControlContainer>
                  <AmountControl>1</AmountControl>
                  <PlusControlContainer>
                    <PlusControl />
                  </PlusControlContainer>
                </Controls>
                <FooterTotal>{formatPrice(item.price)}</FooterTotal>
              </ProductFooter>
            </Product>
          )}
        />
        <TotalText>Total</TotalText>
        <TotalAmount>{formatPrice(319.9)}</TotalAmount>
        <SubmitButton>
          <SubmitButtonText>Finalizar Pedido</SubmitButtonText>
        </SubmitButton>
      </Container>
    );
  }
}

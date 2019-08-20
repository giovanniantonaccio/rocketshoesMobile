import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  EmptyContainer,
  EmptyCart,
  EmptyText,
  ProductContainer,
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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyContainer>
          <EmptyCart />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyContainer>
      ) : (
        <ProductContainer>
          <List
            data={cart}
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
                  <ProductDeleteContainer
                    onPress={() => removeFromCart(item.id)}
                  >
                    <ProductDelete />
                  </ProductDeleteContainer>
                </ProductHeader>
                <ProductFooter>
                  <Controls>
                    <MinusControlContainer onPress={() => decrement(item)}>
                      <MinusControl />
                    </MinusControlContainer>
                    <AmountControl>{item.amount}</AmountControl>
                    <PlusControlContainer onPress={() => increment(item)}>
                      <PlusControl />
                    </PlusControlContainer>
                  </Controls>
                  <FooterTotal>{formatPrice(item.subtotal)}</FooterTotal>
                </ProductFooter>
              </Product>
            )}
          />
          <TotalText>Total</TotalText>
          <TotalAmount>{total}</TotalAmount>
          <SubmitButton>
            <SubmitButtonText>Finalizar Pedido</SubmitButtonText>
          </SubmitButton>
        </ProductContainer>
      )}
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      subtotal: PropTypes.string,
    })
  ).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

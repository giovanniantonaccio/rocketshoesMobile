import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  Basket,
  BasketCounter,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Basket />
          <BasketCounter>{cartSize}</BasketCounter>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(
  mapStateToProps,
  null
)(Header);

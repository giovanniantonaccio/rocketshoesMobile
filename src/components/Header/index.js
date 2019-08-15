import React from 'react';
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

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Basket />
          <BasketCounter>0</BasketCounter>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

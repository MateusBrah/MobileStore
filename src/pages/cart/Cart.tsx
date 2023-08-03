import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, Alert } from 'react-native';
import Lottie from 'lottie-react-native';

import { CartContext } from '../../context/CartContext';
import ListCartProduct from '../../components/ListCartProduct';
import theme from '../../themes/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Container,
  Title,
  ListLine,
  TotalArea,
  CheckoutArea,
  TotalText,
  TotalValue,
  ButtonCheckout,
  ButtonText,
  EmptyArea,
  EmptyText,
  TitleArea,
  TitleButton,
  TitleButtonText,
} from './styles';

import { IProductCartProps } from '../../@types/Products';

type CartItem = {
  product: IProductCartProps['product'];
  amount: IProductCartProps['amount'];
  total: IProductCartProps['total'];
};

export default function Cart() {
  const { cart, loadingCart, total, removeAllItemsCart } = useContext(CartContext);

  const renderItem = ({ item }: ListRenderItemInfo<CartItem>) => (
    <ListCartProduct product={item.product} amount={item.amount} total={item.total} />
  );

  const offAir = () => {
    Alert.alert(
      'Oops!',
      'Desculpe, mas o nosso sistema de pagamento está fora do ar, mas não se preocupe! Nossa equipe já está trabalhando para sanar o problema.',
      [{ text: 'Ok, Entendi!', onPress: () => console.log('Cool pressed') }],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <TitleArea>
          <Title>Carrinho</Title>
          {cart.length > 0 && (
            <TitleButton onPress={removeAllItemsCart}>
              <TitleButtonText>Apagar todos produtos</TitleButtonText>
            </TitleButton>
          )}
        </TitleArea>
      </SafeAreaView>
      {cart.length <= 0 ? (
        <EmptyArea>
          <Lottie
            source={require('../../assets/animations/emptyBag.json')}
            autoPlay
            loop
            style={{ width: 250 }}
          />
          <EmptyText>Seu carrinho está vazio...</EmptyText>
          <EmptyText>Que tal checar a seção de eletrônicos?</EmptyText>
        </EmptyArea>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.product.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={ListLine}
          />
          <CheckoutArea>
            <ListLine />
            <TotalArea>
              <TotalText>Total:</TotalText>
              {loadingCart ? (
                <ActivityIndicator color={theme.colors.pink} size="small" />
              ) : (
                <TotalValue>$ {total.toFixed(2)}</TotalValue>
              )}
            </TotalArea>
            <ButtonCheckout disabled={loadingCart} onPress={() => offAir()}>
              <ButtonText>Finalizar Compra</ButtonText>
            </ButtonCheckout>
          </CheckoutArea>
        </>
      )}
    </Container>
  );
}

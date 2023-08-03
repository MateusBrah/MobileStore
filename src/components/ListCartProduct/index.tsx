import React, { useContext } from 'react';
import { ActivityIndicator, TextStyle } from 'react-native';
import {
  Container,
  InfoArea,
  PhotoArea,
  Photo,
  InfoTextArea,
  Name,
  Description,
  Price,
  AmountArea,
  ButtonAmount,
  Icon,
  AmountText,
} from './styles';

import { CartContext } from '../../context/CartContext';
import theme from '../../themes/theme';
import { IProductCartProps } from '../../@types/Products';

type ListCartProductProps = {
  product: IProductCartProps['product'];
  amount: IProductCartProps['amount'];
  total: IProductCartProps['total'];
};

type IconStyle = {
  name: string;
  color?: string;
};

export default function ListCartProduct({ product, amount, total }: ListCartProductProps) {
  const { addToCart, removeToCart, loadingCart } = useContext(CartContext);

  const iconStyle: IconStyle = {
    name: 'minus',
  };

  const plusIconStyle: IconStyle = {
    name: 'plus',
    color: theme.colors.white,
  };

  return (
    <Container>
      <InfoArea>
        <PhotoArea>
          <Photo source={{ uri: product.image }} />
        </PhotoArea>
        <InfoTextArea>
          <Name numberOfLines={1}>{product.title}</Name>
          <Description numberOfLines={2}>{product.description}</Description>
          <Price>$ {Number(total).toFixed(2)}</Price>
        </InfoTextArea>
      </InfoArea>
      {loadingCart ? (
        <ActivityIndicator color={theme.colors.pink} size="small" />
      ) : (
        <AmountArea>
          <ButtonAmount onPress={() => removeToCart(product)}>
            <Icon {...iconStyle} />
          </ButtonAmount>
          <AmountText>{amount}</AmountText>
          <ButtonAmount onPress={() => addToCart(product)} background={theme.colors.pink}>
            <Icon {...plusIconStyle} />
          </ButtonAmount>
        </AmountArea>
      )}
    </Container>
  );
}

import { useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../routes/app.routes';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  Header,
  HeaderButton,
  Icon,
  PhotoArea,
  Photo,
  Title,
  Name,
  Description,
  ContentArea,
  Line,
  PriceArea,
  Price,
  RatingArea,
  RatingInfoArea,
  RatingCount,
  RatingRate,
  ButtonAddToCart,
  ButtonText,
} from './styles';

import { CartContext } from '../../context/CartContext';
import { IProductProps } from '../../@types/Products';

interface RouteParams {
  productId: number;
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'IProduct'>;

export default function IProduct({ route }: ScreenProps) {

  const { addToCart } = useContext(CartContext);

  const navigation = useNavigation();

  const {
    productId,
    id,
    category,
    title,
    image,
    description,
    price,
    rating,
  } = route.params as RouteParams;

  const product: IProductProps = {
    productId,
    id,
    category,
    title,
    image,
    description,
    price,
    rating: rating || { rate: 0, count: 0 },
  };

  return (
    <Container>
      <ContentArea showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <Header>
            <Title >Detalhes do Produto</Title>
            <HeaderButton onPress={() => navigation.goBack()}>
              <Icon name="close" />
            </HeaderButton>
          </Header>
        </SafeAreaView>

        <PhotoArea>
          <Photo source={{ uri: product.image }} />
        </PhotoArea>

        <Name>{product.title}</Name>
        <Description>{product.description}</Description>
        <Line />
        <PriceArea>
          <Price>$ {Number(product.price).toFixed(2)}</Price>
          <RatingArea>
            <RatingInfoArea>
              <Icon name="star" color={"#dfbac1"} size={16} />
              <RatingRate>{product.rating.rate}</RatingRate>
            </RatingInfoArea>
            <RatingCount>Reviews {product.rating.count}</RatingCount>
          </RatingArea>
        </PriceArea>

        <ButtonAddToCart
          onPress={() => addToCart(product)}
        >
          <ButtonText>Adicionar ao carrinho</ButtonText>
        </ButtonAddToCart>
      </ContentArea>
    </Container >
  );
}
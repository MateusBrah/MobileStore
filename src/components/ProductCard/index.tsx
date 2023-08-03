import { useNavigation } from '@react-navigation/native';
import {
  Container,
  PhotoArea,
  Photo,
  RatingArea,
  NumberRating,
  Icon,
  Name,
  Description,
  NameArea,
  Price,
} from './styles';
import { IProductProps } from '../../@types/Products';

export default function ProductCard({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
  productId,
}: IProductProps) {

  const navigation = useNavigation();

  const handleProductScreen = () => {
    const data = {
      id,
      category,
      description,
      image,
      price,
      rating,
      title,
      productId
    };

    navigation.navigate('IProduct', data);
  };

  return (
    <Container onPress={handleProductScreen}>
      <PhotoArea>
        <Photo source={{ uri: image }} />
        <RatingArea>
          <Icon name="star" />
          <NumberRating>{rating.rate}</NumberRating>
        </RatingArea>
      </PhotoArea>
      <NameArea>
        <Name>
          {
            title.length > 15 ? `${title.substr(0, 15)}...` : title
          }
        </Name>
        <Price>$ {Number(price).toFixed(2)}</Price>
      </NameArea>
      <Description numberOfLines={2}>
        {description}
      </Description>

    </Container>
  );
}

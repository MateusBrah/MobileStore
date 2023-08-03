import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';

import { Container, EmptyArea, EmptyText, InputSearchArea, InputSearch, ButtonSearch, Icon } from './styles';
import api from '../../services/api';
import ProductCard from '../../components/ProductCard';
import theme from '../../themes/theme';
import { CarouselItem } from '../../components/Carousel';
import { IProductProps, IProduct } from '../../@types/Products';
import SearchIcon from '../../components/icons/SearchIcon';
import CloseIcon from '../../components/icons/CloseSearch';
import CustomCarousel from '../../components/Carousel';

type Category = string;

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: 'Item 1',
    imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 2,
    title: 'Item 2',
    imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    id: 3,
    title: 'Item 3',
    imageUrl: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 4,
    title: 'Item 4',
    imageUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
];

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<Category | null>(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await api.get<IProduct[]>('/products');

      if (response.data) {
        setProducts(response.data as IProductProps[]);
      }
    } catch (error) {
      console.log('ERROR: ', error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await api.get<Category[]>('/products/categories');

      if (response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      (!categoryFilter || product.category === categoryFilter) &&
      (search ? product.title.toLowerCase().includes(search.toLowerCase()) : true)
    );
  }, [search, products, categoryFilter]);

  const renderItem = ({ item }: ListRenderItemInfo<IProductProps>) => <ProductCard {...item} />;

  const handleCategoryFilterChange = (selectedCategory: Category | null) => {
    setCategoryFilter(selectedCategory);
  };

  const renderHeader = () => (
    <>
      <SafeAreaView>
        <InputSearchArea>
          <InputSearch
            placeholder="Buscar na TudoAqui"
            value={search}
            onChangeText={(text: string) => setSearch(text)}
          />
          {search ? (
            <ButtonSearch onPress={() => setSearch('')}>
              <CloseIcon size={30} color="red" />
            </ButtonSearch>
          ) : (
            <ButtonSearch>
              <SearchIcon size={30} />
            </ButtonSearch>
          )}
        </InputSearchArea>
        <StatusBar style="dark" />

        <View>
          <Picker
            selectedValue={categoryFilter}
            onValueChange={handleCategoryFilterChange}>
            <Picker.Item label="Tudo" value={null} />
            {categories.map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>
        <CustomCarousel data={carouselData} />
      </SafeAreaView>
    </>
  );

  return (
    <Container>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

      {filteredProducts?.length <= 0 && !loadingProducts && (
        <EmptyArea>
          <Lottie
            source={require('../../assets/animations/search-empty.json')}
            autoPlay
            loop
            style={{ width: 250 }}
          />
          <EmptyText>Nenhum resultado foi encontrado</EmptyText>
        </EmptyArea>
      )}

      {loadingProducts && (
        <ActivityIndicator color={theme.colors.pink} size="large" />
      )}
    </Container>
  );
}

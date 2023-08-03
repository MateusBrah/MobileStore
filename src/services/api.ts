import { Alert } from 'react-native';
// biblioteca responsavel por requisições HTTP.
import axios from 'axios';
// interface que descreve a estrutura dos objetos de produto que serão retornados pela API.
import { IProduct } from '../@types/Products';

// variavel de ambiente
const API_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: API_URL,
});

export default api;

// chamada GET para a rota /products função assíncrona que retorna uma promise contendo um array de objetos
export async function fetchProducts(): Promise<IProduct[]> {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    //trativa de erro.
    Alert.alert(
      'Oops!',
      'Desculpe.',
      [{ text: 'Ok, Entendi!', onPress: () => console.log("Error fetching products:", error) }],
      { cancelable: false }
    );
    return [];
  }
}
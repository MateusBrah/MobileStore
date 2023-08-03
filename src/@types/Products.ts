
export interface IProductCartProps {
  product: IProductProps;
  amount: number;
  total: number;
};

export interface IProductProps {
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
  }
};

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
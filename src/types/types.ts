export interface productApiProp {
  readonly id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type productsProp = {
  products: productApiProp[];
};

export interface productProp{
    product:productApiProp
}
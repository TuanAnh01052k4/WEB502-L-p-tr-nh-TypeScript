// Products

export type TReviews = {
  user: string;
  comment: string;
};

export type TProduct_slide = {
  img: string;
};

export type TProduct = {
  id?: number | string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage?: number | undefined;
  discountedPrice: number;
  image?: string;
  weight: string;
  description: string;
  manufacturer: string;
  expiryDate: string;
  ingredients: string[];
  origin: string;
  category?: string;
  rating?: number;
  reviews: TReviews[];
  product_slide?: TProduct_slide[];
  barcode: string;
};

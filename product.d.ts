//This file contains types for the product layer
interface Product {
  id: string;
  name: string;
  type: string;
  quantity: number;
  alertQuantity: number;
  buyingPrice: number;
  sellingPrice: number;
}

type ProductSell = Omit<Product, "buyingPrice">;

type ProductSellAction = {
  type: "ADD" | "REMOVE" | "LIST";
  payload: number | Array<ProductSell>;
};

type ProductSellState = Array<ProductSell>;

import { Reducer } from "react";

export const productReducer: Reducer<ProductSellState, ProductSellAction> = (
  products,
  action
) => {
  switch (action.type) {
    case "ADD":
      return {
        ...products,
      };
    case "REMOVE":
      return {
        ...products,
      };
    case "LIST":
      if (!Array.isArray(action.payload)) return products;
      return action.payload;
    default:
      throw Error("Unknown action: " + action.type);
  }
};

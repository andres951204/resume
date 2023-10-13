import { useReducer, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getSellingProducts } from "../services/Product";
import { productReducer } from "../reducers/productSellReducer";

const initialState = [
  {
    id: "",
    name: "",
    quantity: 0,
    type: "candy",
    alertQuantity: 5,
    buyingPrice: 10300,
    sellingPrice: 700,
    sellQuantity: 0
  },
];

function Sales() {
  const [products, dispatch] = useReducer(productReducer, initialState);

  const getIntialState = async () => {
    const productList = await getSellingProducts();

    dispatch({
      type: "LIST",
      payload: productList,
    });
  };

  useEffect(() => {
    getIntialState();
  }, []);

  return (
    <>
      <div className="grid grid-cols-sell-grid-2 gap-y-6 gap-x-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            sellQuantity={products[index].sellQuantity}
            price={product.sellingPrice}
            quantity={product.quantity}
            alertQuantity={product.alertQuantity}
          />
        ))}
      </div>
    </>
  );
}

export default Sales;

import { useContext } from "react";
import candyUrl from "../assets/candy.png";
import { ThemeContext } from "../context/theme";

type Props = {
  name: string;
  price: number;
  quantity: number;
  alertQuantity: number;
  sellQuantity: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductCard({
  name,
  price,
//   quantity,
//   alertQuantity,
  sellQuantity,
}: Props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`relative flex flex-col justify-center items-center w-36 h-36 shadow-lg rounded-xl p-4 after:absolute 
        after:w-3 after:h-full after:top-0 after:left-0 after:bg-${theme.color} after:rounded-l-xl cursor-pointer active:outline active:outline-1 
        active:outline-${theme.color} active:transition-all`}
      >
        <img src={candyUrl} alt="Product image" />
        <div className="font-medium">{name}</div>
        <div className="font-medium">${price}</div>
        {sellQuantity > 0 && (
          <div
            className="absolute flex justify-center items-center -top-1 -right-1 w-8 h-8 bg-pink rounded-full
            text-white font-medium "
          >
            {sellQuantity}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductCard;

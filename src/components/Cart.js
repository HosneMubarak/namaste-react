import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("handleClearCart");
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="mt-2 bg-black rounded-lg text-white px-4 py-1"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length == 0 && (
          <h1>Card is empty. Please add item to card.</h1>
        )}
        <ItemLists items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;

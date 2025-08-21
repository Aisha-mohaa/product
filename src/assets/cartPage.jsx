import { useSelector } from "react-redux";

function CartPage() {
  const items = useSelector((e) => e.cart.items);

  return (
    <div className="w-[600px] bg-gray-100 border border-gray-800 p-4 rounded-lg ">

      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      {items.map((xogtda, index) => (
          <div
          key={index}
          className="flex items-center gap-6 bg-white shadow-md p-3 mb-4 rounded-lg">
          <img
            className="w-24 h-24 object-cover rounded-md border"
            src={xogtda.image}
            alt={xogtda.title}
            
            />

          <div>
            <h1 className="text-xl font-semibold">
              {xogtda.title.length > 15
                ? xogtda.title.substring(0, 15) + "..."
                : xogtda.title}
            </h1>
            <h1 className="text-lg font-bold text-green-600">
              ${xogtda.price}
            </h1>
          </div>
        </div>
      ))}
      </div>
  );
}

export default CartPage;

import { useEffect, useState } from "react";
import axios from "axios";
import { addCart } from "./redux/reducer/couter";
import img from "./gusha.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, Links } from "react-router-dom";
import CartPage from "./cartPage";
 
function Header() {
  const cartItems = useSelector((state) => state.cart.items); // count ka ku hel items.length
  const dispatch = useDispatch();

  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleReadData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  };

  const filterData = Data.filter((xog) => {
    const searchData =
      xog.title.toLowerCase().includes(search.toLowerCase()) ||
      xog.category.toLowerCase().includes(search.toLowerCase());
    const selectCategory = category ? xog.category === category : true;
    return searchData && selectCategory;
  });

  const handleCart = (item) => {
    dispatch(addCart(item));
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <>
      <div className="flex justify-around bg-green-800 px-12 py-3">
        <h1 className="text-white text-4xl ">JM9</h1>
        <ul className="flex justify-around gap-8 text-white text-xl ">
          <Link to="/"><li>Header</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link><li>Contact</li></Link>
        </ul>
        <div className="cursor-pointer flex items-center gap-2">
          <h1 className="text-2xl text-white mb-20 pl-20 ">({cartItems.length})</h1>
          <Link to="/CartPage"> <i className="text-4xl fa-solid text-white fa-shopping-cart"></i></Link>
        </div>
      </div>

      <div className="flex justify-around mt-12 ml-3 mr-3">
        <div>
          <h1 className="text-5xl">Best Place For Shopping <br /> In Your Area</h1>
          <h3 className="text-3xl mt-3">
            We got you everything that you need. <br /> visit us anywhere and anytime
          </h3>
          <button className="bg-green-700 text-white px-12 py-3 rounded-lg mt-3">
            Explore
          </button>
        </div>
        <div>
          <img className="w-[400px] h-[400px]" src={img} alt="" />
        </div>
      </div>

      <div className="flex gap-20 mx-40 mt-20">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 h-10 bg-gray-500 text-white rounded-lg pl-3 text-2xl"
          placeholder="Search product"
        />
        <div className="text-2xl space-x-10">
          <input name="category" value="" onChange={() => setCategory("")} type="radio" />All
          <input name="category" value="electronics" onChange={() => setCategory("electronics")} type="radio" />electronics
          <input name="category" value="jewelery" onChange={() => setCategory("jewelery")} type="radio" />jewelery
          <input name="category" value="men's clothing" onChange={() => setCategory("men's clothing")} type="radio" />men's clothing
          <input name="category" value="women's clothing" onChange={() => setCategory("women's clothing")} type="radio" />women's clothing
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        {filterData.length > 0 ? (
          filterData.map((item) => (
            <div key={item.id} className="w-72 h-[350px] border border-gray-600 ml-3">
              <div>
                <img className="w-[290px] h-[200px]" src={item.image} alt="" />
              </div>
              <div className="flex justify-around">
                <h1 className="text-3xl font-semibold">
                  {item.title.length > 10 ? item.title.substring(0, 10) + "..." : item.title}
                </h1>
                <h1 className="text-3xl font-semibold">${item.price}</h1>
              </div>
              <button
                onClick={() => handleCart(item)}
                className="bg-green-700 text-white px-12 py-3 rounded-lg mt-8 ml-3"
              >
                Add cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-4xl ml-[40%] mt-10">There is no data</p>
        )}
      </div>
    </>
  );
}

export default Header;

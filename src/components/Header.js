import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnname] = useState(["Login"]);

  const onlineStatus = useOnlineStatus();
  // useEffect(()=>{},[])

  //Subscribing to the store using selector hook

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-23" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-18 text-2xl">
          <li className="px-4">Onine Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            {" "}
            <Link to={"/cart"}>Cart-{cartItems.length} Items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

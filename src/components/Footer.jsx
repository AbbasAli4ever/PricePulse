import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-auto sm:h-[300px] bg-slate-200 flex flex-col sm:flex-row mt-24">
      <div className="w-full sm:w-3/12 h-full flex flex-col pl-0 sm:pl-5">
        <h3 className="mt-8 mb-2 font-bold">GET IN TOUCH</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          explicabo quae deserunt.
        </p>
        <ul className="flex w-6/12 justify-between mt-4">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-2/12 h-full flex flex-col list-none item-start sm:items-center">
        <h3 className="my-8 font-bold">Main Menu</h3>
        <ul>
          <li className="mb-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales">Shop</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-2/12 h-full flex flex-col list-none item-start sm:items-center">
        <h3 className="my-8 font-bold">Genre</h3>
        <ul>
          <li className="mb-4">
            <NavLink to="/sales/Men">Men</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/Women">Women</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/Kids">Kids</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/accessories">Assesories</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-2/12 h-full flex flex-col list-none item-start sm:items-center">
        <h3 className="my-8 font-bold">Categories</h3>
        <ul>
          <li className="mb-4">
            <NavLink to="/sales/shirts">Shirts</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/pants">Pants</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/shoes">Shoes</NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/sales/suit">Suits</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-3/12 h-full pl-0 md:pl-5">
       <h3 className="mt-8 mb-4 font-bold">NEWSLETTER</h3>
        <form action="" className="flex flex-col w-9/12 items-start">
          <input type="text" placeholder="example@gmail.com" className="border-0 border-b-2 bg-transparent pl-0 focus:ring-0 w-full" />
          <button className="mt-5 py-1 px-6 md:py-3 md:px-12 bg-black text-white rounded-full hover:bg-red-900">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

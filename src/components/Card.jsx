import Image from "../assets/Images/glass.jpg";
import Swal from "sweetalert2";
import { useState } from "react";
const Card = ({ id, title, image, orignal_price, sale_price, brand, category}) => {
  const [isfavorite, setIsfavorite] = useState(false);

    const handleSaveItem = () => {
      console.log(isfavorite)
    if (!isfavorite) {
      setIsfavorite(true);
      showModal();
    } else {
      setIsfavorite(false);
    }
  };
  const showModal = () => {
    Swal.fire({
      title: "Saved!",
      text: "Item has been added to wishlist.",
      icon: "success"
    }
    );
  };
  return (
    <div className="flex flex-col w-[250px] h-[500px] mb-5 ml-16 sm:ml-0">
      <div
        className="relative flex flex-col items-center justify-between w-full h-4/6 overflow-hidden bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:bg-none before:top-0 before:left-0 before:bg-cover before:bg-center  before:w-full before:h-full hover:before:bg-black before:opacity-30 before:z-0 group"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          onClick={handleSaveItem}
          className="absolute right-3 z-10 flex w-9 h-9 justify-center items-center"
        >
           { isfavorite ?
            (<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="purple"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="purple"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>)
           : 
            (<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="white"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>)
          }
        </button>
        <a
          href={`/details/${id}`}
          className="absolute bottom-0 translate-y-24 z-10 flex px-8 py-4 bg-slate-300 h-12 w-48 mb-8 justify-center items-center hover:bg-red-700 hover:text-white
              transition duration-300 rounded-3xl group-hover:translate-y-0 "
        >
          View Item
        </a>
      </div>
      <div className="flex flex-col w-full h-2/6 bg-slate-100 list-none pl-3 pt-2 bg-opacity-20 text-start">
        <li><b>Title:</b> {title}</li>
        <li><b>Old Price:</b> {orignal_price}</li>
        <li><b>New Price:</b> {sale_price}</li>
        <li><b>Brand:</b> {brand}</li>
        <li><b>Category:</b> {category}</li>
      </div>
    </div>
  );
};

export default Card;

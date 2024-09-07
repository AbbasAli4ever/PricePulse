import CardSlider from '../components/CardSlider';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect} from 'react';

export default function ShowItem({array}) {
  const params = useParams();
  const [data, setData] = useState({});
  //Function use to get each sale individually
  const getApi = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/getsale/${params.id}`
    );
    console.log(res.status);
    setData(res.data);
  };
  //Filtering the sales array on different categories
  const favArray = array.filter((dataobj) => {
    return (
      dataobj.brand === data.brand &&
      dataobj.sub_category === data.sub_category &&
      dataobj.category === data.category
    );
  });
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-auto mt-20">
        <div className=" flex items-center justify-end w-full h-auto lg:h-full lg:w-1/2">
          <div
            className="w-8/12 h-[600px] mx-auto lg:mr-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
        </div>
        <div className="flex items-center justify-start w-full h-auto lg:h-full lg:w-1/2">
          <div className="flex flex-col w-8/12 lg:w-10/12 h-[600px] mx-auto lg:ml-4">
            <h3 className="text-3xl mb-5">
              {data.title}
            </h3>

            <li className="list-none text-1xl  decoration mb-3 font-bold">
              ORIGINAL PRICE: <s className="text-red-600">{data.orignal_price}</s>
            </li>
            <li className="list-none text-1xl  decoration mb-3 font-bold">
              DISCOUNTED PRICE: <span className="text-green-600">{data.sale_price}</span>
            </li>

            <li className="list-none text-1xl font-bold mb-3">
              PERCENTAGE: --
            </li>
            <li className="list-none text-1xl font-bold mb-3">
              CATEGORY: {data.category}
            </li>
            <li className="list-none text-1xl font-bold mb-3">
              SUB CATEGORY: {data.sub_category}
            </li>
            <li className="list-none text-1xl font-bold mb-3">COLOR: None</li>
            <li className="list-none text-1xl font-bold mb-3">
              BRAND: {data.brand}
            </li>
            <li className="list-none text-1xl font-bold mb-3">
              DESCRIPTION:{" "}
              <span className="font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                eaque alias vitae facere facilis quis illum natus eum molestiae
                qui. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, quisquam.
              </span>
            </li>
            <a
              href={data.post_link}
              target='_blank'
              className="bg-black text-white w-5/6 m-auto py-3 flex justify-center rounded-full hover:bg-red-800 transition duration-200 ease-in-out"
            >
              Explore Offer
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-auto mt-16">
        <CardSlider array={favArray.slice(0,15)} />
      </div>
    </div>
  );
}

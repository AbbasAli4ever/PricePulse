import {useEffect, useState } from "react";
import axios from "axios";
export default function ProductArray() {
    
  const [data, setData] = useState([]);
  //Function used to get all sales
  const getApi = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/sales/`);
      setData(res.data);
    } catch (error) {
      console.error("An error occured while fetching data: ", error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (data);
};

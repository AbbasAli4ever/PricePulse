import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SalesLayout from "./SalesLayout";
import ItemGrid from "./ItemGrid";
import ItemsBanner from "./ItemsBanner";

const SearchBox = () => {
  const param = useParams();
  const [data, setData] = useState([]);
  //Function use to get searched sales
  const getApi = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/sales/?search=${param.slug}`
    );
    console.log(res.status);
    setData(res.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <SalesLayout>
      <ItemsBanner name={param.slug} />
      <ItemGrid array={data} />
    </SalesLayout>
  );
};

export default SearchBox;

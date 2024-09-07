import React from "react";
import ItemsBanner from "./ItemsBanner";
import ItemGrid from "./ItemGrid";
import { useParams } from "react-router-dom";
import SalesLayout from "./SalesLayout";
import ProductArray from "./ProductArray";

export default function FilteredLayout() {
  const params = useParams();
  const prodArray = ProductArray();
  const newArray = JSON.parse(JSON.stringify(prodArray));
  const brandArray = JSON.parse(JSON.stringify(prodArray));
  const titleArray = JSON.parse(JSON.stringify(prodArray));

  function getSalePriceNumber(product) {
    return parseFloat(product.sale_price.replace(/[^0-9.-]+/g, ""));
  }
  
  
  let filteredArray = [];
  if (params.slug == "Men" || params.slug == "Women" || params.slug == "Kids") {
    filteredArray = prodArray.filter((dataobj) => {
      return dataobj.category === params.slug;
    });
  }
  else if (params.slug == "shirts" || params.slug == "pants" || params.slug == "shoes" || params.slug == "suit"  || params.slug == "accessories") {
    filteredArray = prodArray.filter((dataobj) => {
      return dataobj.sub_category === params.slug;
    });
  }
  else if (params.slug == "Outfitters" || params.slug == "Breakout" || params.slug == "Monark" || params.slug == "Diners" || params.slug == "Alkaram" || params.slug == "Sana Safinaz" || params.slug == "Service") {
    filteredArray = prodArray.filter((dataobj) => {
      return dataobj.brand === params.slug;
    });
  }
  else if (params.slug == "tee") {
    filteredArray = prodArray.filter((dataobj) => {
      return dataobj.sub_category_type === params.slug;
    });
  }
  else if (params.slug == "low to high") {
    filteredArray = newArray.sort((a, b) => getSalePriceNumber(a) - getSalePriceNumber(b));
  }
  else if (params.slug == "high to low") {
    filteredArray = newArray.sort((a, b) => getSalePriceNumber(a) - getSalePriceNumber(b));
    filteredArray.reverse();
  }
  else if (params.slug == "sort by brand") {
    filteredArray =  brandArray.sort((a, b) => {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
          return -1;
      }
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
          return 1;
      }
      return 0;
  });
  }
  else if (params.slug == "sort by title") {
    filteredArray = titleArray.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
      }
      return 0;
  });
  }
  else{
    filteredArray = prodArray.filter((dataobj) => {
      return dataobj.sub_category === 'None';
    });
  }

  


  return (
    <SalesLayout>
      <ItemsBanner name={params.slug} />
      <ItemGrid array={filteredArray} />
    </SalesLayout>
  );
}

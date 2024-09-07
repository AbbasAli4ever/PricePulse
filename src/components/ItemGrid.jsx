import { useState } from "react";
import Card from "./Card";
import FilterBox from "./FilterBox";

export default function ItemGrid({ array }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);

  // Logic for displaying page numbers
  const totalPageNumbers = Math.ceil(array.length / postsPerPage);
  // Function to handle previous page click
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page click
  const nextPage = () => {
    if (currentPage < totalPageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filterOption1 = [
    { name: 'Low to High', href: '/sales/low to high'},
    {name: 'High to Low', href:'/sales/high to low'},
  ]
  const filterOption2 = [
    { name: 'Brand Wise', href: '/sales/sort by brand'},
    {name: 'Title Wise', href:'/sales/sort by title'},
  ]
  return (
    <div className="flex w-9/12 justify-center items-center flex-col">
      <div className="flex flex-col sm:flex-row w-full h-14 items-center pl-14 justify-center lg:justify-start">
        <div><FilterBox name={'Price Filter'} optionArray={filterOption1} /></div>
        <div className="ml-3"><FilterBox name={'Sort by'} optionArray={filterOption2}/></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-3 ml-3 gap-x-20">
        {currentPosts.map(
          ({
            id,
            brand,
            post_link,
            title,
            image,
            category,
            sub_category,
            sub_category_type,
            offer_percentage,
            orignal_price,
            sale_price,
            color,
            description,
          }) => {
            return (
              <Card
                id={id}
                title={title}
                image={image}
                orignal_price={orignal_price}
                sale_price={sale_price}
                brand={brand}
                category={category}
              />
            );
          }
        )}
      </div>
      <nav class="flex items-center gap-x-1">
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          onClick={previousPage}
        >
          <svg
            class="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span aria-hidden="true" class="sr-only">
            Previous
          </span>
        </button>
        <div class="flex items-center gap-x-1">
          <span class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            {currentPage}
          </span>
          <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
            of
          </span>
          <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
            {totalPageNumbers}
          </span>
        </div>
        <button
          type="button"
          class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          onClick={nextPage}
        >
          <span aria-hidden="true" class="sr-only">
            Next
          </span>
          <svg
            class="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}

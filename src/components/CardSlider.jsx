import ProductArray from "./ProductArray";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  breakpoints,
  autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";

export default function CardSlider({ array }) {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl font-bold">Featured Products</h2>
      <div className="flex items-center justify-center w-11/12 mx-auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {array.map(
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
                <SwiperSlide className="pt-20 pb-5">
                  <Card
                    id={id}
                    title={title}
                    image={image}
                    orignal_price={orignal_price}
                    sale_price={sale_price}
                    brand={brand}
                    category={category}
                  />
                </SwiperSlide>
              );
            }
          )}
          <SwiperSlide>
            <a
              href="/sales"
              className="flex w-16 h-16 rounded-full bg-slate-400 items-center justify-center ml-20 mt-52 bg-opacity-50 hover:bg-opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

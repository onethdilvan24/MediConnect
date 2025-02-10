import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lankahospital from "../Images/lanka-hospital.jpg"; // Import the image
import Durdans from "../Images/Durdans.jpg"; // Import the image
import Naweloka from "../Images/naweloka.jpeg"; // Import the image
import Asiri from "../Images/Asiri.png"; // Import the image
import Hemas from "../Images/hemas.png"; // Import the image
import Apollo from "../Images/Apollo_Hospitals_Logo.jpg"; // Import the image

const cards = [
  {
    img: Lankahospital, // Use imported image here
    title: "Lanka Hospital",
    description:
      "Address: No. 578, Elvitigala Mawatha, Narahenpita, Colombo 05, Sri Lanka",
  },
  {
    img: Durdans, // Use the same image or replace it with another imported image
    title: "Durdans Hospital",
    description:
      "Address: #3 Alfred Place Colombo 03",
  },
  {
    img: Naweloka,
    title: "Nawaloka Hospitals",
    description: "Address: Nawaloka Hospitals PLC, Colombo 2, Sri Lanka.",
  },
  {
    img: Asiri,
    title: "Asiri Hospital",
    description: "Address: No.10 Wakwella Road, Galle 80000, Sri Lanka",
  },
  {
    img: Hemas,
    title: "Hemas Hospitals",
    description: "Address: 389, Negombo Road, Wattala.",
  },
  {
    img: Apollo,
    title: "Apollo Hospitals",
    description: "Address: 9 R. A. De Mel Mawatha, Colombo 00400, Sri Lanka",
  },
];

const CardCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="py-6"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[350px] bg-[#DFF6FF] dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col">
              {/* Fixed Image Size */}
              <img className="w-full h-[180px] object-cover" src={card.img} alt={card.title} />
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h5 className="text-lg font-bold text-[#06283D]">{card.title}</h5>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;

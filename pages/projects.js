import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { projectData } from "../utils/projects-data";

export default function Projects() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {projectData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Card {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

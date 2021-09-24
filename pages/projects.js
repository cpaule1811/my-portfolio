import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper";
import { projectData } from "../utils/projects-data";

export default function Projects() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}
        effect="cube"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        cubeEffect={{
          shadow: false,
          shadowOffset: -5,
          shadowScale: 1,
          slideShadows: false,
        }}
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

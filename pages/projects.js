import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip, EffectCube } from "swiper";
import { projectData } from "../utils/projects-data";

export default function Projects() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination, EffectFlip, EffectCube]}
        effect="cube"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ loop: true }}
        pagination={{ clickable: true, loop: true }}
        loop={true}
        cubeEffect={{
          shadow: false,
          shadowOffset: -5,
          shadowScale: 1,
          slideShadows: false,
        }}
      >
        {projectData.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <Card {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Daniel for anyone looking for a talented and professional designer.",
    author: "Paramananda Panda",
    position: "Director",
    company: "Odion Learning",
    image: "/images/testimonials/sagar.png",
    companyLogo: "/images/testimonials/odion.png",
  },
  {
    quote:
      "Working with Nihar was an absolute pleasure. Their technical expertise and innovative approach helped us transform our vision into reality. The attention to detail and commitment to quality was exceptional.",
    author: "Sagar Kishore",
    position: "Data Analyst",
    company: "Servicenow",
    image: "/images/testimonials/sagar.png",
    companyLogo: "/images/testimonials/servicenow.png",
  },
  {
    quote:
      "The level of professionalism and technical expertise demonstrated throughout our project was outstanding. Their ability to understand our requirements and deliver beyond expectations made them a valuable partner.",
    author: "Animesh Panda",
    position: "Business Relationship Manager",
    company: "Civil Aviation Authority of New Zealand",
    image: "/images/testimonials/animesh.png",
    companyLogo: "/images/testimonials/caa.png",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-neutral-300 !opacity-100",
            bulletActiveClass: "!bg-neutral-950",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
          }}
          className="!pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-10 md:p-12 h-full group border border-neutral-200">
                <div className="flex flex-col justify-between h-full space-y-8">
                  <p className="text-neutral-600 text-xl md:text-2xl leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-xl text-neutral-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-neutral-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="relative h-10 w-36 opacity-70">
                      <Image
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        fill
                        className="object-contain object-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/testpic.png",
      text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
      name: "Jane Doe",
      role: "Professional Chef",
    },
    {
      id: 2,
      image: "/images/testpic.png",
      text: "Fresh Harvest has the best selection of fruits and vegetables I've ever seen! The prices are unbeatable, and the quality is top-notch. I recommend Fresh Harvest to all my friends and family.",
      name: "John Smith",
      role: "Food Blogger",
    },
    {
      id: 3,
      image: "/images/testpic.png",
      text: "The produce from Fresh Harvest always exceeds my expectations. It's fresh, affordable, and delivered right to my door. I can't imagine shopping anywhere else for fruits and vegetables.",
      name: "Emily White",
      role: "Home Cook",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Section Header */}
      <div className="text-center w-[560px] mx-auto mb-8">
        <p className="text-green-600 bg-green-100 text-[20px] font-medium inline-block px-3 py-1 rounded-lg">
          Testimonial
        </p>
        <h1 className="text-[45px] font-bold text-black">
          What Our Customers Say
        </h1>
        <p className="text-gray-600">
          Don't just take our word for it—here's what some of our customers have
          to say about their experience with Fresh Harvest.
        </p>
      </div>

      {/* Testimonial Slider */}
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "1rem",
          pagination: true,
          arrows: false, // Removed left and right arrows
          autoplay: true,
          interval: 3000,
        }}
        aria-label="Customer Testimonials"
        className="testimonial-slider"
      >
        {testimonials.map((testimonial) => (
          <SplideSlide key={testimonial.id}>
            <div className="flex flex-col md:flex-row items-center gap-24 w-[1013px] mx-auto">
              {/* Customer Image */}
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover"
                />
              </div>
              {/* Testimonial Text */}
              <div className="bg-grey-50 md:w-[640px] p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <h3 className="text-black font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .splide__pagination {
          margin-top: 20px;
        }
        .splide__pagination__page {
          background-color: #749b3f; /* Green bullet points */
        }
        .splide__pagination__page.is-active {
          background-color: #499a1f; /* Darker green for active bullet points */
        }
      `}</style>
    </div>
  );
};

export default Testimonial;

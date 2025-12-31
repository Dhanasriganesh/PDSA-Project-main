import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    company: 'Humana',
    name: 'James Smith',
    position: 'Creative Director',
    text: 'In my history of working with PDSA Technologies, I can honestly say that there is not one company that I\'ve ever worked with that has better service.',
    rating: 4,
  },
  {
    id: 2,
    company: 'Microsoft',
    name: 'Michael Thompson',
    position: 'Sales Manager',
    text: 'I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with PDSA Technologies because I just do not want to be sold. I want to trust that what I am getting is going to be good.',
    rating: 5,
  },
  {
    id: 3,
    company: 'IBM',
    name: 'Tim Bogemans',
    position: 'Managing Partner',
    text: 'We worked with PDSA Technologies in developing our SharePoint Intranet. The development & implementation process was very smooth & delivered the exact results we were expecting. We\'ll surely work with them in the future.',
    rating: 5,
  },
  {
    id: 4,
    company: 'Oracle',
    name: 'Ross Shamelashvili',
    position: 'Manager, Development Operations',
    text: 'PDSA Technologies offers a high caliber of resources skilled in Microsoft Azure .NET, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by PDSA Technologies development teams & executive management.',
    rating: 4,
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50/50 to-yellow-100/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Company Card */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-600">{currentTestimonial.company}</h3>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xl ${
                  i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text with Large Quotes */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-start justify-center gap-4">
              {/* Left Quote */}
              <div className="text-6xl md:text-8xl text-orange-500 font-serif leading-none flex-shrink-0">
                "
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed flex-1 text-center">
                {currentTestimonial.text}
              </p>
              
              {/* Right Quote */}
              <div className="text-6xl md:text-8xl text-orange-500 font-serif leading-none flex-shrink-0">
                "
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
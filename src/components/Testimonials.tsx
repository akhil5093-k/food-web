
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testimonialData } from '@/data/testimonialData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who love QuickBite
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden max-w-sm mx-auto">
          <Card className="bg-quickbite-warm border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <img
                src={testimonialData[currentIndex].avatar}
                alt={testimonialData[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-quickbite-orange"
              />
              <div className="flex justify-center mb-4">
                {renderStars(testimonialData[currentIndex].rating)}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonialData[currentIndex].review}"
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                {testimonialData[currentIndex].name}
              </h4>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-quickbite-orange text-quickbite-orange hover:bg-quickbite-orange hover:text-white"
            >
              ←
            </Button>
            <div className="flex space-x-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-quickbite-orange' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-quickbite-orange text-quickbite-orange hover:bg-quickbite-orange hover:text-white"
            >
              →
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonialData.map((testimonial, index) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-quickbite-warm border-0">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-3 border-quickbite-orange group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic flex-grow">
                  "{testimonial.review}"
                </p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-quickbite-orange to-quickbite-red p-6 rounded-2xl text-white shadow-xl">
            <span className="text-lg font-medium">Ready to join our happy customers?</span>
            <Button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-quickbite-orange hover:bg-gray-100 px-6 py-2 font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

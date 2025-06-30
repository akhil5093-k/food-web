
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-quickbite-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                About <span className="text-gradient">QuickBite</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Founded in 2020, QuickBite has been revolutionizing food delivery with our commitment to 
                speed, quality, and customer satisfaction. What started as a small local service has grown 
                into the most trusted food delivery platform in the city.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is simple: to bring delicious, restaurant-quality meals to your doorstep 
                faster than ever before, while supporting local restaurants and creating jobs in our community.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-quickbite-orange mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-quickbite-orange mb-2">50+</div>
                  <div className="text-gray-600">Restaurant Partners</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-quickbite-orange mb-2">30 min</div>
                  <div className="text-gray-600">Average Delivery</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-quickbite-orange mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="QuickBite team preparing food"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-quickbite-orange mb-1">4.9⭐</div>
                <div className="text-gray-600 text-sm">Customer Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-quickbite-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Speed</h4>
              <p className="text-gray-600">Lightning-fast delivery without compromising on quality or freshness.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-quickbite-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Quality</h4>
              <p className="text-gray-600">We partner only with the best restaurants to ensure exceptional food quality.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-quickbite-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">❤️</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Care</h4>
              <p className="text-gray-600">Your satisfaction is our priority. We're here 24/7 to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

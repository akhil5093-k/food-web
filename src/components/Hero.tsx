
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Delicious Meals
          <br />
          <span className="text-quickbite-orange">Delivered Fast</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in max-w-2xl mx-auto">
          Satisfy your cravings with our wide variety of cuisines. From pizza to Indian delicacies, 
          we deliver fresh, hot meals right to your doorstep in 30 minutes or less.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            onClick={scrollToMenu}
            size="lg"
            className="bg-quickbite-orange hover:bg-quickbite-orange-dark text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            Order Now
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-quickbite-orange mb-2">30 min</div>
            <div className="text-gray-200">Average Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-quickbite-orange mb-2">1000+</div>
            <div className="text-gray-200">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-quickbite-orange mb-2">50+</div>
            <div className="text-gray-200">Menu Items</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

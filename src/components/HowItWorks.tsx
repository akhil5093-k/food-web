
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Meal",
      description: "Browse our extensive menu featuring pizza, burgers, Indian cuisine, desserts, and refreshing drinks. Select your favorites!",
      icon: "🍕"
    },
    {
      step: "02", 
      title: "Place Your Order",
      description: "Add items to your cart, customize your order, and securely checkout with your preferred payment method.",
      icon: "📱"
    },
    {
      step: "03",
      title: "Enjoy Fast Delivery", 
      description: "Sit back and relax! Our delivery team will bring your hot, fresh meal right to your doorstep in 30 minutes or less.",
      icon: "🚚"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your favorite meal delivered is easier than ever. Just follow these simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-quickbite-orange">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-quickbite-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-quickbite-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-quickbite-orange relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-quickbite-orange border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-quickbite-orange to-quickbite-red p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of satisfied customers who trust QuickBite for their meal delivery needs
            </p>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-quickbite-orange px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Start Ordering Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

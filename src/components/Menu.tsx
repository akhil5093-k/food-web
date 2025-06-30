
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { menuData, categories, MenuItem } from '@/data/menuData';
import { useToast } from '@/hooks/use-toast';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<MenuItem[]>([]);
  const { toast } = useToast();

  const filteredItems = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-quickbite-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of freshly prepared meals, crafted with the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-quickbite-orange hover:bg-quickbite-orange-dark text-white'
                  : 'border-quickbite-orange text-quickbite-orange hover:bg-quickbite-orange hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-quickbite-orange">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    onClick={() => addToCart(item)}
                    className="bg-quickbite-orange hover:bg-quickbite-orange-dark text-white px-6 py-2 transform hover:scale-105 transition-all duration-200"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-gray-700">
                Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
              </span>
              <span className="text-quickbite-orange font-semibold">
                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </span>
              <Button 
                size="sm"
                className="bg-quickbite-orange hover:bg-quickbite-orange-dark"
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;

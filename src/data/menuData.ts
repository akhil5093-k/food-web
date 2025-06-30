
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  // Pizza
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella & fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    category: "Pizza"
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni & extra cheese",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "Pizza"
  },
  {
    id: 3,
    name: "Veggie Deluxe",
    description: "Bell peppers, mushrooms, olives & onions",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
    category: "Pizza"
  },
  
  // Burgers
  {
    id: 4,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with lettuce, tomato & cheese",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "Burgers"
  },
  {
    id: 5,
    name: "Chicken Deluxe",
    description: "Grilled chicken with avocado & bacon",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
    category: "Burgers"
  },
  {
    id: 6,
    name: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&h=300&fit=crop",
    category: "Burgers"
  },
  
  // Indian
  {
    id: 7,
    name: "Butter Chicken",
    description: "Creamy tomato curry with tender chicken",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop",
    category: "Indian"
  },
  {
    id: 8,
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice with mixed vegetables",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d20d?w=400&h=300&fit=crop",
    category: "Indian"
  },
  {
    id: 9,
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in spiced tomato sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    category: "Indian"
  },
  
  // Desserts
  {
    id: 10,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    category: "Desserts"
  },
  {
    id: 11,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "Desserts"
  },
  {
    id: 12,
    name: "Cheesecake Slice",
    description: "Creamy New York style cheesecake",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
    category: "Desserts"
  },
  
  // Drinks
  {
    id: 13,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    category: "Drinks"
  },
  {
    id: 14,
    name: "Iced Coffee",
    description: "Cold brew with your choice of milk",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop",
    category: "Drinks"
  },
  {
    id: 15,
    name: "Mango Smoothie",
    description: "Creamy mango smoothie with yogurt",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1553530979-4c9aeebc4ad4?w=400&h=300&fit=crop",
    category: "Drinks"
  }
];

export const categories = ["All", "Pizza", "Burgers", "Indian", "Desserts", "Drinks"];

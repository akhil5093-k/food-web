
export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "QuickBite never disappoints! The food arrives hot and fresh every single time. Their pizza is absolutely amazing!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mike Chen",
    review: "Super fast delivery and great quality food. The Indian dishes are authentic and delicious. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Davis",
    review: "Love the variety of options available. The app is easy to use and the customer service is excellent!",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Rodriguez",
    review: "Best food delivery service in town! The burgers are incredible and always delivered within 30 minutes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  }
];

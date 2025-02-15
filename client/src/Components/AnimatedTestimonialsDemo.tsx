import { AnimatedTestimonials } from "../Components/ui/animated-testimonials";
import Food from "../Images/Food.jpg";
import Exercise from "../Images/Exercise.webp";
import Sleep from "../Images/Sleep.jpg";
import Stress from "../Images/Strees.jpg";
import Drink from "../Images/Drink Water.webp";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Eat a balanced diet by including fruits, vegetables, whole grains, lean proteins, and healthy fats while avoiding processed foods and excess sugar.",
      name: "Eat a Balanced Diet",
      designation: "Product Manager at TechFlow",
      src: Food,
    },
    {
      quote:
        "Exercise regularly by engaging in cardio, strength training, and flexibility workouts for at least 30 minutes daily to improve overall health.",
      name: "Exercise Regularly",
      designation: "CTO at InnovateSphere",
      src: Exercise,
    },
    {
      quote:
        "Get enough sleep by maintaining a consistent schedule, avoiding screens before bedtime, and ensuring 7-9 hours of quality rest each night.",
      name: "Get Enough Sleep",
      designation: "Operations Director at CloudScale",
      src: Sleep,
    },
    {
      quote:
        "Manage stress by practicing mindfulness, deep breathing, exercise, and engaging in hobbies while maintaining strong social connections for emotional well-being.",
      name: "Manage Stress",
      designation: "Engineering Lead at DataPro",
      src: Stress,
    },
    {
      quote:
        "Stay hydrated by drinking at least eight glasses of water daily, supporting digestion, energy levels, skin health, and overall bodily functions.",
      name: "Stay Hydrated",
      designation: "VP of Technology at FutureNet",
      src: Drink,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

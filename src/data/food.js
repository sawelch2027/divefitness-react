import breakfast from "../assets/images/greek yogurt.jpg";
import lunch from "../assets/images/quinoa bowl.jpg";
import dinner from "../assets/images/salmon.jpg";
import snack from "../assets/images/protien shake.jpg";

const food = [
  {
    title: "Breakfast",
    image: breakfast,
    description:
      "Greek yogurt bowl with fruit + granola. High protein, quick, and great for busy mornings.",
    goal: "High Protein",
    calories: "420",
    protein: "28g"
  },
  {
    title: "Lunch",
    image: lunch,
    description:
      "Chicken + rice + veggies with a simple sauce. Balanced macros that keep energy steady.",
    goal: "Balanced Macros",
    calories: "560",
    protein: "38g"
  },
  {
    title: "Dinner",
    image: dinner,
    description:
      "Lean protein + roasted potatoes + greens. Easy to scale up or down depending on your goal.",
    goal: "Flexible Portions",
    calories: "610",
    protein: "42g"
  },
  {
    title: "Snack",
    image: snack,
    description:
      "Protein shake + banana or a cottage cheese snack plate. Quick fuel without feeling heavy.",
    goal: "Quick Fuel",
    calories: "250",
    protein: "24g"
  }
];

export default food;
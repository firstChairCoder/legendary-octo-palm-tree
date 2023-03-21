import images from "./images";
import icons from "./icons";

const recipes = [
  {
    id: "r-1",
    name: "Avocado Toast with Smoked Salmon",
    rating: 4.8,
    people: 120,
    time: 30,
    image: images.recipe01,
    steps: [
      "1 slice of whole-wheat toast",
      "3 slices smoked salmon",
      "1/2 avocado",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper"
    ],
    preparation: [
      "Thinly slice half of an avovado. Keep slices together and start molding them into a line.",
      "Start folding one end inside and wrapping other end around in a towel.",
      "Spread the smoked salmon on the avocado slices and top with the remaining slices of avovado.",
      "Serve with a side of salad and a side of sour cream.",
      "Enjoy!"
    ]
  },
  {
    id: "r-2",
    name: "Citrus Sandwich with Avocado",
    rating: 4.8,
    people: 100,
    time: 30,
    image: images.recipe03,
    steps: [
      "1 slice of whole-wheat toast",
      "3 slices smoked salmon",
      "1/2 avocado",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper"
    ],
    preparation: [
      "Thinly slice half of an avovado. Keep slices together and start molding them into a line.",
      "Start folding one end inside and wrapping other end around in a towel.",
      "Spread the smoked salmon on the avocado slices and top with the remaining slices of avovado.",
      "Serve with a side of salad and a side of sour cream.",
      "Enjoy!"
    ]
  }
];

const breakfast = [
  {
    id: "b-1",
    name: "Keto Avocado Sandwich",
    image: images.recipe02
  },
  {
    id: "b-2",
    name: "Avocado Egg toast",
    image: images.recipe04
  },
  {
    id: "b-3",
    name: "Kiwi Avocado Salsa",
    image: images.recipe05
  }
];

export const products = [
  {
    id: "shoe-1",
    company: "Michael",
    name: "Jordan",
    price: 140,
    type: "sneakers",
    imgUrl: images.sneakers03
  },
  {
    id: "shoe-2",
    company: "Nike",
    name: "Swoos",
    price: 250,
    type: "sneakers",
    imgUrl: images.sneakers02
  },
  {
    id: "shoe-3",
    company: "Michael",
    name: "Jordan",
    price: 120,
    type: "sneakers",
    imgUrl: images.sneakers03
  }
];

export const bestProducts = [
  {
    id: "bestShoe-1",
    company: "Sneaker",
    name: "Viper",
    price: 150,
    type: "sneakers",
    imgUrl: images.sneakers01
  },
  {
    id: "bestShoe-2",
    company: "Nike",
    name: "Jogger",
    price: 180,
    type: "sneakers",
    imgUrl: images.sneakers04
  },
  {
    id: "bestShoe-3",
    company: "Sneaker",
    name: "Viper",
    price: 120,
    type: "sneakers",
    imgUrl: images.sneakers01
  }
];

const fruits = [
  {
    id: "fruit-1",
    name: "Avocado",
    icon: icons.avocado,
    bgColor: "#E6F3E7",
    borderColor: "#9bf2a7"
  },
  {
    id: "fruit-2",
    name: "Mango",
    icon: icons.mango,
    bgColor: "#FFF4E6",
    borderColor: "#fcbe6f"
  },
  {
    id: "fruit-3",
    name: "Grapes",
    icon: icons.grapes,
    bgColor: "#F4E6FF",
    borderColor: "#c074fc"
  },
  {
    id: "fruit-4",
    name: "Apple",
    icon: icons.apple,
    bgColor: "#FFE7E3",
    borderColor: "#ff8b78"
  },
  {
    id: "fruit-5",
    name: "Acron",
    icon: icons.acorn,
    bgColor: "#fae5d2",
    borderColor: "#8c5e2d"
  },
  {
    id: "fruit-6",
    name: "Cherry",
    icon: icons.cherry,
    bgColor: "#ffdee4",
    borderColor: "#fa4869"
  },
  {
    id: "fruit-7",
    name: "Strawberry",
    icon: icons.strawberry,
    bgColor: "#ffe6e6",
    borderColor: "#fc5151"
  },
  {
    id: "fruit-8",
    name: "Carrot",
    icon: icons.carrot,
    bgColor: "#FFF4E6",
    borderColor: "#fcac47"
  }
];

const juices = [
  {
    id: "juice-1",
    name: "Apple Juice",
    img: images.tangerine,
    price: 8.65,
    bgColor: "#F78C94"
  },
  {
    id: "juice-2",
    name: "Pinapple Juice",
    img: images.original,
    price: 9.4,
    bgColor: "#F8CCE3"
  },
  {
    id: "juice-3",
    name: "Grapes Juice",
    img: images.blackberry,
    price: 10.5,
    bgColor: "#EFD0EF"
  }
];

export default {
  recipes,
  breakfast,
  fruits,
  juices
};

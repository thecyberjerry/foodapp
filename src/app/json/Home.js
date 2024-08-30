const logo = { src: "/assets/logo/logo.svg", link: "/", alt: "" };
const navbar = {
  list: [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Product", link: "/" },
    { title: "TOS", link: "/" },
  ],
  btn: { title: "Order Now", textcolor: "white", bgcolor: "red", link: "/" },
};
const hero = {
  headingsmall: { title: "Discover Authentic Mexican Flavors", color: "white" },
  btn: { title: "Order Now", textcolor: "white", bgcolor: "red", link: "/" },
  paragraph: {
    title:
      "Discover the vibrant flavors and rich traditions of Mexican cuisine with our expertly crafted dishes. From zesty tacos and hearty burritos to sizzling fajitas and savory enchiladas, we bring the true taste of Mexico right to your table.",
    color: "white",
  },
  headinglarge: { title: "Savor the Heart of Mexico", color: "white" },
  list: [
    { title: "Home", link: "/" },
    { title: "Home", link: "/" },
    { title: "Home", link: "/" },
    { title: "Home", link: "/" },
  ],
  background: { src: "/assets/hero/hero.webp" },
};
const aboutus = [
  {
    direction: "ltr",
    img: { src: "/assets/aboutus/image.svg", alt: "Some Image" },
    headingsmall: { color: "black", title: "About US" },
    heading: { color: "black", title: "Discover the flavor of Mexico" },
    paragraph: {
      color: "black",
      title:
        "Indulge in the rich and vibrant culinary heritage of Mexico with our exquisite dishes. Made with the finest ingredients and crafted by top chefs, our food is a true delight for your taste buds.",
    },
    list: [
      { title: "Unmatched Quality", link: "/" },
      { title: "Exquisite Flavour", link: "/" },
      { title: "Organic Dishes", link: "/" },
      { title: "Clean, fresh and healthy", link: "/" },
    ],
    btn: [
      { title: "Explore More", textcolor: "white", bgcolor: "red", link: "/" },
      { title: "Order Now", textcolor: "white", bgcolor: "red", link: "/" },
    ],
  },
  {
    direction: "rtl",
    background: "gray",
    img: { src: "/assets/aboutus/img2.svg", alt: "Some Image" },
    headingsmall: { color: "black", title: "Premium Dish" },
    heading: {
      color: "black",
      title:
        "Experience the Exclusivity of Our Main Product, Crafted by Top Chefs",
    },
    paragraph: {
      color: "black",
      title:
        "Indulge in the finest culinary creations, served exclusively in 5-star restaurants nationwide.Savor the rich and complex flavors of our main product, a true gastronomic delight.",
    },
    btn: [
      { title: "Explore More", textcolor: "white", bgcolor: "red", link: "/" },
      { title: "Order Now", textcolor: "white", bgcolor: "red", link: "/" },
    ],
  },
];
const featured = {
  title: { title: "Featured Mexico's Cuisine", color: "black" },
  images: [
    {
      title: { title: "Burritos", color: "white" },
      img: { src: "/assets/featured/img1.png", alt: "Some Image" },
    },
    {
      title: { title: "Burritos", color: "white" },
      img: { src: "/assets/featured/img2.png", alt: "Some Image" },
    },
    {
      title: { title: "Burritos", color: "white" },
      img: { src: "/assets/featured/img3.png", alt: "Some Image" },
    },
  ],
};
const testimonial = {
  background: "gray",
  heading: { title: "What Our Client Say About Us", color: "black" },
  cards: [
    {
      user: {
        img: { src: "./assets/testimonial/userimg.svg", alt: "Some Image" },
        heading: {
          title: "Alex jarvis",
        },
      },

      readmore: {
        title: "Read More",
        color: "red",
      },
      paragraph: {
        title:
          "“I have been extremely happy with the Food of working with the creative dishes, and I would highly recommend them to...",
        color: "red",
      },
      img: [
        { src: "./assets/testimonial/star.svg", alt: "Some Image" },
        { src: "./assets/testimonial/star.svg", alt: "Some Image" },
        { src: "./assets/testimonial/star.svg", alt: "Some Image" },
        { src: "./assets/testimonial/star.svg", alt: "Some Image" },
        { src: "./assets/testimonial/star.svg", alt: "Some Image" },
      ],
    },
  ],
};
const cta = {
  heading: { title: "Stay Updated for Offers and Cusines", color: "white" },
  paragraph: {
    title: "Experience the authentic flavours of Mexico in every bite.",
    color: "white",
  },
  btn: [
    { title: "View", textcolor: "red", bgcolor: "white", link: "/" },
    { title: "Follow Us", textcolor: "red", bgcolor: "white", link: "/" },
  ],
};
const footer = {
  paragraph: {
    title: "we help the most acting brands unlock growth through carefully.",
    color: "black",
  },
  lists: [
    {
      label: { title: "About", color: "" },
      list: [
        { title: "About Us", link: "/" },
        { title: "Careers", link: "/" },
        { title: "Contact Us", link: "/" },
      ],
    },
    {
      label: { title: "Product", color: "" },
      list: [
        { title: "Feature", link: "/" },
        { title: "Pricing", link: "/" },
        { title: "Reviews", link: "/" },
      ],
    },
    {
      label: { title: "TOS", color: "" },
      list: [
        { title: "Help", link: "/" },
        { title: "Blog", link: "/" },
        { title: "Status", link: "/" },
      ],
    },
  ],
  newsletter: { title: "Subscribe to our newsletters", color: "black" },
  input: { title: "Enter Your Email" },
  btn: { title: "Submit", textcolor: "red", bgcolor: "white", link: "/" },
  trademark: {
    paragraph: {
      title: "© 2024 Ripe Heap. All rights reserved.",
      color: "black",
    },
    policylist: [
      { title: "Privacy Policy", link: "/" },
      { title: "Terms of Sevice", link: "/" },
      { title: "Cookie Setting", link: "/" },
    ],
    socials: [
      { src: "./assets/footer/facebook.svg", alt: "Some Image" },
      { src: "./assets/footer/instagram.svg", alt: "Some Image" },
      { src: "./assets/footer/twitter.svg", alt: "Some Image" },
      { src: "./assets/footer/linkedin.svg", alt: "Some Image" },
      { src: "./assets/footer/youtube.svg", alt: "Some Image" },
    ],
  },
};
export { logo, navbar, hero, aboutus, featured, cta, footer, testimonial };

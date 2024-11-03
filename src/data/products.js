const products = [
  {
    id: 1,
    name: "Arabian Tonka",
    price: 16.95,
    originalPrice: 19.95,
    isDeal: true,
    image:
      "https://i8.amplience.net/i/liberty/000766680-R481277006-2?$medium$&qlt=90&fmt=auto&strip=true",
    category: "Perfume",
    description: "A rich and exotic blend with notes of tonka bean and spices.",
    longDescription:
      "Arabian Tonka is a luxurious perfume that combines the deep, rich aroma of tonka bean with exotic spices. Perfect for evening wear, this fragrance will leave a lasting impression.",
    ingredients: ["Tonka Bean", "Spices", "Amber", "Vanilla"],
    ingredientImages: [
      "https://www.easytogrowbulbs.com/cdn/shop/products/cardamom_subluatum_3_1024x.jpg?v=1620766165",
      "https://www.morescentsthansense.com/wp-content/uploads/2022/10/pexels-karolina-grabowska-5429914.jpg",
      "https://www.littlegemsrockshop.co.uk/Files/117663/Img/20/SPR15151WH-zoom.jpg",
      "https://excesa.com/blog/wp-content/uploads/2022/09/Ingredients-Used-In-Vanilla-Flavor.jpg",
    ],
    rating: 1,
  },
  {
    id: 2,
    name: "Instant Crush",
    price: 13.56,
    originalPrice: 16.95,
    isDeal: true,
    image:
      "https://manceraparfums.com/1026-product_page_crop/instant-crush.jpg",
    category: "Perfume",
    description:
      "A captivating fragrance with a mix of floral and woody notes.",
    longDescription:
      "Instant Crush is a captivating fragrance that blends floral and woody notes to create a unique and enchanting scent. Ideal for both day and night, it is sure to turn heads.",
    ingredients: ["Floral", "Woody", "Citrus", "Musk"],
    ingredientImages: [
      "https://th.bing.com/th/id/R.a5d398fbb4603d23e82d33ea60ba5351?rik=A8vLJCeOQVw9LQ&pid=ImgRaw&r=0",
      "https://www.alphaaromatics.com/wp-content/uploads/2021/09/Woody-Fragrances.jpeg",
      "https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg",
      "https://media.istockphoto.com/id/840147462/nl/foto/wierook-van-traditionele-arabische-geur-oudh-bakhoor-in-een-kastanjebruine-glazen-pot-op-een.jpg?s=1024x1024&w=is&k=20&c=BzTwi18iE1eYlMcuEnLVWb1JKGsM5A1Z3nf3vrQtcJ8=",
    ],
    rating: 2.0,
  },
  {
    id: 3,
    name: "Ocean Breeze",
    price: 14.99,
    image:
      "https://th.bing.com/th/id/OIP.BNFI_MOxmbfzEOkbJ-WfrAHaGh?w=1500&h=1322&rs=1&pid=ImgDetMain",
    category: "Cologne",
    description: "A refreshing scent reminiscent of a cool ocean breeze.",
    longDescription:
      "Ocean Breeze captures the essence of a cool ocean breeze with its refreshing and invigorating scent. Perfect for a day at the beach or a casual outing.",
    ingredients: ["Sea Salt", "Citrus", "Jasmine", "Musk"],
    ingredientImages: [
      "https://images.pexels.com/photos/6621190/pexels-photo-6621190.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg",
      "https://images.pexels.com/photos/17795179/pexels-photo-17795179/free-photo-of-close-up-of-a-jasmine.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3755629/pexels-photo-3755629.jpeg",
    ],
    rating: 4.2,
  },
  {
    id: 4,
    name: "Midnight Jasmine",
    price: 18.5,
    image:
      "https://theluckyflame.com/cdn/shop/files/1215F7A6-1C53-43F3-A1F5-911A56CF815F_1500x.png?v=1700349288",
    category: "Perfume",
    description: "A sensual fragrance with the enchanting aroma of jasmine.",
    longDescription:
      "Midnight Jasmine is a sensual fragrance that envelops you in the enchanting aroma of jasmine. Ideal for romantic evenings, it is both alluring and mysterious.",
    ingredients: ["Jasmine", "Sandalwood", "Vanilla", "Cedar"],
    ingredientImages: [
      "https://images.pexels.com/photos/17795179/pexels-photo-17795179/free-photo-of-close-up-of-a-jasmine.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/15387681/pexels-photo-15387681/free-photo-of-sandalwood-incense-and-candles.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5614393/pexels-photo-5614393.jpeg",
      "https://media.istockphoto.com/id/1295617985/photo/arborvitae-leaves-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=1rJihRLOh4F8bXiqf_aBfRIUWPYKlTrjxg_UAmpvl1c=",
    ],
    rating: 4.7,
  },
  {
    id: 5,
    name: "Citrus Splash",
    price: 12.75,
    originalPrice: 15.0,
    isDeal: true,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    category: "Cologne",
    description: "A vibrant and zesty scent with a burst of citrus fruits.",
    longDescription:
      "Citrus Splash is a vibrant and zesty cologne that delivers a burst of citrus fruits. Perfect for energizing your day, it is both refreshing and uplifting.",
    ingredients: ["Lemon", "Orange", "Grapefruit", "Mint"],
    ingredientImages: [
      "https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461415/pexels-photo-461415.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2683373/pexels-photo-2683373.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://media.istockphoto.com/id/478775140/photo/fresh-mint-on-a-wooden-table.jpg?b=1&s=612x612&w=0&k=20&c=B8NdU4x285GF09MrxKNClkjoZ1vtcihO-aVgnOrzB10=",
    ],
    rating: 4.3,
  },
  {
    id: 6,
    name: "Vanilla Sky",
    price: 19.99,
    image: "https://images.pexels.com/photos/5614393/pexels-photo-5614393.jpeg",
    category: "Perfume",
    description: "A sweet and creamy vanilla fragrance with a hint of musk.",
    longDescription:
      "Vanilla Sky is a sweet and creamy fragrance that combines the warmth of vanilla with a hint of musk. Perfect for cozy evenings, it is both comforting and inviting.",
    ingredients: ["Vanilla", "Musk", "Caramel", "Coconut"],
    ingredientImages: [
      "https://images.pexels.com/photos/5614393/pexels-photo-5614393.jpeg",
      "https://images.pexels.com/photos/3755629/pexels-photo-3755629.jpeg",
      "https://media.istockphoto.com/id/1354071967/photo/sweet-caramel-candies-with-melted-caramel-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=zJQ50mfQMqJidNtMbhiAkqGlZHiPUNYwUWtNhqYyrhE=",
      "hhttps://media.istockphoto.com/id/457043775/photo/coconuts-with-palm-leaf-on-white-background-collection.jpg?b=1&s=612x612&w=0&k=20&c=gWYJF7pigtwMgyCM4IYs0_Bh9h2M4juPMzm63C4EYqw=",
    ],
    rating: 4.8,
  },
  {
    id: 7,
    name: "Amber Nights",
    price: 21.5,
    image: "https://images.pexels.com/photos/965986/pexels-photo-965986.jpeg",
    category: "Perfume",
    description: "A warm and inviting scent with rich amber and spice notes.",
    longDescription:
      "Amber Nights is a warm and inviting perfume that features rich amber and spice notes. Ideal for evening wear, it is both luxurious and captivating.",
    ingredients: ["Amber", "Spice", "Patchouli", "Cedar"],
    ingredientImages: [
      "https://images.pexels.com/photos/965986/pexels-photo-965986.jpeg",
      "https://images.pexels.com/photos/3755629/pexels-photo-3755629.jpeg",
      "https://images.pexels.com/photos/6979902/pexels-photo-6979902.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://media.istockphoto.com/id/1295617985/photo/arborvitae-leaves-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=1rJihRLOh4F8bXiqf_aBfRIUWPYKlTrjxg_UAmpvl1c=",
    ],
    rating: 4.6,
  },
  {
    id: 8,
    name: "Fresh Mint",
    price: 11.99,
    image: "https://images.pexels.com/photos/3755629/pexels-photo-3755629.jpeg",
    category: "Cologne",
    description: "A crisp and invigorating fragrance with fresh mint leaves.",
    longDescription:
      "Fresh Mint is a crisp and invigorating cologne that features the refreshing scent of fresh mint leaves. Perfect for a revitalizing start to your day.",
    ingredients: ["Mint", "Basil", "Lime", "Eucalyptus"],
    ingredientImages: [
      "https://media.istockphoto.com/id/478775140/photo/fresh-mint-on-a-wooden-table.jpg?b=1&s=612x612&w=0&k=20&c=B8NdU4x285GF09MrxKNClkjoZ1vtcihO-aVgnOrzB10=",
      "https://images.pexels.com/photos/1087905/pexels-photo-1087905.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4022783/pexels-photo-4022783.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://media.istockphoto.com/id/516117677/photo/eucalyptus-branch.jpg?b=1&s=612x612&w=0&k=20&c=ucevNqaSu5Xsl9-UXKdwY1GVH30kCtFXtiUszoUkg60=",
    ],
    rating: 4.1,
  },
  {
    id: 9,
    name: "Lavender Fields",
    price: 17.25,
    image: "https://images.pexels.com/photos/2732387/pexels-photo-2732387.jpeg",
    category: "Perfume",
    description: "A calming scent with the soothing aroma of lavender fields.",
    longDescription:
      "Lavender Fields is a calming perfume that envelops you in the soothing aroma of lavender fields. Perfect for relaxation and unwinding after a long day.",
    ingredients: ["Lavender", "Rosemary", "Bergamot", "Cedar"],
    ingredientImages: [
      "https://images.pexels.com/photos/67234/lavender-lavender-flowers-purple-violet-67234.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/26903259/pexels-photo-26903259/free-photo-of-hummingbird-clearwing-moth-on-wild-bergamot-flower.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2524224/pexels-photo-2524224.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    rating: 4.4,
  },
  {
    id: 10,
    name: "Spicy Oud",
    price: 22.0,
    image: "https://images.pexels.com/photos/2732388/pexels-photo-2732388.jpeg",
    category: "Perfume",
    description: "An intense and exotic fragrance with deep oud and spice.",
    longDescription:
      "Spicy Oud is an intense and exotic fragrance that combines deep oud with spice. Perfect for those who love bold and daring scents.",
    ingredients: ["Oud", "Spice", "Saffron", "Rose"],
    ingredientImages: [
      "https://media.istockphoto.com/id/880407540/photo/agarwood.jpg?b=1&s=612x612&w=0&k=20&c=dH0EQTeG_s2JdnYtKmIP36v5te4meC0Ev0f9nYjawoo=",
      "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg",
      "https://media.istockphoto.com/id/1257205715/photo/rose-flower-arrangement-isolated-on-a-white-background-with-clipping-path.jpg?b=1&s=612x612&w=0&k=20&c=VqfCiG_VyWaJyN9Y0Ph4l2igK8SAMzkMiAxQ0M32Sa4=",
    ],
    rating: 4.9,
  },
];

export default products;

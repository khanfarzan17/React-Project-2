const item = [
  // Mobiles
  {
    id: "1",
    category: "Mobile",
    name: "IPhone 12",
    brand: "Apple",
    model: "12",
    price:  "60,000",
    specifications: {
      screen: "6.1 inch",
      processor: "A14 Bionic",
      storage: "128GB",
      camera: "12MP",
    },
    features: ["5G", "Face ID", "Dual camera"],
    image: "https://images.pexels.com/photos/14979031/pexels-photo-14979031/free-photo-of-smart-phone-and-a-cube.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: "2",
    category: "Mobile",
    name: "Galaxy S21",
    brand: "Samsung",
    model: "S21",
    price: "84,000",
    specifications: {
      screen: "6.2 inch",
      processor: "Exynos 2100",
      storage: "128GB",
      camera: "64MP",
    },
    features: ["5G", "Infinity-O Display", "Triple camera"],
    image: "https://images.pexels.com/photos/20348034/pexels-photo-20348034/free-photo-of-camera-lenses-of-samsung-galaxy-s24.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
 
  {
    id: "3",
    category: "Laptop",
    name: "MacBook Pro",
    brand: "Apple",
    model: "M1",
    price: "1,40,000",
    specifications: {
      screen: "13.3 inch",
      processor: "Apple M1",
      storage: "256GB SSD",
      ram: "8GB",
    },
    features: ["Retina Display", "Touch Bar", "Long battery life"],
    image: "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "4",
    category: "Laptop",
    name: "Dell XPS 13",
    brand: "Dell",
    model: "9310",
    price: "54,000",
    specifications: {
      screen: "13.4 inch",
      processor: "Intel i7",
      storage: "512GB SSD",
      ram: "16GB",
    },
    features: ["InfinityEdge Display", "Backlit keyboard", "Lightweight"],
    image: "https://imgs.search.brave.com/p5N23fAzE6PLsZOq6iE6dNNKB-qmNguHUFCZyUpy4Ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Mz/Yjk4MTJiOGUyM2Vi/YzkwODdkZmIwOTcy/YjI2NTA4NjViMjdi/NzIvaHViLzIwMTUv/MDEvMDYvMTUxYjcw/NDUtOThhYS00NDU5/LWFlYTItNmQ4Y2Y0/YWQyMTgxL2RlbGwt/eHBzLTEzLWNlcy0y/MDE1LTAwMS5qcGc_/YXV0bz13ZWJwJndp/ZHRoPTEyMDA"
  },
 
  {
    id: "5",
    category: "Fridge",
    name: "Family Hub",
    brand: "Samsung",
    model: "RF28R7551SR",
    price: "35,000",
    specifications: {
      capacity: "28 cu. ft.",
      type: "French Door",
      energyRating: "A+",
    },
    features: ["Wi-Fi Connectivity", "Touch Screen", "Triple Cooling"],
    image: "https://imgs.search.brave.com/xHI5NaV3zPHjJ-sqiBGWt6IxmOU7F6ByffJto30mMpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjM0/MzE1OTM4LWdlLXBy/b2ZpbGUtZnJpZGdl/LTE2MzQzMTU5Mjcu/anBnP2Nyb3A9MXh3/OjF4aDtjZW50ZXIs/dG9wJnJlc2l6ZT05/ODA6Kg"
  },
  {
    id: "6",
    category: "Air Conditionar ",
    name: "InstaView",
    brand: "LG",
    model: "LFXS26596S",
    price: "28,000",
    specifications: {
      capacity: "26 cu. ft.",
      type: "Side-by-Side",
      energyRating: "A+",
    },
    features: ["Door-in-Door", "SmartThinQ", "Multi-Air Flow"],
    image: "https://imgs.search.brave.com/DkY_H7akZmoAyIQK7IB6C8PX9TU-oaJEwV_-ZlMHwHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGcuY29tL2xldmFu/dF9lbi9pbWFnZXMv/YWlyLWNvbmRpdGlv/bmluZy11bml0cy9t/ZDA2MjQxMTk2L2dh/bGxlcnkvMTEwMC0x/LmpwZw"
  },
  // Washing Machines
  {
    id: "7",
    category: "Washing Machine",
    name: "FlexWash",
    brand: "Samsung",
    model: "WV60M9900AV",
    price: "21,000",
    specifications: {
      capacity: "6.0 cu. ft.",
      type: "Front Load",
      energyRating: "A+",
    },
    features: ["Dual Wash", "Steam Wash", "Wi-Fi Connectivity"],
    image: "https://imgs.search.brave.com/gmH64EIIxZ--Jlr4RloioS7pSh17EC9RB35rZgYgS2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2Jp/bGVpbWFnZXMubG93/ZXMuY29tL3Byb2R1/Y3QvY29udmVydGVk/Lzg4NzI3Ni84ODcy/NzYxOTY5MjMuanBn/P3NpemU9eGw"
  },
  {
    id: "8",
    category: "Washing Machine",
    name: "TwinWash",
    brand: "LG",
    model: "WM8100HVA",
    price: "18,000",
    specifications: {
      capacity: "5.2 cu. ft.",
      type: "Front Load",
      energyRating: "A+",
    },
    features: ["TwinWash", "TurboWash", "SmartThinQ"],
    image: "https://imgs.search.brave.com/J86treqTc5RW0x1LCKs_bc0tPn4j73TJQukmS6M1izo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGcuY29tL2xldmFu/dF9lbi9pbWFnZXMv/cGxwLWIyYy9IQS1U/Vy1Nb2JpbGUtNzY4/eDEyMDAtQXItRW4u/anBn"
  },
  // Cars
  {
    id: "9",
    category: "Car",
    name: " Tesla Model S",
    brand: "Tesla",
    model: "S",
    price: "60,000,00",
    specifications: {
      range: "396 miles",
      topSpeed: "200 mph",
      acceleration: "0-60 mph in 1.99s",
    },
    features: ["Autopilot", "Electric", "Ludicrous Mode"],
    image: "https://images.pexels.com/photos/14674136/pexels-photo-14674136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "10",
    category: "Car",
    name: "Mustang Mach-E",
    brand: "Ford",
    model: "Mach-E",
    price: "50,00,000",
    specifications: {
      range: "305 miles",
      topSpeed: "180 mph",
      acceleration: "0-60 mph in 3.5s",
    },
    features: ["Electric", "Ford Co-Pilot360", "Panoramic Roof"],
    image: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  // More Mobiles
  {
    id: "11",
    category: "Mobile",
    name: "OnePlus 8",
    brand: "OnePlus",
    model: "8",
    price: "35,000",
    specifications: {
      screen: "6.55 inch",
      processor: "Snapdragon 888",
      storage: "128GB",
      camera: "48MP",
    },
    features: ["4G", "Fast Charging", "Fluid AMOLED"],
    image: "https://images.pexels.com/photos/10343717/pexels-photo-10343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
  ,

  {
    id: "12",
    category: "Laptop",
    name: "MacBook Air",
    brand: "Apple",
    model: "M1",
    price: "92,000",
    specifications: {
      screen: "13.3 inch",
      processor: "Apple M1",
      storage: "256GB SSD",
      camera: "720p HD"
    },
    features: ["Retina Display", "M1 Chip", "Fast SSD Storage"],
    image: "https://imgs.search.brave.com/vU06aD00gjn6Kxih7myxu18mlSSnZuNHlwGFUWBwx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZWxp/b3MtaS5tYXNoYWJs/ZS5jb20vaW1hZ2Vy/eS9yZXZpZXdzLzAz/Z3dwS1FkR3N6b3Ro/Q2VUbWpTbW1pL2lt/YWdlcy00LmZpbGwu/c2l6ZV8yMDAweDEx/MjYudjE2OTgwMzM0/NzguanBn"
  }

];

export default item;

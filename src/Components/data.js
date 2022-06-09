const data = [
  {
    id: 1,
    title: "Essentials in JavaScript ES6 - A Fun and Clear Introduction",
    desdcription:
      "A creative and fun course on JavaScript ES6! Has Webpack, Babel, React, and all the new syntax you need to code in ES6!",
    category: "javascript",
    price: 480,
    image: "https://img-c.udemycdn.com/course/240x135/1087374_f0b8.jpg",
    author: "David",
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    desdcription:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    category: "python",
    price: 940,
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    author: "Angela",
  },
  {
    id: 3,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    desdcription:
      "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17 covered. C++20 info see below.",
    category: "cpp",
    price: 870,
    image: "https://img-c.udemycdn.com/course/240x135/1576854_9aeb_2.jpg",
    author: "Buchalka",
  },
  {
    id: 4,
    title: "The Complete 2022 Javascript Development Bootcamp",
    desdcription:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    category: "javascript",
    price: 1234,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    author: "Angel",
  },
  {
    id: 5,
    title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
    desdcription:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    category: "python",
    price: 572,
    image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
    author: "Jose Port",
  },
  {
    id: 6,
    title: "C++ Fundamentals: Game Programming For Beginners",
    desdcription: "Learn to make games using industry standard C++ and Raylib",
    category: "cpp",
    price: 1468,
    image: "https://img-c.udemycdn.com/course/240x135/3926772_101e_3.jpg",
    author: "Stephen",
  },
  {
    id: 7,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    desdcription:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    category: "javascript",
    price: 1852,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    author: "Jonas Sc.",
  },
  {
    id: 8,
    title: "Complete Python Developer in 2022: Zero to Mastery",
    desdcription:
      "How to become a Python 3 Developer and get hired! Build 12+ projects, learn Web Development, Machine Learning + more!",
    category: "python",
    price: 1672,
    image: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg",
    author: "Andrei",
  },
  {
    id: 9,
    title: "Master CMake for Cross-Platform C++ Project Building",
    desdcription:
      "Learn the most powerful and recommended way of building the C++ projects",
    category: "cpp",
    price: 792,
    image: "https://img-c.udemycdn.com/course/240x135/2759464_110d_6.jpg",
    author: "Milan",
  },
  {
    id: 10,
    title: "Practical C++: Learn C++ Basics Step by Step",
    desdcription:
      "Get Started Quickly with C++: Only Hands-on Lessons and Practice to Master C++ Basics.",
    category: "cpp",
    price: 935,
    image: "https://img-c.udemycdn.com/course/240x135/4193382_48d7.jpg",
    author: "Edouard",
  },
  {
    id: 11,
    title: "Advanced C++ Programming Training Course",
    desdcription:
      "Take your C++ Programming Training Course Will Take Your Skills To The Next Level.",
    category: "cpp",
    price: 865,
    image: "https://img-c.udemycdn.com/course/240x135/22750_d8c2_9.jpg",
    author: "Infinite Skils",
  },
  {
    id: 12,
    title: "Learn Programming in C++ with the Power of Animation",
    desdcription:
      "A Programming Course in C++ language, great for beginners, that will teach you C++ coding from scratch using Animation.",
    category: "cpp",
    price: 973,
    image: "https://img-c.udemycdn.com/course/240x135/1336394_7415.jpg",
    author: "Infinite Skils",
  },
  {
    id: 13,
    title: "Modern JavaScript From The Beginning",
    desdcription:
      "Learn and build projects with pure JavaScript (No frameworks or libraries)",
    category: "javascript",
    price: 455,
    image: "https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg",
    author: "Brad Taversy",
  },
  {
    id: 14,
    title: "Javascript Tutorial and Projects Course (2022)",
    desdcription: "Learn Javascript by Building 30+ Interesting Projects",
    category: "javascript",
    price: 981,
    image: "https://img-c.udemycdn.com/course/240x135/1518026_77fb_4.jpg",
    author: "John Simgla.",
  },
  {
    id: 15,
    title: "The Modern JavaScript Bootcamp",
    desdcription:
      "Learn JavaScript by building real-world apps. Includes 3 real-world projects, 80 programming challenges, and ES6/ES7!",
    category: "javascript",
    price: 1342,
    image: "https://img-c.udemycdn.com/course/240x135/1470810_a8b0.jpg",
    author: "Jonas Sc.",
  },
  {
    id: 16,
    title: "Python for Absolute Beginners",
    desdcription:
      "Learn Python programming from scratch with hands-on exercises in this Python course!",
    category: "python",
    price: 907,
    image: "https://img-c.udemycdn.com/course/240x135/836376_8b97_4.jpg",
    author: "Green",
  },
  {
    id: 17,
    title: "The Python Mega Course: Build 10 Real World Applications",
    desdcription:
      "Become a Python programmer by learning how to build any Python program from scratch, GUIs, web apps, APIs, and more.",
    category: "python",
    price: 986,
    image: "https://img-c.udemycdn.com/course/240x135/692188_9da7_27.jpg",
    author: "Ardit",
  },
  {
    id: 18,
    title: "Python and Django Full Stack Web Developer Bootcamp",
    desdcription:
      "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",
    category: "python",
    price: 1342,
    image: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg",
    author: "Jose",
  },
];

export default data;

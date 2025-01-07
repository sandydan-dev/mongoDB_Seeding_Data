const { connectDB } = require("./db/db.connect");
const fs = require("fs");

// models file
const Book = require("./models/book.model");
const Employee = require("./models/employeeCard.model");
const Note = require("./models/note.model");
const ProductCard = require("./models/product_card.model");
const Product = require("./models/product.models");
const Restaunrat = require("./models/restaurants.model");
const Smartphone = require("./models/smartphones.model");
const Todo = require("./models/todos.model");
// -----------
// Connect to MongoDB
connectDB();

// read json file
const jsonNoteFileData = fs.readFileSync("./jsonFile/note.json");
const jsonSmartphoneFileData = fs.readFileSync(
  "./jsonFile/smartphone.json",
  "utf-8"
);

// parse json to to onject
const notesData = JSON.parse(jsonNoteFileData);
const smartphonesData = JSON.parse(jsonSmartphoneFileData);

// ----------
const bookData = [
  {
    title: "The Quantum Prophecy",
    author: "Evelyn Stone",
    publishedYear: 2018,
    genre: "Science Fiction",
    language: "English",
    country: "Canada",
    rating: 8,
    summary:
      "In a world where quantum physics governs reality, a young scientist must unravel a mysterious prophecy threatening humanity's future.",
    awards: "Winner of the Nebula Award for Best Novel",
    coverImageURL: "https://example.com/books/quantum-prophecy-cover.jpg",
    purchaseURL: "https://store.example.com/the-quantum-prophecy",
  },
  {
    title: "The Time Traveler's Dilemma",
    author: "Max Wellington",
    publishedYear: 2022,
    genre: "Fantasy",
    language: "French",
    country: "France",
    rating: 7.5,
    summary:
      "When a brilliant physicist discovers a way to manipulate time, he must navigate through historical events to prevent a catastrophic future.",
    awards: "Winner of the Hugo Award for Best Novel",
    coverImageURL: "https://example.com/books/time-travelers-dilemma-cover.jpg",
    purchaseURL: "https://store.example.com/time-travelers-dilemma",
  },
  {
    title: "The Last Hope",
    author: "Sarah Jenkins",
    publishedYear: 2020,
    genre: "Fiction",
    language: "Spanish",
    country: "Argentina",
    rating: 6.8,
    summary:
      "In a post-apocalyptic world, humanity's last survivors must band together to fight against an alien invasion and reclaim their planet.",
    awards: "Nominee for the Locus Award for Best Science Fiction Novel",
    coverImageURL: "https://example.com/books/last-hope-cover.jpg",
    purchaseURL: "https://store.example.com/last-hope",
  },
  {
    title: "The Memory Keeper",
    author: "Alex Chen",
    publishedYear: 2019,
    genre: "Mystery",
    language: "Chinese",
    country: "China",
    rating: 7.2,
    summary:
      "A retired detective with a rare condition that prevents him from forgetting anything must solve a decades-old murder mystery.",
    awards: "Winner of the Shamus Award for Best P.I. Novel",
    coverImageURL: "https://example.com/books/memory-keeper-cover.jpg",
    purchaseURL: "https://store.example.com/memory-keeper",
  },
  {
    title: "The Quantum Prophecy",
    author: "Evelyn Stone",
    publishedYear: 2018,
    genre: "Science Fiction",
    language: "English",
    country: "Canada",
    rating: 8,
    summary:
      "In a world where quantum physics governs reality, a young scientist must unravel a mysterious prophecy threatening humanity's future.",
    awards: "Winner of the Nebula Award for Best Novel",
    coverImageURL: "https://example.com/books/quantum-prophecy-cover.jpg",
    purchaseURL: "https://store.example.com/the-quantum-prophecy",
  },
];

// Book data seeding
async function createBook() {
  try {
    const createdBooks = [];
    for (const bookItem of bookData) {
      const newBook = new Book(bookItem);
      const saveBook = await newBook.save();
      createdBooks.push(saveBook);
    }
    // console.log("All books data: ", createdBooks);
  } catch (error) {
    console.log("Error while seeding book data");
    throw error;
  }
}
createBook(bookData);

// ----------

// Employee data seeding

const employeeData = {
  photoURL: "https://randomuser.me/api/portraits/women/82.jpg",
  fullName: "Emily Wilson",
  designation: "Senior Software Engineer",
  Id_No: "E12345",
  dateOfBirth: 1990,
  mail: "emily.wilson@example.com",
  tel_number: 1234567890,
  address: "123 Main St, New York, NY 10001",
};

async function employeeCardData(employeeData) {
  try {
    const newBook = new Employee(employeeData);
    const saveData = await newBook.save();
    console.log("Employee Data: ", saveData);
  } catch (error) {
    console.log("Error while seeding employee card data", error);
  }
}
employeeCardData(employeeData);

async function createNoteData() {
  try {
    for (const noteItem of notesData) {
      const newNote = new Note({
        title: noteItem.title,
        content: noteItem.content,
        category: noteItem.category,
        tags: noteItem.tags,
      });
      const saveNote = await newNote.save();
      console.log(saveNote);
    }
  } catch (error) {
    console.log("Error while seeding note data", error);
  }
}
createNoteData();

// ProductCard data seeding
const productCardData = {
  productName: "Smartwatch X500",
  productType: "Electronics",
  info: "Waterproof smartwatch with heart rate monitoring and GPS",
  color: "Blue",
  size: "10",
  price: 249.99,
};
async function createProductCard(productCardData) {
  try {
    const newProductCard = new ProductCard(productCardData);
    const saveData = await newProductCard.save();
    console.log("Product Card Data: ", saveData);
  } catch (error) {
    console.log("Error while seeding product card data", error);
  }
}
createProductCard(productCardData);

// Product data seeding
const productData = [
  {
    productURL: "https://example.com/products/842119",
    productName: "Product 419",
    productDescription: "This is a description for Product 419.",
    rating: 3,
    reviews: 814,
    price: 943.59,
    discountPrice: 754.87,
    discountPercentage: 20,
    priceLowest_Highest_launch: "754.87 - 943.59",
    stockQuantity: 118,
  },
  {
    productURL: "https://example.com/products/351910",
    productName: "Product 151",
    productDescription: "This is a description for Product 151.",
    rating: 5,
    reviews: 467,
    price: 191.93,
    discountPrice: null,
    discountPercentage: 0,
    priceLowest_Highest_launch: "191.93 - 191.93",
    stockQuantity: 921,
  },
  {
    productURL: "https://example.com/products/139811",
    productName: "Product 981",
    productDescription: "This is a description for Product 981.",
    rating: 2,
    reviews: 135,
    price: 538.79,
    discountPrice: 430.03,
    discountPercentage: 20,
    priceLowest_Highest_launch: "430.03 - 538.79",
    stockQuantity: 397,
  },
  {
    productURL: "https://example.com/products/463061",
    productName: "Product 306",
    productDescription: "This is a description for Product 306.",
    rating: 4,
    reviews: 921,
    price: 472.41,
    discountPrice: null,
    discountPercentage: 0,
    priceLowest_Highest_launch: "472.41 - 472.41",
    stockQuantity: 118,
  },
  {
    productURL: "https://example.com/products/912082",
    productName: "Product 120",
    productDescription: "This is a description for Product 120.",
    rating: 1,
    reviews: 467,
    price: 191.93,
    discountPrice: 153.54,
    discountPercentage: 20,
    priceLowest_Highest_launch: "153.54 - 191.93",
    stockQuantity: 397,
  },
];
async function createProduct(productData) {
  try {
    for (const product of productData) {
      const newProduct = new Product(product);
      const saveData = await newProduct.save();
      console.log(saveData);
    }
  } catch (error) {
    console.log("Error while seeding product data", error);
  }
}
createProduct(productData);

// Restaunrat seeding data
const restaurantData = {
  name: "Bistro Bliss",
  cuisine: "French",
  location: "123 Main St, New York, NY 10001",
  owner: "Pierre Dupont",
  phone: "+1 555 123 4567",
  website: "https://bistrobliss.com",
  openingYear: 2015,
  rating: 4.5,
  specialDishes: ["Escargots", "Coq au Vin", "Crème Brûlée"],
  photoURL: [
    "https://example.com/bistro-bliss-exterior.jpg",
    "https://example.com/bistro-bliss-interior.jpg",
  ],
};
async function createRestaurant(restaurantData) {
  try {
    const newRestaurant = new Restaunrat(restaurantData);
    const saveData = await newRestaurant.save();
    console.log(saveData);
  } catch (error) {
    console.log("Error while seeding restaurant data", error);
  }
}
createRestaurant(restaurantData);

// smartphone seeding data

async function createSmartphone() {
  try {
    for (const smartphone of smartphonesData) {
      const newSmartphone = new Smartphone({
        brand: smartphone.brand,
        model: smartphone.model,
        releaseYear: smartphone.releaseYear,
        operatingSystem: smartphone.operatingSystem,
        displaySize: smartphone.displaySize,
        storage: smartphone.storage,
        ram: smartphone.ram,
        cameraSpaces: {
          megapixelCount: smartphone.cameraSpaces.megapixelCount,
          lensType: smartphone.cameraSpaces.lensType,
        },
        batteryCapacity: smartphone.batteryCapacity,
        connectivity: smartphone.connectivity,
        price: smartphone.price,
        colorAvailable: smartphone.colorAvailable,
        features: smartphone.features,
      });
      console.log(newSmartphone);
      await newSmartphone.save();
    }
  } catch (error) {
    console.log("Error while seeding smartphone data", error);
  }
}
createSmartphone();

// seeding todos data
const todosData = {
  title: "Finish Project Report",
  description:
    "Complete the quarterly sales report and submit it to management.",
  priority: "Medium",
  dueDate: new Date("2023-09-15"),
  completed: false,
  tags: ["work", "report"],
};
async function createTodosData(todosData) {
  try {
    const newTodos = new Todo(todosData);
    const saveData = await newTodos.save();
    console.log(saveData);
  } catch (error) {
    console.log("Error while seeding todos data", error);
  }
}
createTodosData(todosData);

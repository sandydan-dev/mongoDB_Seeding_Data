const { connectDB } = require("./db/db.connect");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
const { Types, mongoose } = require("mongoose");
// models file
const Book = require("./models/book.model");
const Employee = require("./models/employeeCard.model");
const Note = require("./models/note.model");
const ProductCard = require("./models/product_card.model");
const Product = require("./models/product.models");
const Restaurant = require("./models/restaurants.model");
const Smartphone = require("./models/smartphones.model");
const Todo = require("./models/todos.model");
const Restro = require("./models/restro.model");
const Hotel = require("./models/hotel.model");
const NewRestaurant = require("./models/newRestaurant.models");
const NewHotel = require("./models/newHotel.model");
// const Restaurant = require('./models/restaurants.model')

app.use(express.json());
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
// createBook(bookData);

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
// employeeCardData(employeeData);

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
// createNoteData();

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
// createProductCard(productCardData);

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
// createProduct(productData);

// Restaunrat seeding data
// const restaurantData = {
//   name: "Bistro Bliss",
//   cuisine: "French",
//   location: "123 Main St, New York, NY 10001",
//   owner: "Pierre Dupont",
//   phone: "+1 555 123 4567",
//   website: "https://bistrobliss.com",
//   openingYear: 2015,
//   rating: 4.5,
//   specialDishes: ["Escargots", "Coq au Vin", "Crème Brûlée"],
//   photoURL: [
//     "https://example.com/bistro-bliss-exterior.jpg",
//     "https://example.com/bistro-bliss-interior.jpg",
//   ],
// };
async function createRestaurant(restaurantData) {
  try {
    const newRestaurant = new Restaurant(restaurantData);
    const saveData = await newRestaurant.save();
    return { message: "Data added successfully", data: saveData };
  } catch (error) {
    console.log("Error while seeding restaurant data", error);
  }
}

// todo : add restaurant data to the database
app.post("/restaurants", async (req, res) => {
  try {
    const response = await createRestaurant(req.body);
    // if no data added write code
    if (!response) {
      res.status(400).send({ message: "No data added" });
    }
    res.status(201).json(response);
  } catch (error) {
    console.log("Error while creating restaurant data", error);
    res.status(500).json({ message: error.message });
  }
});

// todo : reading all restaurant data from the database with API
async function readAllRestaurantData() {
  // read or find all restaurant data
  try {
    const restaurants = await Restaurant.find();
    return { message: "Data fetched successfully", data: restaurants };
  } catch (error) {
    console.log("Error while reading restaurant data", error);
  }
}
app.get("/restaurants", async (req, res) => {
  try {
    const response = await readAllRestaurantData();
    if (!response) {
      res.status(404).send({ message: "No data found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todo : Read restaurant data by nae /restaurants/:restaurantName
async function getRestroByName(restaurantName) {
  const data = await Restaurant.findOne({ name: restaurantName });
  return { message: "Data read by name successfully", data: data };
}
app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurantName = req.params.restaurantName;
    const response = await getRestroByName(restaurantName);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todo : read restaurant data by phone number /restaurants/directory/:phoneNumber
async function readDataByRestroPhoneNumber(phoneNumber) {
  const data = await Restaurant.findOne({ phone: phoneNumber });
  return { message: "Data read by phone number successfully", data };
}
app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const response = await readDataByRestroPhoneNumber(phoneNumber);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todo : read restaurant data by cuisine /restaurants/cuisine/:cuisineName
async function readRestaurantDataByCuisine(cuisineName) {
  const data = await Restaurant.find({ cuisine: cuisineName });
  return { message: "Data read by cuisine successfully", data };
}
app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName;
    const response = await readRestaurantDataByCuisine(cuisineName);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todo : read restro data by its location restaurants/location/:restaurantLocation
async function readRestroDataByLocation(restaurantLocation) {
  const data = await Restaurant.find({ location: restaurantLocation });
  return { message: "Data read by location successfully", data };
}
app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurantLocation = req.params.restaurantLocation;
    const response = await readRestroDataByLocation(restaurantLocation);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todo : read restro data by Id /restaurants/:restaurantId
async function readRestroDataById(restaurantId) {
  const data = await Restaurant.findById({ restaurantId });
  return { message: "Data read by id successfully", data };
}
app.get("/restaurants/:restaurantId", async (req, res) => {
  try {
    const restaurantId = Types.ObjectId(req.params.restaurantId);
    const response = await readRestroDataById(restaurantId);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching restaurant data", error);
  }
});

// todos delete data by restro id restaurants/:restaurantId

app.delete("/restaurants/:restaurantId", async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    if (!restaurantId) {
      res.status(400).send({ message: "Invalid restaurant id" });
    }
    const response = await Restaurant.findByIdAndDelete({ _id: restaurantId });
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.log("Error while deleting restaurant data", error);
  }
});

// todo : update data by given id and update the cuisine data
async function updateNewRestaurantById(restaurantId, updateCuisine) {
  const data = await Restaurant.findByIdAndUpdate(
    restaurantId,
    { cuisine: updateCuisine },
    {
      new: true,
    }
  );

  return { message: "Data updated successfully", data };
}
app.post("/restaurants/:id", async (req, res) => {
  try {
    // update by id
    const id = req.params.id;
    const updateCuisine = req.body;
    const response = await updateNewRestaurantById(id, updateCuisine);
    if (!response) {
      res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while updating restaurant data", error);
  }
});

// createRestaurant(restaurantData);

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
// createSmartphone();

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
// createTodosData(todosData);

// seeding restro data
const newRestroData = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};
async function createRestro(newRestroData) {
  const newRestro = new Restro(newRestroData);
  const saveData = await newRestro.save();
  console.log(saveData);
}
// createRestro(newRestroData);

// seeding Hotel data
// const newHotelData = {
//   name: "New Hotel",
//   category: "Mid-Range",
//   location: "123 Main Street, Frazer Town",
//   rating: 4.0,
//   website: "https://hotel-example.com",
//   phoneNumber: "+1234567890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "12:00 PM",
//   amenities: ["Laundry", "Room Service"],
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isParkingAvailable: true,
//   isWifiAvailable: true,
//   isPoolAvailable: false,
//   isSpaAvailable: false,
//   isRestaurantAvailable: true,
//   photos: [
//     "https://example.com/hotel-photo1.jpg",
//     "https://example.com/hotel-photo2.jpg",
//   ],
// };
// todo : create data with api
async function createHotelData(newHotelData) {
  try {
    const newHotel = new Hotel(newHotelData);
    const saveData = await newHotel.save();
    console.log(saveData);
  } catch (error) {
    console.log("Error while seeding hotel data", error);
  }
}

app.post("/hotels", async (req, res) => {
  const newHotelData = req.body;
  const response = await createHotelData(newHotelData);
  res.json(response);
});

// todo : read all hotels data
async function readHotelData() {
  const data = await Hotel.find();
  return { message: "Data fetched successfully", data };
}
app.get("/hotels", async (req, res) => {
  try {
    const response = await readHotelData();
    if (!response) {
      res.status(404).json({ message: "No hotels found" });
    }

    res.json(response);
  } catch (error) {
    console.log("Error while reading hotel data", error);
  }
});

// todo : read hotel by hotel name /hotels/:hotelName
async function getHotelsByName(hotelName) {
  const data = await Hotel.find({ name: hotelName });
  return { message: "Getting hotels by name", data };
}
app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotelName = req.params.hotelName;
    const response = await getHotelsByName(hotelName);
    if (!response) {
      res.status(404).json({ message: "Hotel not found" });
    }
    res.json(response);
  } catch (error) {
    console.log("Error while reading hotel data", error);
  }
});

// todos : get hotels by phone number /hotels/directory/:phoneNumber
async function getHotelsByNumber(phone) {
  const data = await Hotel.findOne({ phoneNumber: phone });
  return { message: "Getting hotels by phone number", data };
}
app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const phone = req.params.phoneNumber;
    const response = await getHotelsByNumber(phone);
    if (!response) {
      res.status(404).json({ message: "Hotel phone number not found" });
    }
    res.json(response);
  } catch (error) {
    console.log("Error while reading hotel phone number data", error);
  }
});

// todo : get hotels by rating /hotels/rating/:hotelRating
async function getHotelDataByRating(hotelRating) {
  const data = await Hotel.find({ rating: hotelRating });
  return { message: "Getting hotels by rating", data };
}
app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotelRating = req.params.hotelRating;
    const response = await getHotelDataByRating(hotelRating);
    if (!response) {
      res.status(404).json({ message: "Hotel rating not found" });
    }
    res.json(response);
  } catch (error) {
    console.log("Error while reading hotel rating data", error);
  }
});

// todo : get hotel by category : hotels/category/:hotelCategory
async function getHotelDataByCategoryName(hotelCategory) {
  const data = await Hotel.find({ category: hotelCategory });
  return { message: "Getting hotels by category", data };
}
app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotelCategory = req.params.hotelCategory;
    const response = await getHotelDataByCategoryName(hotelCategory);
    if (!response) {
      res.status(404).json({ message: "Hotel category not found" });
    }
    res.json(response);
  } catch (error) {
    console.log("Error while reading hotel category data", error);
  }
});

// todos : update hotel by given id

app.post("/hotels/update/:hotelId", async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelData = req.body;
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, hotelData, {
      new: true,
    });
    res.json(updatedHotel);
  } catch (error) {
    console.log("Error while updating hotel data", error);
  }
});

// todo : delete hotel by id hotels/:hotelId'
async function deleteByHotelsId(hotelId) {
  const data = await Hotel.findByIdAndDelete(hotelId);
  return { message: "Hotel deleted successfully", data };
}
app.delete("/hotels/:hotelId", async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const deletedHotel = await deleteByHotelsId(hotelId);
    if (!deletedHotel) {
      res.status(404).json({ message: "Hotel not found" });
    }
    res.json(deletedHotel);
  } catch (error) {
    console.log("Error while deleting hotel data", error);
  }
});

// createHotelData(newHotelData)

// todos :: reading restaurant data from the data base 7.4

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createNewRestaurant(newRestaurantD) {
  const newRestaurant = new NewRestaurant(newRestaurantD);
  const saveData = await newRestaurant.save();
  console.log(saveData);
}
// createNewRestaurant(newRestaurant);

// 1: read newrestaurant data
async function readNewRestaurant() {
  try {
    const data = await NewRestaurant.find();
    console.log("Reading All Data: ", data);
  } catch (error) {
    console.log("Error while reading newRestaurant data", error);
  }
}
// readNewRestaurant();

// 2: get restaurant by name
async function getRestaurantByName(name) {
  const data = await NewRestaurant.findOne({ name });
  console.log("Get Restaurant by name: ", data);
}
// getRestaurantByName("Somi");

// 3 : get restaurant by reseration
async function getRestaurantByReservation() {
  try {
    const data = await NewRestaurant.findOne({ reservationsNeeded: true });
    console.log("restaurant reservation: ", data);
  } catch (error) {
    console.log("Error while getting restaurant by reservation", error);
  }
}
// getRestaurantByReservation();

// 4: restaurant offer delivery
async function getRestaurantByDelivery(delivery) {
  try {
    const data = await NewRestaurant.findOne({ isDeliveryAvailable: delivery });
    console.log("Restaurant by delivery: ", data);
  } catch (error) {
    console.log("Error while getting restaurant by delivery", error);
  }
}
// getRestaurantByDelivery(true);

// 5: get restaurant by using phone number
async function getRestaurantByPhoneNumber(phone) {
  try {
    const data = await NewRestaurant.find({ phoneNumber: phone });
    console.log("get restaurant by phone number: ", data);
  } catch (error) {
    console.log("Error while getting restaurant by phone number", error);
  }
}
// getRestaurantByPhoneNumber("+1288997392");

// 6: get restaurant by cuisine
async function getRestaurantByCuisine(cuisine) {
  try {
    const data = await NewRestaurant.find({ cuisine });
    console.log("Get restaurant by cuisine: ", data);
  } catch (error) {
    console.log("Error while getting restaurant by cuisine", error);
  }
}
// getRestaurantByCuisine("Italian");

//! ------------- New Hotel ------------------
//? : newHote model 7.4 hw2
const newHotelD = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};
async function createNewHotelData(hotelData) {
  try {
    const newHotel = new NewHotel(hotelData);
    const saveData = await newHotel.save();
    console.log(saveData);
  } catch (error) {
    console.log("Error while creating new hotel data", error);
  }
}
// createNewHotelData(newHotelD);

// 1: read all hotels data
async function readAllHotelsData() {
  try {
    const data = await NewHotel.find();
    console.log("Read all hotels data:", data);
  } catch (error) {
    console.log("Error while reading all hotels data", error);
  }
}
// readAllHotelsData();

// 2: read hotel data by name
async function readHotelDataByName(hotelName) {
  try {
    const data = await NewHotel.findOne({ name: hotelName });
    console.log(" Read hotel data by name:", data);
  } catch (error) {
    console.log("Error while reading hotel data by name", error);
  }
}
// readHotelDataByName("Lake View");

// 3 :  restaurant available hotels
async function readRestaurantAvailableHotels(restroAvailable) {
  try {
    const data = await NewHotel.find({
      isRestaurantAvailable: restroAvailable,
    });
    console.log("Restaurant available hotels:", data);
  } catch (error) {
    console.log("Error while reading restaurant available hotels", error);
  }
}
// readRestaurantAvailableHotels(true);

// 3: get hotels by range
async function getHotelsInRange(hotelRange) {
  try {
    const data = await NewHotel.findOne({ category: hotelRange });
    console.log("Hotels in range:", data);
  } catch (error) {
    console.log("Error while getting hotels by range", error);
  }
}
// getHotelsInRange("Mid-Range");

// 4: get hotels by price range
async function getHotelsByPriceRange(hotelPriceRange) {
  try {
    const data = await NewHotel.findOne({ priceRange: hotelPriceRange });
    console.log("Hotels by price range:", data);
  } catch (error) {
    console.log("Error while getting hotels by price range", error);
  }
}
// getHotelsByPriceRange("$$$$ (61+)");

// 5: get hotels by rating
async function getHotelsByRating(hotelRating) {
  try {
    const data = await NewHotel.findOne({ rating: hotelRating });
    console.log("Hotels by rating:", data);
  } catch (error) {
    console.log("Error while getting hotels by rating", error);
  }
}
// getHotelsByRating(4.0);

// 6: get hotels by phone number
async function getHotelsByPhoneNumber(hotelPhoneNumber) {
  try {
    const data = await NewHotel.findOne({ phoneNumber: hotelPhoneNumber });
    console.log("Hotels by phone number:", data);
  } catch (error) {
    console.log("Error while getting hotels by phone number", error);
  }
}
// getHotelsByPhoneNumber("+1299655890");

//todos>>>>>>>>>>>>>> Update Restaurant data >>>>>>>>>>>>>>>>>>>>>

//? 7.5 hw2 : update restaurant data

// 1: update newRestaurant
async function updateNewRestaurantById(restaurantId, dataToUpdat) {
  try {
    const data = await NewRestaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdat,
      { new: true }
    );
    console.log("Updated restaurant data:", data);
  } catch (error) {
    console.log("Error while updating new restaurant", error);
  }
}
// updateNewRestaurantById("677d823b07142bf005d0495b", { rating: 4.1 });

// 2: update new restaurant by its name
async function updateNewRestaurantByName(restaurantName, dataToUpdate) {
  try {
    const data = await NewRestaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      { new: true }
    );
    console.log("Updated restaurant data by title:", data);
  } catch (error) {
    console.log("Error while updating new restaurant by name", error);
  }
}
// updateNewRestaurantByName("Sandeep", { name: "Som Sarovar" });

// 2: update the phonenumber and isDeliveryAvailable is true of NewRestaurant

async function updateNewRestaurantPhoneNumber(restroNumber, dataToUpdate) {
  try {
    const data = await NewRestaurant.findOneAndUpdate(
      {
        phoneNumber: restroNumber,
        isDeliveryAvailable: true,
      },
      dataToUpdate,
      { new: true }
    );
    console.log("Updated restaurant data by phone number:", data);
  } catch (error) {
    console.log("Error while updating new restaurant by phone number", error);
  }
}
// updateNewRestaurantPhoneNumber("+54453132132", { phoneNumber: "+1288997392" });

//todos: --------- update the newHotels data-----------
//? new hotel data update

// 1: update data by its id and update the checkOnTime data
async function updateNewHotelById(hotelId, dataToUpdate) {
  try {
    const data = await NewHotel.findByIdAndUpdate(hotelId, dataToUpdate, {
      new: true,
    });
    console.log("Updated hotel data by id:", data);
  } catch (error) {
    console.log("Error while updating new hotel", error);
  }
}
// updateNewHotelById("677d8c3dd16e021fb0cb5217", { checkOutTime: "11:00 AM" });

// 2: update the hotel name update the rating
async function updateNewHotelByNameAndRating(hotelName, dataToUpdate) {
  try {
    const data = await NewHotel.findOneAndUpdate(
      { name: hotelName },
      dataToUpdate,
      { new: true }
    );
    console.log("Updated hotel data by name:", data);
  } catch (error) {
    console.log("Error while updating new hotel by name", error);
  }
}
// updateNewHotelByNameAndRating("Sunset Resort", { rating: 4.2 });

// 3: update the phone number
async function updateNewHotelPhoneNumber(restroNumber, dataToUpdate) {
  try {
    const data = await NewHotel.findOneAndUpdate(
      {
        phoneNumber: restroNumber,
      },
      dataToUpdate,
      { new: true }
    );
    console.log("Updated hotel data by phone number:", data);
  } catch (error) {
    console.log("Error while updating new hotel by phone number", error);
  }
}
// updateNewHotelPhoneNumber("+1299655890", { phoneNumber: "+1997687392" });

//todos : --------- Delete restaurant data ---------

// 1: delete data by its id
async function deleteRestaurantById(restroId) {
  try {
    const deleteData = await Restaurant.findByIdAndDelete(restroId);
    console.log("Deleted restaurant data by id:", deleteData);
  } catch (error) {
    console.log("Error while deleting restaurant by id", error);
  }
}
// deleteRestaurantById("677d18ba9bbc77e642126b58");

// 2: delete data by its name
async function deleteRestaurantByName(restroName) {
  try {
    const deleteData = await Restaurant.findOneAndDelete({ name: restroName });
    console.log(" Deleted restaurant data by name:", deleteData);
  } catch (error) {
    console.log("Error while deleting restaurant by name", error);
  }
}
// deleteRestaurantByName("Bistro Bliss");

//todos: --------- Delete hotel data ---------

// 1: delete data by its id
async function deleteHotelById(hotelId) {
  try {
    const deleteData = await NewHotel.findByIdAndDelete(hotelId);
    console.log("Deleted hotel data by id:", deleteData);
  } catch (error) {
    console.log("Error while deleting hotel by id", error);
  }
}
// deleteHotelById("677d8c3dd16e021fb0cb5217");

// 2: delete data by its phone number
async function deleteHotelByPhoneNumber(phoneNumber) {
  try {
    const data = await NewHotel.findOneAndDelete({ phoneNumber: phoneNumber });
    console.log("Deleted hotel data by phone number:", data);
  } catch (error) {
    console.log("Error while deleting hotel by phone number", error);
  }
}
// deleteHotelByPhoneNumber("+1234555890");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

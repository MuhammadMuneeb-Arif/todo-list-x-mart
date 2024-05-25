#! /usr/bin/env node
import inquirer from "inquirer";


console.log("welcome to X MART");

let todos = [];
let conditions = true;
while (conditions) {
  let mart = await inquirer.prompt([
    {
      name: "items",
      type: "list",
      message: "What would you like to purchase?",
      choices: [
        "clothes",
        "shoes",
        "food items",
        "sweets",
        "beverages",
        "perfumes",
        "electronics",
        "sports",
        "fitness products",
        "school items",
        "decorative items",
        "tools",
        "makeup items",
        "jewelery items",
        "utensils",
        "musical instruments",
        "furniture items",
        "photography items",
        "camping gear",
        "artistics supplies",
        "barbecue and grilling",
        "agriculture items",
        "bakery equipments",
        "building equipment",
        "cleaning supplies",
        "dental cares",
      ],
    },
  ]);

  if (mart.items === "clothes") {
    let clothes = await inquirer.prompt([
      {
        name: "clothes",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "shirts",
          "trousers",
          "t-shirts",
          "jeans",
          "shorts",
          "sweaters",
          "Jackets",
          "pants",
          "skirts",
        ],
      },
      {
        name: "sizes",
        type: "list",
        message: "What size would you like to purchase?",
        choices: [
          "Small",
          "Medium",
          "Large",
          "Extra large",
          "Extra Extra large",
        ],
      },
    ]);

    todos.push(`${clothes.clothes} with size ${clothes.sizes}`);
  } else if (mart.items === "shoes") {
    let shoes =await inquirer.prompt([
      {
        name: "shoes",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "sneakers",
          "sandals",
          "boots",
          "flats",
          "heels",
          "slippers",
          "loafers",
        ],
      },
      {
        name: "sizes",
        type: "list",
        message: "What size would you like to purchase?",
        choices: [
          "Small",
          "Medium",
          "Large",
          "Extra large",
          "Extra Extra large",
        ],
      },
    ]);
    todos.push(`${shoes.shoes} with size ${shoes.sizes}`);
  } else if (mart.items === "food items") {
    let food = await inquirer.prompt([
      {
        name: "food",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "rice",
          "pulses",
          "fruits",
          "vegetables",
          "dairy products",
          "oil",
          "spices",
          "salt",
          "sugar",
        ],
      },
    ]);
    if (food.food === "rice") {
      let typeRice = await inquirer.prompt([
        {
          name: "rice",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "basmati 370",
            "basmati 198",
            "basmati",
            "pulao",
            "kashmiri rice",
          ],
        },
      ]);

      todos.push(`${food.food}: ${typeRice.rice}`);
    } else if (food.food === "pulses") {
      let typePulses = await inquirer.prompt([
        {
          name: "pulses",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "chana daal",
            "chickpeas",
            "mong daal",
            "lentils",
            "Masoor Dal",
            "Kidney beans",
          ],
        },
      ]);

      todos.push(`${food.food}:${typePulses.pulses}`);
    } else if (food.food === "fruits") {
      let typeFruits = await inquirer.prompt([
        {
          name: "fruits",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "apple",
            "banana",
            "mango",
            "orange",
            "pineapple",
            "grapes",
            "watermelon",
          ],
        },
      ]);

      todos.push(`${food.food}:${typeFruits.fruits}`);
    } else if (food.food === "vegetables") {
      let typeVegetables = await inquirer.prompt([
        {
          name: "vegetables",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "potatoes",
            "tomatoes",
            "onions",
            "carrots",
            "cauliflower",
            "brinjal",
            "peas",
            "cucumber",
          ],
        },
      ]);

      todos.push(` ${food.food}: ${typeVegetables.vegetables}`);
    } else if (food.food === "dairy products") {
      let typeDairy = await inquirer.prompt([
        {
          name: "dairy",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "milk",
            "butter",
            "cheese",
            "yogurt",
            "ice cream",
            "butter milk",
          ],
        },
      ]);

      todos.push(`${food.food}: ${typeDairy.dairy}`);
    } else if (food.food === "oil") {
      let typeOil = await inquirer.prompt([
        {
          name: "oil",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "olive oil",
            "vegetable oil",
            "coconut oil",
            "sunflower oil",
            "palm oil",
            "castor oil",
            "sesame oil",
          ],
        },
      ]);

      todos.push(`${food.food}: ${typeOil.oil}`);
    } else if (food.food === "spices") {
      let typeSpices = await inquirer.prompt([
        {
          name: "spices",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "chilli powder",
            "garlic powder",
            "pepper powder",
            "kashmiri chilli powder",
            "garam masalas",
            "coriander powder",
            "cumin powder",
            "turmeric powder",
            "mustard powder",
            "ginger powder",
            "chaat masala",
          ],
        },
      ]);

      todos.push(`${food.food}: ${typeSpices.spices}`);
    } else if (food.food === "salt") {
      let typeSalt = await inquirer.prompt([
        {
          name: "salt",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["table salt", "sea salt", "kashmiri salt", "pink salt"],
        },
      ]);

      todos.push(`${food.food}: ${typeSalt.salt}`);
    } else if (food.food === "sugar") {
      let typeSugar = await inquirer.prompt([
        {
          name: "sugar",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["table sugar", "white sugar", "black sugar", "brown sugar"],
        },
      ]);

      todos.push(`${food.food}: ${typeSugar.sugar}`);
    }
  } else if (mart.items === "sweets") {
    let sweets = await inquirer.prompt([
      {
        name: "sweets",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "chocolate",
          "candy",
          "chocolate candy",
          "chocolate cake",
          "chocolate ice cream",
          "chocolate mousse",
          "chocolate pudding",
          "chocolate shake",
          "chocolate syrup",
          "chocolate wafers",
          "chocolate bars",
          "chocolate truffles",
        ],
      },
    ]);

    todos.push(`sweets: ${sweets.sweets}`);
  } else if (mart.items === "beverages") {
    let beverages = await inquirer.prompt([
      {
        name: "beverages",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "tea",
          "coffee",
          "juice",
          "water",
          "milk",
          "soda",
          "soft drinks",
        ],
      },
    ]);
    if (beverages.beverages === "tea") {
      let typeTea = await inquirer.prompt([
        {
          name: "tea",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["black tea", "green tea", "normal tea", "herbal tea"],
        },
      ]);

      todos.push(`${beverages.beverages}: ${typeTea.tea}`);
    } else if (beverages.beverages === "coffee") {
      let typeCoffee = await inquirer.prompt([
        {
          name: "coffee",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "black coffee",
            "cappuccino",
            "espresso",
            "latte",
            "mocha",
            "mocha latte",
          ],
        },
      ]);

      todos.push(`${beverages.beverages}: ${typeCoffee.coffee}`);
    } else if (beverages.beverages === "juice") {
      let typeJuice = await inquirer.prompt([
        {
          name: "juice",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "apple juice",
            "orange juice",
            "mango juice",
            "grape juice",
            "pineapple juice",
            "watermelon juice",
            "banana juice",
            "kiwi juice",
            "lemon juice",
          ],
        },
      ]);

      todos.push(`${beverages.beverages}: ${typeJuice.juice}`);
    } else if (beverages.beverages === "water") {
      let typeWater = await inquirer.prompt([
        {
          name: "water",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["bottle water", "glass water"],
        },
      ]);

      todos.push(`${beverages.beverages}: ${typeWater.water}`);
    } else if (beverages.beverages === "milk") {
      let typeMilk = await inquirer.prompt([
        {
          name: "milk",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["bottle milk", "glass milk"],
        },
      ]);

      todos.push(`${beverages.beverages}:${typeMilk.milk}`);
    } else if (beverages.beverages === "soda") {
      let typeSoda = await inquirer.prompt([
        {
          name: "soda",
          type: "list",
          message: "What size would you like to purchase?",
          choices: ["orange soda", " grape soda", " cream soda", "milk soda"],
        },
      ]);

      todos.push(`${beverages.beverages}:${typeSoda.soda}`);
    } else {
      let typeSoftDrinks = await inquirer.prompt([
        {
          name: "softDrinks",
          type: "list",
          message: "What size would you like to purchase?",
          choices: [
            "coke",
            "sprite",
            "fanta",
            "pepsi",
            "mountain dew",
            "cola next",
            "fizz up next",
          ],
        },
      ]);

      todos.push(`${beverages.beverages}:${typeSoftDrinks.softDrinks}`);
    }
  } else if (mart.items === "perfumes") {
    let perfumes = await inquirer.prompt([
      {
        name: "perfumes",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Fogg",
          "Engage",
          "Bella Vita",
          "Yardley London",
          "Plum",
          "Nishane",
          "Hugo Boss",
          "Issey Miyake",
          "Hugo",
          "Xerjoff",
          "Montale",
          "Kemin Blending Magic",
          "Versace",
          "Louis Vuitton",
          "Memo",
          "Atelier",
          "Tiffany & Co",
          "Moschino",
          "deep red",
        ],
      },
    ]);

    todos.push(`perfume : ${perfumes.perfumes}`);
  } else if (mart.items === "electronics") {
    let electronics = await inquirer.prompt([
      {
        name: "electronics",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "smartphone",
          "tablet",
          "laptop",
          "cables",
          "desktop computer",
          "devices",
          "home accessories",
        ],
      },
    ]);
    if (electronics.electronics === "smartphone") {
      let smartphone = await inquirer.prompt([
        {
          name: "Smartphone",
          type: "list",
          message: "What would you like to purchase?",
          choices: [
            "iphone",
            "samsung",
            "techno ",
            "vivo",
            "Readme",
            "one plus",
            "Q mobile",
            "Xiaomi",
            "oppo",
            "huawei",
            "nokia",
            "lenovo",
            "asus",
            "motorolla",
          ],
        },
      ]);
      todos.push(`${electronics.electronics}: ${smartphone.Smartphone}`);
    } else if (electronics.electronics === "tablet") {
      let tablet = await inquirer.prompt([
        {
          name: "Tablet",
          type: "list",
          message: "What would you like to purchase?",
          choices: [
            "ipad",
            "samsung",
            "techno ",
            "vivo",
            "Readme",
            "one plus",
            "Q mobile",
            "Xiaomi",
            "oppo",
            "huawei",
            "nokia",
            "lenovo",
            "asus",
            "motorolla",
          ],
        },
      ]);
      todos.push(`${electronics.electronics}: ${tablet.Tablet}`);
    } else if (electronics.electronics === "laptop") {
      let laptop = await inquirer.prompt([
        {
          name: "Laptop",
          type: "list",
          message: "What would you like to purchase?",
          choices: ["hp", "dell", "lenovo", "acer", "asus", "apple"],
        },
      ]);
      todos.push(`${electronics.electronics}: ${laptop.Laptop}`);
    } else if (electronics.electronics === "devices") {
      let devices = await inquirer.prompt([
        {
          name: "Devices",
          type: "list",
          message: "What would you like to purchase?",
          choices: [
            "mouse",
            "keyboard",
            "headphones",
            "monitor",
            "printer",
            "camera",
            "speaker",
            "microphone",
            "Joysticks",
            "Headphones",
            "Remote",
            "Light Pen",
            "Gamepad",
            "Plotter",
            "Webcam",
            "Projectors",
            "3D Printers",
            "Earphones",
            "Game controller",
            "Scanner",
            "USB drive",
            "Hard Disk",
            "Floppy Disk",
            "compact disk",
            "graphic tablet",
            "track ball",
          ],
        },
      ]);

      todos.push(`${electronics.electronics}: ${devices.Devices}`);
    } else if (electronics.electronics === "cables") {
      let cables = await inquirer.prompt([
        {
          name: "cables",
          type: "list",
          message: "What would you like to purchase?",
          choices: [
            "usb cables",
            "hdmi cables",
            "vga cables",
            "dvi cables",
            "data cables",
            "cv cable",
            "coaxial cables",
            "twisted pairs",
            " optical fibers",
            "patch cables",
            "power cables",
            "Armored cables",
            "Control cables",
            " Aluminium cables",
            "Ethernet Cable",
          ],
        },
      ]);
      todos.push(`${electronics.electronics}: ${cables.cables}`);
    } else if (electronics.electronics === "home accessories") {
      let homeAccessories = await inquirer.prompt([
        {
          name: "homeAccessories",
          type: "list",
          message: "What would you like to purchase?",
          choices: [
            "Refrigerators",
            "Freezers",
            "Ovens",
            "Microwaves",
            "Dishwashers",
            "Washing Machines",
            "Dryers",
            "Air Conditioners",
            "Heaters",
            "Fans",
            "Vacuum Cleaners",
            "Mops",
            "Ironing Boards",
            "Steam Cleaners",
            "Coffee Makers",
            "Toaster Ovens",
            "Toasters",
            "Blenders",
            "Mixers",
            "Food Processors",
            "Slow Cookers",
            "Stand Mixers",
          ],
        },
      ]);
      todos.push(
        `${electronics.electronics}: ${homeAccessories.homeAccessories}`
      );
    }
  } else if (mart.items === "sports") {
    let sports = await inquirer.prompt([
      {
        name: "sports",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Cricket Bats",
          "Cricket Balls",
          "Cricket Gloves",
          "Cricket Pads",
          "Cricket Helmets",
          "Cricket Shoes",
          "Cricket Socks",
          "Cricket Jerseys",
          "Cricket Uniforms",
          "Football Balls",
          "Football Helmets",
          "Football Pads",
          "Football Gloves",
          "Football Cleats",
          "Football Shoes",
          "Football Socks",
          "Football Jerseys",
          "Football Uniforms",
          "Basketball Balls",
          "Basketball Shoes",
          "Basketball Socks",
          "Basketball Jerseys",
          "Basketball Uniforms",
          "Badminton Rackets",
          "Badminton Shuttlecocks",
          "Badminton Shoes",
          "Badminton Socks",
          "Badminton Jerseys",
          "Badminton Uniforms",
          "Tennis Rackets",
          "Tennis Balls",
          "Tennis Shoes",
          "Tennis Socks",
          "Tennis Jerseys",
          "Tennis Uniforms",
          "Hockey Sticks",
          "Hockey Balls",
          "Hockey Gloves",
          "Hockey Pads",
          "Hockey Helmets",
          "Hockey Shoes",
          "Hockey Socks",
          "Hockey Jerseys",
          "Hockey Uniforms",
          "Polo Mallets",
          "Polo Balls",
          "Polo Gloves",
          "Polo Helmets",
          "Polo Shoes",
          "Polo Socks",
          "Polo Jerseys",
          "Polo Uniforms",
        ],
      },
    ]);

    todos.push(`${mart.items}: ${sports.sports}`);
  } else if (mart.items === "fitness products") {
    let fitnessProducts = await inquirer.prompt([
      {
        name: "fitnessProducts",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Treadmills",
          "Elliptical Trainers",
          "Exercise Bikes",
          "Exercise Machines",
          "Weights",
          "Weights Bars",
          "Weights Plate",
          "Weights Bench",
          "Weights Bench Plate",
          "Yoga Mats",
          "Yoga Blocks",
          "Yoga Straps",
          "Yoga Bags",
          "Jump Ropes",
          "Resistance Bands",
          "Kettlebells",
          "Dumbbells",
          "Weight Plates",
          "Weight Bars",
          "Exercise Balls",
          "Exercise Mats",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${fitnessProducts.fitnessProducts}`);
  } else if (mart.items === "school items") {
    let schoolItems = await inquirer.prompt([
      {
        name: "schoolItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Pencils",
          "Pens",
          "Pencil Cases",
          "Eraser",
          "Sharpeners",
          "Notebooks",
          "Binders",
          "Folder",
          "Paper",
          "Glue",
          "Scissors",
          "Rulers",
          "Protractors",
          "Calculators",
          "Highlighters",
          "Markers",
          "Colored Pencils",
          "Crayons",
          "Paints",
          "Brushes",
          "Pencil Tops",
          "Bookmarks",
          "Musical Instruments",
          "Art Supplies",
          "Science Kits",
          "Math Tools",
          "Language Workbooks",
          "Activity Materials",
          "Stickers",
          "Tape",
          "Glue Sticks",
          "Pencil Grips",
          "Ruler Edge",
          "Pencil Sharpener Cases",
          "staplers",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${schoolItems.schoolItems}`);
  } else if (mart.items === "decorative items") {
    let decorativeItems = await inquirer.prompt([
      {
        name: "decorativeItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Wall Art",
          "Paintings",
          "Photographs",
          "Posters",
          "Prints",
          "Mirrors",
          "Vases",
          "Flowers",
          "Candles",
          "Decorative Objects",
          "Sculptures",
          "Figurines",
          "Ornaments",
          "Rugs",
          "Mats",
          "Door Mats",
          "Welcome Signs",
          "Wall Shelves",
          "Decorative Plates",
          "Centerpieces",
          "Coasters",
          "Placemats",
          "Table Runners",
          "Curtains",
          "Blinds",
          "Window Treatments",
          "Lighting Fixtures",
          "Lamps",
          "Chandeliers",
          "Sconces",
          "String Lights",
          "Fairy Lights",
          "Decorative Pillows",
          "Throw Blankets",
          "Baskets",
          "Storage Containers",
          "Decorative Boxes",
          "Trinket Dishes",
          "Vases",
          "Urns",
          "Decorative Accents",
          "Seasonal Decorations",
          "Holiday Decorations",
          "Themed Decorations",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${decorativeItems.decorativeItems}`);
  } else if (mart.items === "tools") {
    let tools = await inquirer.prompt([
      {
        name: "tools",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Hammers",
          "Screwdrivers",
          "Wrenches",
          "Saws",
          "Pliers",
          "Drills",
          "Circular Saws",
          "Angle Grinders",
          "Electric Sanders",
          "Routers",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${tools.tools}`);
  } else if (mart.items === "makeup items") {
    let makeupItems = await inquirer.prompt([
      {
        name: "makeup",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Foundation",
          "Concealer",
          "Powder",
          "Blush",
          "Eyeshadow",
          "Mascara",
          "Eyeliner",
          "Lipstick",
          "Lip Gloss",
          "Makeup Remover",
          "Makeup Brushes",
          "Makeup Sponges",
          "Foundation Applicators",
          "Concealer Brushes",
          "Powder Puffs",
          "Blush Brushes",
          "Eye Shadow Brushes",
          "Mascara Wands",
          "Lip Brushes",
          "Makeup Kits",
          "Makeup Palettes",
          "Makeup Collections",
          "Makeup Bags",
          "Makeup Cases",
          "Cleanser",
          "Moisturizer",
          "Toners",
          "Exfoliants",
          "Face Masks",
          "Serums",
          "Eye Creams",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${makeupItems.makeup}`);
  } else if (mart.items === "jewelery items") {
    let jeweleryItems = await inquirer.prompt([
      {
        name: "jeweleryItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Necklaces",
          "Earrings",
          "Rings",
          "Bracelets",
          "Pendants",
          "Brooches",
          "Charms",
          "Pins",
          "Jewelry Sets",
          "Jewelry Boxes",
          "Jewelry Cases",
          "Jewelry Organizers",
          "Jewelry Bags",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${jeweleryItems.jeweleryItems}`);
  } else if (mart.items === "utensils") {
    let utensils = await inquirer.prompt([
      {
        name: "utensils",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Cutlery",
          "Knives",
          "Forks",
          "Spoons",
          "Plates",
          "Bowls",
          "Cups",
          "Mugs",
          "Pots",
          "Pans",
          "Graters",
          "Slicers",
          "Spatulas",
          "Saucepans",
          "Tongs",
          "Bowls",
          "Measuring Cups",
          "Measuring Spoons",
          "Saucers",
          "Serving Spoons",
          "Teaspoons",
          "Table Forks",
          "Table Knives",
          "Tablespoons",
        ],
      },
    ]);

    todos.push(`${mart.items}: ${utensils.utensils}`);
  } else if (mart.items === "musical instruments") {
    let musicalItems = await inquirer.prompt([
      {
        name: "musicalinstruments",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Acoustic Guitars",
          "Amplifiers",
          "Banjos",
          "Clarinets",
          "Electric Guitars",
          "Flutes",
          "French Horns",
          "Glockenspiels",
          "Harmonicas",
          "Kazoos",
          "Marimbas",
          "Oboes",
          "Piccolos",
          "Recorder",
          "Trombones",
          "Tubas",
          "Ukuleles",
          "Xylophones",
          "Bass Guitars",
          "Cellos",
          "Drums",
          "Guitars",
          "Harps",
          "Keyboards",
          "Microphones",
          "Pianos",
          "Saxophones",
          "Trumpets",
          "Violins",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${musicalItems.musicalinstruments}`);
  } else if (mart.items === "furniture items") {
    let furnitureItems = await inquirer.prompt([
      {
        name: "furniture",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Benches",
          "Bunk Beds",
          "Chests",
          "Console Tables",
          "Couches",
          "Curio Cabinets",
          "Futons",
          "Gliders",
          "Headboards",
          "Ottomans",
          "Poufs",
          "Rocking Chairs",
          "Sectionals",
          "Settees",
          "Side Tables",
          "Sleeper Sofas",
          "Stools",
          "Vanity Tables",
          "Wardrobes",
          "Armchairs",
          "Bed Frames",
          "Bookshelves",
          "Cabinets",
          "Chairs",
          "Coffee Tables",
          "Desks",
          "Dining Tables",
          "Dressers",
          "End Tables",
          "Hutches",
          "Lamps",
          "Loveseats",
          "Mattresses",
          "Nightstands",
          "Recliners",
          "Sofas",
          "TV Stands",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${furnitureItems.furniture}`);
  } else if (mart.items === "photography items") {
    let photographyItems = await inquirer.prompt([
      {
        name: "photographyItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Camera Bags",
          "Camera Cases",
          "Camera Lenses",
          "Camera Accessories",
          "Camera Film",
          "Camera Flash",
          "Camera Filters",
          "Camera Flash Accessories",
          "Camera Flash Batteries",
          "Camera Flash Chargers",
          "Camera Flashes",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${photographyItems.photographyItems}`);
  } else if (mart.items === "camping gear") {
    let campingItems = await inquirer.prompt([
      {
        name: "campingItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Tents",
          "Sleeping Bags",
          "Sleeping Pad",
          "Sleeping Pillows",
          "Sleeping Quilts",
          "Sleeping Sacks",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${campingItems.campingItems}`);
  } else if (mart.items === "artistics supplies") {
    let artisticItems = await inquirer.prompt([
      {
        name: "artisticItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Airbrushes",
          "Artistic Wire",
          "Beading Supplies",
          "Ceramic Supplies",
          "Clay",
          "Craft Knives",
          "Cutting Mats",
          "Digital Drawing Tablets",
          "Drawing Boards",
          "Fabric Paint",
          "Glass Paint",
          "Graphic Markers",
          "Illustration Boards",
          "Masking Tape",
          "Mixed Media Supplies",
          "Mosaic Tiles",
          "Painting Mediums",
          "Printmaking Supplies",
          "Rulers",
          "Sculpting Tools",
          "Sharpeners",
          "Spray Paint",
          "Stencils",
          "Tapestry Needles",
          "Acrylic Paints",
          "Brushes",
          "Canvases",
          "Charcoal",
          "Colored Pencils",
          "Crayons",
          "Easels",
          "Glue",
          "Ink",
          "Markers",
          "Oil Paints",
          "Painting Knives",
          "Paper",
          "Pastels",
          "Pencils",
          "Scissors",
          "Sketchbooks",
          "Watercolors",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${artisticItems.artisticItems}`);
  } else if (mart.items === "barbecue and grilling") {
    let barbecueItems = await inquirer.prompt([
      {
        name: "barbecueItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "BBQ Sauce",
          "Basting Brushes",
          "Charcoal",
          "Grill Baskets",
          "Grill Grates",
          "Grill Mats",
          "Grill Tongs",
          "Grills",
          "Marinades",
          "Meat Thermometers",
          "Pizza Stones",
          "Rib Racks",
          "Skewers",
          "Smokers",
          "Tinfoil",
          "Wood Chips",
          "Aprons",
          "BBQ Gloves",
          "Burgers Presses",
          "Camping Grills",
          "Ceramic Grills",
          "Chimney Starters",
          "Corn Holders",
          "Grill Covers",
          "Grill Lights",
          "Grill Tops",
          "Grilling Accessories",
          "Heat Deflectors",
          "Kabob Racks",
          "Meat Claws",
          "Outdoor Ovens",
          "Pellet Grills",
          "Pizza Ovens",
          "Rotisseries",
          "Smoker Chips",
          "Steak Stones",
          "Turkey Fryers",
          "Veggie Grills",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${barbecueItems.barbecueItems}`);
  } else if (mart.items === "agriculture items") {
    let agricultureItems = await inquirer.prompt([
      {
        name: "agricultureItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Commercial Vegetable Seeds",
          "Tunnel Farming Materials",
          "Pest Control Products",
          "Kitchen Gardening tools",
          "Seedling Trays",
          "Vegetable Seeds",
          "Cucumber Seeds",
          "Black Wheat",
          "Hybrid Seed",
          "Fertilizer",
          "Non-Woven Fabric Tissue",
          "Cultivators",
          "Sprayers",
          "Greenhouses",
          "Garden Tools",
          "Livestock Feed",
          "Farm Equipment",
          "Agricultural Chemicals",
          "Soil Testers",
          "Monitoring Systems",
          "Drones",
          "Farm Gates",
          "Fencing Materials",
          "Grafting Tools",
          "Haying Equipment",
          "Horticulture Supplies",
          "Irrigation Pumps",
          "Livestock Scales",
          "Manure Spreaders",
          "Mulchers",
          "Orchard Equipment",
          "Poultry Supplies",
          "Rural Fencing",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${agricultureItems.agricultureItems}`);
  } else if (mart.items === "bakery equipments") {
    let bakeryItems = await inquirer.prompt([
      {
        name: "bakeryItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Bakery Cases",
          "Bakery Ovens",
          "Bread Moulders",
          "Bread Slicers",
          "Cake Decorating Supplies",
          "Commercial Mixers",
          "Cookie Sheets",
          "Dough Dividers",
          "Dough Mixers",
          "Dough Sheeters",
          "Fryers",
          "Measuring Cups",
          "Measuring Spoons",
          "Pastry Brushes",
          "Proofers",
          "Racks",
          "Sheeters",
          "Tables",
          "Tilting Skillets",
          "Water Measuring Tanks",
        ],
      },
    ]);
    todos.push(`bakery items: ${bakeryItems.bakeryItems}`);
  } else if (mart.items === "building equipment") {
    let buildingItems = await inquirer.prompt([
      {
        name: "buildingItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Air Compressors",
          "Buckets",
          "Cement Mixers",
          "Drills",
          "Generators",
          "Hammers",
          "Jackhammers",
          "Ladders",
          "Levels",
          "Paint Sprayers",
          "Pneumatic Tools",
          "Power Saws",
          "Pumps",
          "Rakes",
          "Sandpaper",
          "Saws",
          "Scaffolding",
          "Shovels",
          "Tamping Tools",
          "Trenchers",
          "Welding Equipment",
          "Wheelbarrows",
        ],
      },
    ]);
    todos.push(`building items : ${buildingItems.buildingItems}`);
  } else if (mart.items === "cleaning supplies") {
    let cleaningItems = await inquirer.prompt([
      {
        name: "cleaningItems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "All-Purpose Cleaners",
          "Baking Soda",
          "Bleach",
          "Brooms",
          "Dish Soap",
          "Dish Towels",
          "Dusters",
          "Floor Cleaners",
          "Glass Cleaners",
          "Mops",
          "Pest Control Sprays",
          "Scouring Powder",
          "Sponges",
          "Toilet Bowl Cleaners",
          "Vacuum Cleaners",
          "Window Cleaners",
          "Air Fresheners",
          "Antibacterial Wipes",
          "Carpet Cleaners",
          "Cleaning Caddies",
          "Disinfectant Sprays",
          "Dusting Sprays",
          "Fabric Softeners",
          "Furniture Polish",
          "Grout Cleaners",
          "Laundry Detergent",
          "Microfiber Cloths",
          "Mold and Mildew Removers",
          "Paper Towels",
          "Rubber Gloves",
          "Scrub Brushes",
          "Tile and Grout Cleaners",
          "Trash Bags",
          "Upholstery Cleaners",
          "Vacuum Filters",
          "Wood Floor Cleaners",
        ],
      },
    ]);
    todos.push(`${mart.items}: ${cleaningItems.cleaningItems}`);
  } else if (mart.items === "dental cares") {
    let dentalItems = await inquirer.prompt([
      {
        name: "dentalitems",
        type: "list",
        message: "What would you like to purchase?",
        choices: [
          "Brush Heads",
          "Dental Floss Picks",
          "Dental Tape",
          "Desensitizing Toothpaste",
          "Fluoride Mouthwash",
          "Interdental Brushes",
          "Mouthguards",
          "Plaque Removers",
          "Sensitivity Relief Toothpaste",
          "Teeth Whitening Kits",
          "Toothbrush Holders",
          "Toothpaste for Sensitive Teeth",
          "Tongue Cleaners",
          "Waterpik Tips",
          "Anti-Plaque Toothpaste",
          "Bad Breath Sprays",
          "Cavity Protection Toothpaste",
          "Dental Chewing Gum",
          "Dental Disclosing Tablets",
          "Dental Floss Threaders",
          "Dental Picks",
          "Gingivitis Treatment",
          "Mouthwash for Gingivitis",
          "Oral Pain Relievers",
          "Orthodontic Wax",
          "Plaque Disclosing Solutions",
          "Sonic Toothbrushes",
          "Teeth Grinding Guards",
          "Teeth Whitening Strips",
          "Tooth Decay Prevention",
          "Tooth Sensitivity Treatments",
        ],
      },
    ]
  );
  todos.push(`${mart.items}: ${dentalItems.dentalitems}`);
 

  }

  console.log(todos);

  let addMenu = await inquirer.prompt([
    {
      name: "addMore",
      type: "confirm",
      message: "Would you like to add more?",
      default: "False",
    },
  ]);

  conditions = addMenu.addMore;
}

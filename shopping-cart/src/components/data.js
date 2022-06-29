/*
..--.._..--.._..--.._..--.._
OBS: Eu não estava conseguindo fazer a busca da api com o fetch então fiz dessa forma,
com os dados da api salvos nesse arquivo data.js
Porém consegui fazer com o fetch então esse código ficou comentado.
--.._..--.._..--.._..--_..--


  const data = {
  products:
    [
      {
        "createdAt": "2021-11-12T03:25:21.888Z",
        "name": "Intelligent Metal Keyboard",
        "product": "Bacon",
        "price": "712.00",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "1"
      },
      {
        "createdAt": "2021-11-11T15:00:10.723Z",
        "name": "Incredible Metal Pants",
        "product": "Pizza",
        "price": "723.00",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "department": "Movies",
        "image": "https://lorempixel.com/640/480/food",
        "id": "2"
      },
      {
        "createdAt": "2021-11-11T15:15:53.493Z",
        "name": "Rustic Wooden Shoes",
        "product": "Chicken",
        "price": "803.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Clothing",
        "image": "https://lorempixel.com/640/480/food",
        "id": "3"
      },
      {
        "createdAt": "2021-11-11T19:35:50.763Z",
        "name": "Fantastic Metal Cheese",
        "product": "Mouse",
        "price": "3.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Baby",
        "image": "https://lorempixel.com/640/480/food",
        "id": "4"
      },
      {
        "createdAt": "2021-11-12T04:58:40.668Z",
        "name": "Fantastic Granite Car",
        "product": "Shirt",
        "price": "938.00",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "department": "Computers",
        "image": "https://lorempixel.com/640/480/food",
        "id": "5"
      },
      {
        "createdAt": "2021-11-12T06:20:16.537Z",
        "name": "Rustic Granite Shirt",
        "product": "Computer",
        "price": "114.00",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "department": "Toys",
        "image": "https://lorempixel.com/640/480/food",
        "id": "6"
      },
      {
        "createdAt": "2021-11-11T18:31:06.033Z",
        "name": "Small Granite Cheese",
        "product": "Chips",
        "price": "751.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "department": "Clothing",
        "image": "https://lorempixel.com/640/480/food",
        "id": "7"
      },
      {
        "createdAt": "2021-11-12T02:31:21.932Z",
        "name": "Sleek Plastic Pizza",
        "product": "Sausages",
        "price": "238.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Shoes",
        "image": "https://lorempixel.com/640/480/food",
        "id": "8"
      },
      {
        "createdAt": "2021-11-12T08:46:25.507Z",
        "name": "Small Soft Sausages",
        "product": "Keyboard",
        "price": "200.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "department": "Sports",
        "image": "https://lorempixel.com/640/480/food",
        "id": "9"
      },
      {
        "createdAt": "2021-11-12T03:28:00.258Z",
        "name": "Generic Plastic Towels",
        "product": "Tuna",
        "price": "782.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Baby",
        "image": "https://lorempixel.com/640/480/food",
        "id": "10"
      },
      {
        "createdAt": "2021-11-12T13:24:37.857Z",
        "name": "Small Frozen Tuna",
        "product": "Salad",
        "price": "750.00",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "department": "Outdoors",
        "image": "https://lorempixel.com/640/480/food",
        "id": "11"
      },
      {
        "createdAt": "2021-11-12T06:06:47.420Z",
        "name": "Awesome Wooden Chicken",
        "product": "Sausages",
        "price": "281.00",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "department": "Toys",
        "image": "https://lorempixel.com/640/480/food",
        "id": "12"
      },
      {
        "createdAt": "2021-11-12T08:56:23.690Z",
        "name": "Tasty Soft Pizza",
        "product": "Ball",
        "price": "292.00",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "department": "Clothing",
        "image": "https://lorempixel.com/640/480/food",
        "id": "13"
      },
      {
        "createdAt": "2021-11-11T17:13:07.367Z",
        "name": "Licensed Rubber Pizza",
        "product": "Cheese",
        "price": "27.00",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "department": "Kids",
        "image": "https://lorempixel.com/640/480/food",
        "id": "14"
      },
      {
        "createdAt": "2021-11-12T12:23:27.540Z",
        "name": "Generic Metal Computer",
        "product": "Fish",
        "price": "388.00",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "department": "Music",
        "image": "https://lorempixel.com/640/480/food",
        "id": "15"
      },
      {
        "createdAt": "2021-11-12T05:38:29.026Z",
        "name": "Handcrafted Granite Bike",
        "product": "Sausages",
        "price": "689.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "16"
      },
      {
        "createdAt": "2021-11-12T06:17:36.120Z",
        "name": "Incredible Concrete Pizza",
        "product": "Computer",
        "price": "968.00",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "department": "Home",
        "image": "https://lorempixel.com/640/480/food",
        "id": "17"
      },
      {
        "createdAt": "2021-11-11T15:02:48.638Z",
        "name": "Awesome Metal Pizza",
        "product": "Table",
        "price": "309.00",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "department": "Electronics",
        "image": "https://lorempixel.com/640/480/food",
        "id": "18"
      },
      {
        "createdAt": "2021-11-11T18:13:50.988Z",
        "name": "Incredible Granite Chicken",
        "product": "Shirt",
        "price": "771.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Electronics",
        "image": "https://lorempixel.com/640/480/food",
        "id": "19"
      },
      {
        "createdAt": "2021-11-11T22:09:30.149Z",
        "name": "Refined Frozen Shoes",
        "product": "Pants",
        "price": "477.00",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "department": "Health",
        "image": "https://lorempixel.com/640/480/food",
        "id": "20"
      },
      {
        "createdAt": "2021-11-11T21:44:40.616Z",
        "name": "Licensed Wooden Shirt",
        "product": "Soap",
        "price": "814.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Sports",
        "image": "https://lorempixel.com/640/480/food",
        "id": "21"
      },
      {
        "createdAt": "2021-11-12T01:10:49.522Z",
        "name": "Generic Frozen Mouse",
        "product": "Fish",
        "price": "712.00",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "22"
      },
      {
        "createdAt": "2021-11-12T11:41:06.382Z",
        "name": "Incredible Concrete Hat",
        "product": "Table",
        "price": "526.00",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "department": "Sports",
        "image": "https://lorempixel.com/640/480/food",
        "id": "23"
      },
      {
        "createdAt": "2021-11-12T09:42:47.664Z",
        "name": "Practical Cotton Table",
        "product": "Sausages",
        "price": "829.00",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "department": "Clothing",
        "image": "https://lorempixel.com/640/480/food",
        "id": "24"
      },
      {
        "createdAt": "2021-11-12T12:49:22.604Z",
        "name": "Ergonomic Granite Tuna",
        "product": "Bike",
        "price": "260.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "department": "Shoes",
        "image": "https://lorempixel.com/640/480/food",
        "id": "25"
      },
      {
        "createdAt": "2021-11-11T22:12:52.034Z",
        "name": "Practical Rubber Hat",
        "product": "Computer",
        "price": "699.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Kids",
        "image": "https://lorempixel.com/640/480/food",
        "id": "26"
      },
      {
        "createdAt": "2021-11-11T17:18:37.800Z",
        "name": "Small Concrete Bike",
        "product": "Fish",
        "price": "128.00",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "department": "Outdoors",
        "image": "https://lorempixel.com/640/480/food",
        "id": "27"
      },
      {
        "createdAt": "2021-11-11T22:49:04.241Z",
        "name": "Rustic Frozen Ball",
        "product": "Pants",
        "price": "337.00",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "department": "Computers",
        "image": "https://lorempixel.com/640/480/food",
        "id": "28"
      },
      {
        "createdAt": "2021-11-12T03:02:19.191Z",
        "name": "Gorgeous Fresh Shirt",
        "product": "Chair",
        "price": "777.00",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "department": "Beauty",
        "image": "https://lorempixel.com/640/480/food",
        "id": "29"
      },
      {
        "createdAt": "2021-11-12T13:41:01.674Z",
        "name": "Intelligent Metal Ball",
        "product": "Car",
        "price": "460.00",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "department": "Kids",
        "image": "https://lorempixel.com/640/480/food",
        "id": "30"
      },
      {
        "createdAt": "2021-11-11T16:53:01.571Z",
        "name": "Handmade Concrete Chicken",
        "product": "Mouse",
        "price": "24.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Books",
        "image": "https://lorempixel.com/640/480/food",
        "id": "31"
      },
      {
        "createdAt": "2021-11-12T05:18:20.530Z",
        "name": "Refined Rubber Hat",
        "product": "Sausages",
        "price": "908.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "department": "Jewelery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "32"
      },
      {
        "createdAt": "2021-11-11T23:46:48.174Z",
        "name": "Licensed Plastic Pants",
        "product": "Sausages",
        "price": "985.00",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "department": "Automotive",
        "image": "https://lorempixel.com/640/480/food",
        "id": "33"
      },
      {
        "createdAt": "2021-11-12T08:54:31.842Z",
        "name": "Tasty Frozen Ball",
        "product": "Chips",
        "price": "411.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Books",
        "image": "https://lorempixel.com/640/480/food",
        "id": "34"
      },
      {
        "createdAt": "2021-11-12T05:18:26.696Z",
        "name": "Handcrafted Granite Chips",
        "product": "Chair",
        "price": "723.00",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "department": "Grocery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "35"
      },
      {
        "createdAt": "2021-11-11T20:45:38.891Z",
        "name": "Sleek Rubber Keyboard",
        "product": "Shirt",
        "price": "252.00",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "department": "Shoes",
        "image": "https://lorempixel.com/640/480/food",
        "id": "36"
      },
      {
        "createdAt": "2021-11-11T17:11:54.973Z",
        "name": "Gorgeous Fresh Bike",
        "product": "Shirt",
        "price": "858.00",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "37"
      },
      {
        "createdAt": "2021-11-12T05:54:06.760Z",
        "name": "Gorgeous Concrete Soap",
        "product": "Computer",
        "price": "5.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "department": "Garden",
        "image": "https://lorempixel.com/640/480/food",
        "id": "38"
      },
      {
        "createdAt": "2021-11-11T23:02:38.497Z",
        "name": "Awesome Fresh Shoes",
        "product": "Gloves",
        "price": "717.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Jewelery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "39"
      },
      {
        "createdAt": "2021-11-12T08:15:16.385Z",
        "name": "Gorgeous Metal Bacon",
        "product": "Fish",
        "price": "944.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "40"
      },
      {
        "createdAt": "2021-11-11T16:51:13.043Z",
        "name": "Refined Fresh Soap",
        "product": "Ball",
        "price": "510.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "41"
      },
      {
        "createdAt": "2021-11-11T16:54:28.007Z",
        "name": "Tasty Rubber Sausages",
        "product": "Pizza",
        "price": "652.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "department": "Clothing",
        "image": "https://lorempixel.com/640/480/food",
        "id": "42"
      },
      {
        "createdAt": "2021-11-12T08:17:43.441Z",
        "name": "Ergonomic Rubber Chicken",
        "product": "Soap",
        "price": "199.00",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "department": "Computers",
        "image": "https://lorempixel.com/640/480/food",
        "id": "43"
      },
      {
        "createdAt": "2021-11-12T08:34:24.210Z",
        "name": "Incredible Frozen Bike",
        "product": "Tuna",
        "price": "365.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Electronics",
        "image": "https://lorempixel.com/640/480/food",
        "id": "44"
      },
      {
        "createdAt": "2021-11-11T14:29:56.050Z",
        "name": "Handmade Metal Gloves",
        "product": "Cheese",
        "price": "426.00",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "department": "Shoes",
        "image": "https://lorempixel.com/640/480/food",
        "id": "45"
      },
      {
        "createdAt": "2021-11-12T08:04:29.995Z",
        "name": "Gorgeous Plastic Pizza",
        "product": "Chair",
        "price": "43.00",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "department": "Games",
        "image": "https://lorempixel.com/640/480/food",
        "id": "46"
      },
      {
        "createdAt": "2021-11-12T08:25:05.277Z",
        "name": "Fantastic Concrete Hat",
        "product": "Gloves",
        "price": "537.00",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "department": "Shoes",
        "image": "https://lorempixel.com/640/480/food",
        "id": "47"
      },
      {
        "createdAt": "2021-11-11T19:46:31.506Z",
        "name": "Handmade Frozen Salad",
        "product": "Tuna",
        "price": "745.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Jewelery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "48"
      },
      {
        "createdAt": "2021-11-12T04:39:49.358Z",
        "name": "Rustic Cotton Soap",
        "product": "Chair",
        "price": "586.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Jewelery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "49"
      },
      {
        "createdAt": "2021-11-11T21:45:47.514Z",
        "name": "Tasty Granite Mouse",
        "product": "Chicken",
        "price": "65.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "department": "Jewelery",
        "image": "https://lorempixel.com/640/480/food",
        "id": "50"
      }
    ]
};

export default data



*/
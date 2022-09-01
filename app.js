/*
// ASSIGNMENT 1
// Create a Constructor for creating users or employee's data ( id, employee name, father name, email, address, designation, experience, salary)

// Creating a Constructor
function Data(
  id,
  name,
  fatherName,
  email,
  address,
  designation,
  experience,
  salary
) {
  this.id = id;
  this.name = name;
  this.fatherName = fatherName;
  this.email = email;
  this.address = address;
  this.designation = designation;
  this.experience = experience;
  this.salary = salary;
}
// Constructor Ended

// Declaring Variables & passing Arguments
let data1 = new Data(
  "1001",
  "George",
  "Cello",
  "george123@gmail.com",
  "xyz street USA",
  "CEO",
  "10 years",
  "2000$"
);
let data2 = new Data(
  "1002",
  "Tom",
  "Broad",
  "tom123@gmail.com",
  "xyz street USA",
  "Senior Developer",
  "8 years",
  "1000$"
);
let data3 = new Data(
  "1003",
  "Thea",
  "Armor",
  "thea123@gmail.com",
  "xyz street USA",
  "Designer",
  "5 years",
  "500$"
);
let data4 = new Data(
  "1004",
  "Joe",
  "Tenno",
  "joe123@gmail.com",
  "xyz street USA",
  "Supervisor",
  "3 years",
  "300$"
);
let data5 = new Data(
  "1005",
  "Denny",
  "Root",
  "root123@gmail.com",
  "xyz street USA",
  "Manager",
  "4 years",
  "500$"
);
let allData = [data1, data2, data3, data4 , data5] ;
// Declaration & Arguments Ended

// Targeting Element From Html
let table = document.getElementById("table");
let tr = document.createElement("tr");
// Targeting Ended

// Printing Table Header
for (let key in data1) {
  let td = document.createElement("td");
  let text = document.createTextNode(key);
  td.appendChild(text);
  tr.appendChild(td)
  table.appendChild(tr)
}
// Table Header Ended

// Printing Table Using For In & FOR LOOP
for (let i = 0; i < allData.length; i++) {
  let trow = document.createElement("tr");
  for (let key in allData[i]) {
    let tdata = document.createElement("td");
    let text2 = document.createTextNode(allData[i][key]);
    tdata.appendChild(text2);
    trow.appendChild(tdata);
    table.appendChild(trow);
  }
  }
// Printing Ended
*/

/*
// Assignment 2
// Create Shapes Using Constructor and display them on browser

// Creating Constructor For Shapes
function Shapes(width, height, color, border, borderRadius , transform) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.border = border;
  this.borderRadius = borderRadius;
  this.transform = transform
}
// Constructor Ended

// Declaring Variables for Shapes
let rectangle = new Shapes("300px", "200px", "yellow", "5px solid black");
let circle = new Shapes("200px", "200px", "orange", "5px solid black", "50%");
let square = new Shapes("200px", "200px", "red" , "5px solid black");
let parallelogram = new Shapes("250px" , "200px" , "lightBlue" , "5px solid black" , undefined ,"skew(20deg)" )
// Declaration Ended

// Targeting Element
let box = document.getElementById("box");
// Targeting Ended

// Creating Shapes (Rectangle)
let rectangleBox = document.createElement("div");
rectangleBox.style.width = rectangle.width;
rectangleBox.style.height = rectangle.height;
rectangleBox.style.backgroundColor = rectangle.color;
rectangleBox.style.border = rectangle.border;
box.appendChild(rectangleBox);

// Creating Shapes (Circle)
let circleBox = document.createElement("div");
circleBox.style.width = circle.width;
circleBox.style.height = circle.height;
circleBox.style.backgroundColor = circle.color;
circleBox.style.border = circle.border;
circleBox.style.borderRadius = circle.borderRadius;
box.appendChild(circleBox);

// Creating Shapes (Square)
let squareBox = document.createElement("div");
squareBox.style.width = square.width;
squareBox.style.height = square.height;
squareBox.style.backgroundColor = square.color;
squareBox.style.border = square.border;
box.appendChild(squareBox);

// Creating Shapes (Parallelogram)
let parallelBox = document.createElement("div");
parallelBox.style.width = parallelogram.width;
parallelBox.style.height = parallelogram.height;
parallelBox.style.backgroundColor = parallelogram.color;
parallelBox.style.border = parallelogram.border;
parallelBox.style.transform = parallelogram.transform;
box.appendChild(parallelBox);
*/

/*
// Assignment 3
// Create Restaurant Menu Using Constructor and display them on browser

// Creating Constructor For MENU
function Menu(name, price) {
  this.name = name;
  this.price = price;
}
// Constructor Ended

// Declaring Variables For Menu
let menu1 = new Menu("Burgers :", "250");
let menu2 = new Menu("BBQ :", "500");
let menu3 = new Menu("Premiums :", "750");
let menu4 = new Menu("Sandwiches :", "300");
let menu5 = new Menu("Rolls :", "150");
let menu6 = new Menu("Fast Food :", "500");
let menu7 = new Menu("Desi Food :", "400");
let menu8 = new Menu("IceCreams :", "200");
let menu9 = new Menu("Beverages :", "100");
let menu10 = new Menu("Sea Foods :", "1000");
let allMenu = [
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8,
  menu9,
  menu10,
];
// Declaration Ended

// Targeting And Creating Elements
let menu = document.getElementById("menu");
let heading = document.createElement("h1");
heading.style.textAlign = "center";
heading.appendChild(document.createTextNode("MENU"));
menu.appendChild(heading);
// Targeting Ended

// Printing Menu
let ul = document.createElement("ul");
let h4 = document.createElement("h4");
h4.style.textTransform = "capitalize";
for (let key in menu1) {
  h4.appendChild(document.createTextNode(" " + key));
  ul.appendChild(h4);
  menu.appendChild(ul);
}
for (let i = 0; i < allMenu.length; i++) {
  let li2 = document.createElement("li");
  for (let key in allMenu[i]) {
    li2.appendChild(document.createTextNode("  " + allMenu[i][key]));
    ul.appendChild(li2);
    menu.appendChild(ul);
  }
}
*/

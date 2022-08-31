/*
let obj = {
  Name: "Tesla X",
  Color: "Black",
  Model: 2021,
  Manufacturer: "Tesla",
  Specifications: "Auto Drive Feature",
  Wheels: "Alloy",
};
console.log(obj);
*/

/*
let obj2 = {
  names: ["Fahad", "Zahid", "Mustafa"],
  age: [18, 45, 10],
};
console.log(obj2);
*/

/*
let obj3 = {};
obj3.name = "Fahad";
obj3.age = 18;
obj3.studies = "Bachelor";
obj3.city = "Karachi";
console.log(obj3);
*/

/*
let obj4 = {
  Name: "Tesla X",
  Color: "Black",
  Model: 2021,
  Manufacturer: "Tesla",
  Specifications: "Auto Drive Feature",
  Wheels: "Alloy",
};
for (let key in obj4) {
  console.log(
    "The following value of" + " " + key + " " + "is" + " " + obj4[key]
  );
}
*/

/*
let obj5= {
  Name: "Tesla X",
  Color: "Black",
  Model: 2021,
  Manufacturer: "Tesla",
  Specifications: "Auto Drive Feature",
  Wheels: "Alloy",
};
console.table(obj5)
*/

/*
function Plan(name, price, timings, pages) {
  this.name = name;
  this.price = price;
  this.timings = timings;
  this.pages = pages;
}
let obj = new Plan("Basic" , "20$" , "6hours" , "20");
let xyz = new Plan("Pro" , "20$" , "6hours" , "20");

console.log("price" in obj)
*/

/*
let myQuestions = [
  {
    question: "What is Your Name?",
    answers: {
      a: "Fahad",
      b: "Zahid",
      c: "Mustafa",
    },
    correctAnswer: "c",
  },
  {
    question: "What is Your Age?",
    answers: {
      a: "15",
      b: "18",
      c: "17",
    },
    correctAnswer: "b",
  },
];
*/

/*
// ASSIGNMENT
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
  let thead = document.createElement("td");
  thead.appendChild(document.createTextNode(key));
  tr.appendChild(thead);
  table.appendChild(tr);
}
// Table Header Ended

// Printing Table Using For In & FOR LOOP
for (let i = 0; i < allData.length; i++) {
  let trow = document.createElement("tr");
  table.appendChild(trow);
  for (let key in allData[i]) {
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(allData[i][key]));
    trow.appendChild(td);
    table.appendChild(trow);
  }
}
// Printing Ended
*/
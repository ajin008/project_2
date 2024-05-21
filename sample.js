let cars = [
  { bmw: "x5", year: "2000" },
  { audi: "rs5", year: "2023" },
  { rangeRover: "sport", year: "2022" },
  { tata: "harrier", year: "2024" },
  { kia: "carnival", year: "2024" },
];

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let key in person) {
  console.log(key);
}

const name = Object.entries(person)[0];
console.log(name);

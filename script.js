const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teach", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
function render() {
  document.body.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  document.body.appendChild(heading);

  const averagePriceMessage = document.createElement("p");
  averagePriceMessage.id = "averagePriceMessage";
  document.body.appendChild(averagePriceMessage);

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  const headerRow = tableBody.insertRow();
  headerRow.insertCell(0).textContent = "Name";
  headerRow.insertCell(1).textContent = "Occupation";
  headerRow.insertCell(2).textContent = "Starting Price";

  const allFreelancers = [...freelancers];

  allFreelancers.forEach((freelancer) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = freelancer.name || freelancer.name;
    row.insertCell(1).textContent =
      freelancer.occupation || freelancer.occupation;
    row.insertCell(2).textContent = `$${
      freelancer.price || freelancer.startingPrice
    }`;
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getRandomStartingPrice() {
  const randomFreelancer = getRandomElement(freelancers);
  return randomFreelancer.price;
}
function addFreelancer(name, occupation, startingPrice) {
  const newFreelancer = { name, occupation, price: startingPrice };
  freelancers.push(newFreelancer);
  render();
}
function displayPrices() {
  const totalPrices = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;
  console.log("Total Prices:", totalPrices);
  console.log("Average Starting Price", averagePrice.toFixed(2));
}

setInterval(() => {
  addFreelancer(
    getRandomElement(freelancers).name,
    getRandomElement(freelancers).occupation,
    getRandomStartingPrice()
  );
  displayPrices();
  if (freelancers.length >= 30) {
    clearInterval(intervalId);
  }
}, 3000);

render();

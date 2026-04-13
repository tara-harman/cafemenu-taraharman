const menuItems = [
  { name: "Sakura Latte", price: "$5.50" },
  { name: "Matcha Cloud Tea", price: "$4.75" },
  { name: "Rose Honey Espresso", price: "$5.25" },
  { name: "Vanilla Bean Latte", price: "$5.00" },
  { name: "Lavender Milk Tea", price: "$4.85" },
  { name: "Mango Fruit Tea", price: "$4.50" },
  { name: "Peach Blossom Iced Tea", price: "$4.50" },
  { name: "Strawberry Cream Muffin", price: "$3.50" },
  { name: "Almond Croissant", price: "$3.95" },
  { name: "Berry Shortcake Slice", price: "$4.75" }
];

const menuList = document.getElementById("menu-list");
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

// Populate menu
menuItems.forEach((item) => {
  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = item.name;

  const priceSpan = document.createElement("span");
  priceSpan.textContent = item.price;
  priceSpan.style.opacity = "0.7";

  li.appendChild(nameSpan);
  li.appendChild(priceSpan);

  menuList.appendChild(li);
});

// Daily special button
button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem.name} (${randomItem.price})`;
});

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.classList.remove("show");
      }
    });

    answer.classList.toggle("show");
  });
});

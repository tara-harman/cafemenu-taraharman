document.addEventListener("DOMContentLoaded", () => {

  const menuItems = [
    { name: "Sakura Latte", price: "$5.50" },
    { name: "Matcha Cloud Tea", price: "$4.75" },
    { name: "Rose Honey Espresso", price: "$5.25" },
    { name: "Strawberry Cream Muffin", price: "$3.50" },
    { name: "Iced Cherry Blossom Milk", price: "$4.95" }
  ];

  const menuList = document.getElementById("menu-list");

  menuItems.forEach((item) => {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = item.name;

    const priceSpan = document.createElement("span");
    priceSpan.textContent = item.price;

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    menuList.appendChild(li);
  });

  
  const button = document.getElementById("show-special");
  const display = document.getElementById("daily-special");

  button.addEventListener("click", () => {
    const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
    display.textContent = `Today's Special: ${randomItem.name} (${randomItem.price})`;
  });

 
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Toggle visibility
      answer.classList.toggle("show");
    });
  });

});

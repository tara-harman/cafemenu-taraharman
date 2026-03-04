const menuItems = [
  "Sakura Latte",
  "Matcha Cloud Tea",
  "Rose Honey Espresso",
  "Strawberry Cream Muffin",
  "Iced Cherry Blossom Milk"
];

const menuList = document.getElementById("menu-list");

menuItems.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
});

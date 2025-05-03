const isTesting = window.location.pathname.includes("test.html");

class Cart {
  constructor() {
    this.key = "cart";
    this.items = JSON.parse(localStorage.getItem(this.key)) || [];
  }

  addItem(name, image) {
    this.items.push({ name, image });
    this.save();
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
    this.save();
  }

  clear() {
    this.items = [];
    localStorage.removeItem(this.key);
  }

  getItems() {
    return this.items;
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }
}

function handleAddToCart(name, image) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (!isLoggedIn) {
    alert("Please sign in to use the cart.");
    window.location.href = "signin.html";
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart.`);
}

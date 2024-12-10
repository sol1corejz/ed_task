import { ref } from "vue";

// Инициализация cartItems
const cartItems = ref([]);

// Функция для получения данных из localStorage
const setCartItems = () => {
  const savedItems = localStorage.getItem("cartItems");
  if (savedItems.length) {
    cartItems.value = JSON.parse(savedItems);
  } else {
    cartItems.value = [];
  }
};

// Функция для добавления товара в корзину
const addToCart = (item) => {
  // Проверяем, есть ли уже такой товар в корзине
  const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // Если товар уже есть, увеличиваем его количество
    existingItem.count++;
  } else {
    // Если товара нет, добавляем новый с количеством 1
    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      img: item.img,
      count: 1,
    };
    cartItems.value.push(cartItem);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
};

// Функция для удаления товара из корзины
const removeFromCart = (item, total = false) => {
  const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // Если количество больше 1, уменьшаем его
    if (existingItem.count > 1 && !total) {
      existingItem.count--;
    } else {
      // Если количество товара 1, удаляем его полностью из корзины
      cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
    }
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
};

export const useCartItems = () => {
  return {
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems
  };
};

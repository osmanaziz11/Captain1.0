export function addToCart(item) {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
}
export function removeFromCart(item) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
}
export function resetCart() {
  return {
    type: 'REMOVE_ALL_FROM_CART',
  };
}
export function openCart() {
  return {
    type: 'OPEN_CART',
  };
}
export function closeCart() {
  return {
    type: 'CLOSE_CART',
  };
}

import { ipcRenderer } from 'electron';

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

export const getCategories = () => {
  return async (dispatch) => {
    ipcRenderer.once('get_categories', (event, data) => {
      dispatch({ type: 'ALL_CATEGORIES', payload: data });
    });
    ipcRenderer.send('getAll', 'categories');
  };
};
export const getItems = () => {
  return async (dispatch) => {
    ipcRenderer.once('get_items', (event, data) => {
      dispatch({ type: 'ALL_ITEMS', payload: data });
    });
    ipcRenderer.send('getAll', 'items');
  };
};
export const getMembers = () => {
  return async (dispatch) => {
    ipcRenderer.once('get_members', (event, data) => {
      dispatch({ type: 'ALL_MEMBERS', payload: data });
    });
    ipcRenderer.send('getAll', 'members');
  };
};

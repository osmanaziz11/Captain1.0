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

export function updateBalance(payload) {
  return {
    type: 'UPDATE_BALANCE',
    payload,
  };
}

export function appPreferences(payload) {
  return {
    type: 'APP_PREFERENCES',
    payload,
  };
}

export function gameProfile(payload) {
  return {
    type: 'GAME_PROFILE',
    payload,
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
    ipcRenderer.once('membersRetreival', (event, data) => {
      dispatch({ type: 'ALL_MEMBERS', payload: data });
    });
    ipcRenderer.send('getMembers');
  };
};

export const getHistory = (data) => {
  return async (dispatch) => {
    ipcRenderer.once('get_memberHistory', (event, data) => {
      dispatch({ type: 'MEMBER_HISTORY', payload: data });
    });
    ipcRenderer.send('getHistory', data);
  };
};

export const getExpense = () => {
  return async (dispatch) => {
    ipcRenderer.once('get_expenses', (event, data) => {
      dispatch({ type: 'ALL_EXPENSE', payload: data });
    });
    ipcRenderer.send('getAll', 'expenses');
  };
};

export const getGames = () => {
  return async (dispatch) => {
    ipcRenderer.once('get_gameExpenses', (event, data) => {
      dispatch({ type: 'GAME_EXPENSES', payload: data });
    });
    ipcRenderer.send('getAll', 'gameExpenses');
  };
};

export const getSaleHistory = () => {
  return async (dispatch) => {
    ipcRenderer.once('shEvent', (event, data) => {
      dispatch({ type: 'SALE_HISTORY', payload: data });
    });
    ipcRenderer.send('saleHistory');
  };
};

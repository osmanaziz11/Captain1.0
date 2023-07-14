import { combineReducers } from 'redux';

// ==== Reducers =====
const cartManuplation = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      state = state.filter((obj) => obj.name !== action.payload.id);
      return state;
    case 'REMOVE_ALL_FROM_CART':
      state = [];
      return state;
    default:
      return state;
  }
};

const cart = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_CART':
      return true;
    case 'CLOSE_CART':
      return false;
    default:
      return state;
  }
};
const categories = (state = [], action) => {
  switch (action.type) {
    case 'ALL_CATEGORIES':
      return [...action.payload];
    default:
      return state;
  }
};
const updateBalance = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_BALANCE':
      return action.payload;
    default:
      return state;
  }
};
const appPreferences = (state = {}, action) => {
  switch (action.type) {
    case 'APP_PREFERENCES':
      return action.payload;
    default:
      return state;
  }
};

const gameProfile = (state = {}, action) => {
  switch (action.type) {
    case 'GAME_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
const items = (state = [], action) => {
  switch (action.type) {
    case 'ALL_ITEMS':
      return [...action.payload];
    default:
      return state;
  }
};

const members = (state = [], action) => {
  switch (action.type) {
    case 'ALL_MEMBERS':
      return [...action.payload];
    default:
      return state;
  }
};

const expense = (state = [], action) => {
  switch (action.type) {
    case 'ALL_EXPENSE':
      return [...action.payload];
    default:
      return state;
  }
};
const memberHistory = (state = [], action) => {
  switch (action.type) {
    case 'MEMBER_HISTORY':
      return [...action.payload];
    default:
      return state;
  }
};

// ==== Root Reducers =====
const rootReducer = combineReducers({
  getPreferences: appPreferences,
  getCartItems: cartManuplation,
  getGameProfile: gameProfile,
  getHistory: memberHistory,
  getCategories: categories,
  getBalance: updateBalance,
  getExpense: expense,
  getMembers: members,
  cartModel: cart,
  getItems: items,
});

export default rootReducer;

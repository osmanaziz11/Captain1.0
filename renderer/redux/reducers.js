import { combineReducers } from 'redux';

// ==== Reducers =====
const cartManuplation = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      state = state.filter((obj) => obj.id !== action.payload.id);
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
// ==== Root Reducers =====
const rootReducer = combineReducers({
  cart: cartManuplation,
  cartModel: cart,
});

export default rootReducer;

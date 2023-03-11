import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          list: state.list.map((dish) => {
            return dish.id === action.payload.id
              ? {
                  ...dish,
                  quantity: dish.quantity + action.payload.quantity,
                }
              : dish;
          }),
        };
      }
      return { ...state, list: [...state.list, action.payload] };
    },
    increaseItemQuantity: (state, action) => {
      return {
        ...state,
        list: state.list.map((dish) => {
          if (dish.id === action.payload) {
            return { ...dish, quantity: dish.quantity + 1 };
          }
          return dish;
        }),
      };
    },
    decreaseItemQuantity: (state, action) => {
      return {
        ...state,
        list: state.list
          .map((dish) => {
            if (dish.id === action.payload) {
              return { ...dish, quantity: dish.quantity - 1 };
            }
            return dish;
          })
          .filter((dish) => {
            return dish.quantity > 0;
          }),
      };
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        list: state.list
          .map((dish) => {
            if (dish.id === action.payload) {
              return { ...dish, quantity: 0 };
            }
            return dish;
          })
          .filter((dish) => {
            return dish.quantity > 0;
          }),
      };
    },
  },
});

export const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;

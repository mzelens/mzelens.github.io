import { createSlice } from '@reduxjs/toolkit';
import dishes from '../../features/admin/mocks/dishes';

const initialState = {
  list: dishes,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    update: (state, action) => {
      state.list = state.list.map((dish) =>
        dish.id === action.payload.id ? action.payload : dish
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter((dish) => dish.id !== action.payload);
    },
  },
  extraReducers: () => {},
});

export const { add, update, remove } = dishesSlice.actions;

export default dishesSlice.reducer;

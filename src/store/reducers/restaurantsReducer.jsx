import { createSlice } from '@reduxjs/toolkit';
import restaurants from '../../features/admin/mocks/restaurants';

const initialState = {
  list: restaurants,
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    update: (state, action) => {
      state.list = state.list.map((restaurant) =>
        restaurant.id === action.payload.id ? action.payload : restaurant
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter(
        (restaurant) => restaurant.id !== action.payload
      );
    },
  },
  extraReducers: () => {},
});

export const { add, update, remove } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

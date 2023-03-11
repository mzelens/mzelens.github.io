import { createSlice } from '@reduxjs/toolkit';
import orders from '../../features/admin/mocks/orders';

const initialState = {
  list: orders,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    update: (state, action) => {
      state.list = state.list.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter((order) => order.id !== action.payload);
    },
  },
  extraReducers: () => {},
});

export const { add, update, remove } = ordersSlice.actions;

export default ordersSlice.reducer;

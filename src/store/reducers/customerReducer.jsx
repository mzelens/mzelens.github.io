import { createSlice } from '@reduxjs/toolkit';
import customer from '../../features/client/mocks/customer';

const initialState = customer;

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
    },
    addAddress: (state, action) => {
      state.addressBook = [action.payload, ...state.addressBook];
    },
    updateAddress: (state, action) => {
      state.addressBook = state.addressBook.map((address) =>
        address.id === action.payload.id
          ? { ...address, ...action.payload }
          : address
      );
    },
    setPrimaryAddress: (state, action) => {
      state.addressBook = state.addressBook
        .map((address) =>
          address.primary ? { ...address, primary: false } : address
        )
        .map((address) =>
          address.id === action.payload
            ? { ...address, primary: true }
            : address
        );
    },
    removeAddress: (state, action) => {
      state.addressBook = state.addressBook.filter(
        (address) => address.id !== action.payload
      );
    },
    setPreferPayment: (state, action) => {
      state.payment.prefer = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  update,
  addAddress,
  updateAddress,
  setPrimaryAddress,
  removeAddress,
  setPreferPayment,
} = customerSlice.actions;

export default customerSlice.reducer;

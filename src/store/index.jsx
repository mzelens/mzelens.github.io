import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import ordersReducer from './reducers/ordersReducer';
import dishesReducer from './reducers/dishesReducer';
import restaurantsReducer from './reducers/restaurantsReducer';
import cartReducer from './reducers/cartReducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  restaurants: restaurantsReducer,
  orders: ordersReducer,
  cart: cartReducer,
  customer: customerReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

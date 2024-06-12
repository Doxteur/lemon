import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from "./reducers/Auth";
import ProductsReducer from "./reducers/Products";

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import { persistReducer, persistStore } from "redux-persist";
import CartReducer from './reducers/Cart';

const persistConfig = {
	key: "Lemon",
	storage,
	whitelist: ["auth","products","cart"]
};

const rootReducer = persistCombineReducers(persistConfig, {
	auth: AuthReducer,
	products: ProductsReducer,
	cart: CartReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

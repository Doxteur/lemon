import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../utils/config.js";

// Async thunk for fetching products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch(`${REACT_APP_API_URL}/products`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();
//       if (!response.ok) {
//         return thunkAPI.rejectWithValue(responseData);
//       }
//       // console.log("JD", responseData['hydra:member']);
//       return responseData['hydra:member'];
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Async thunk for adding a new product
// export const addProduct = createAsyncThunk(
//   "products/addProduct",
//   async (productData, thunkAPI) => {
//     try {
//       const response = await fetch(`${REACT_APP_API_URL}/products`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productData),
//       });

//       const responseData = await response.json();
//       if (!response.ok) {
//         return thunkAPI.rejectWithValue(responseData);
//       }

//       return responseData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Async thunk for updating a product
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, productData }, thunkAPI) => {
//     try {
//       const response = await fetch(`${REACT_APP_API_URL}/products/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productData),
//       });

//       const responseData = await response.json();
//       if (!response.ok) {
//         return thunkAPI.rejectWithValue(responseData);
//       }

//       return responseData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Async thunk for deleting a product
// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (id, thunkAPI) => {
//     try {
//       const response = await fetch(`${REACT_APP_API_URL}/products/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();
//       if (!response.ok) {
//         return thunkAPI.rejectWithValue(responseData);
//       }

//       return { id };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Fetch one product
// export const fetchProduct = createAsyncThunk(
//   "products/fetchProduct",
//   async (slug,filter, thunkAPI) => {
//     try {
//       const response = await fetch(`${REACT_APP_API_URL}/product/${slug}&${filter}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();
//       if (!response.ok) {
//         return thunkAPI.rejectWithValue(responseData);
//       }

//       return responseData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// Product slice
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartTotal: 0,
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      let existingProduct = state.cart.find((item) => item.ean === product.ean);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        state.cart.push({ ...product, qty: 1 });
      }
      state.cartCount += 1;
      state.cartTotal += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      let existingProduct = state.cart.find((item) => item.ean === product.ean);
      if (existingProduct.qty === 1) {
        state.cart = state.cart.filter((item) => item.ean !== product.ean);
      } else {
        existingProduct.qty -= 1;
      }
      state.cartCount -= 1;
      if (state.cartTotal > 0) {
        state.cartTotal -= product.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
      state.cartTotal = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;

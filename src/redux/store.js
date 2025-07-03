// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import roleReducer from './slices/roleSlice'
// import membersReducer from './slices/memberSlice'

// export const store = configureStore({
//   reducer: {
//     role: roleReducer,
//     members: membersReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './slices/roleSlice';
import membersReducer from './slices/memberSlice';
import { loadState, saveState } from './localStorage'; // Import helpers

// Load previously saved state from localStorage
const preloadedState = loadState();

// Configure store with preloaded state
export const store = configureStore({
  reducer: {
    role: roleReducer,
    members: membersReducer,
  },
  preloadedState, //Hydrate store from localStorage if available
});

// Save state to localStorage on every change
store.subscribe(() => {
  saveState(store.getState());
});

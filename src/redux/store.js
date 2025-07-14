import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
import analyticsReducer from './slices/analyticsSlice';
import { uiReducer } from './slices/uiSlice'; // ✅ FIXED: named import
 

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    analytics: analyticsReducer,
    ui: uiReducer, // ✅ now correctly linked
 
  }
});

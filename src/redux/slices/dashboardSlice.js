// src/redux/slices/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dateRange: {
      start: '',
      end: ''
    },
    selectedAccount: '',
    activeTab: 'campaigns',
    filters: {},
    mockDataEnabled: true
  },
  reducers: {
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
    setSelectedAccount(state, action) {
      state.selectedAccount = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    toggleMockData(state) {
      state.mockDataEnabled = !state.mockDataEnabled;
    }
  }
});

export const {
  setDateRange,
  setSelectedAccount,
  setActiveTab,
  setFilters,
  toggleMockData
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

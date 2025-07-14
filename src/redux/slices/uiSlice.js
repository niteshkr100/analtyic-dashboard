import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarCollapsed: false,
    selectedRows: [],
    sortConfig: {}
  },
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setSelectedRows(state, action) {
      state.selectedRows = action.payload;
    },
    setSortConfig(state, action) {
      state.sortConfig = action.payload;
    }
  }
});

// ✅ Export actions
export const { toggleSidebar, setSelectedRows, setSortConfig } = uiSlice.actions;

// ✅ Export reducer (named)
export const uiReducer = uiSlice.reducer;

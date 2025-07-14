import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: [],
  chartData: [],
  tableData: [],
  geoData: {},
  topLists: {},
  biggestChanges: [],
  loading: false,
  error: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSummary, setChartData, setTableData, setLoading, setError } = analyticsSlice.actions;

export default analyticsSlice.reducer;

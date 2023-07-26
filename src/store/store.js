import { configureStore } from '@reduxjs/toolkit'
import { dashboardApi } from './apis/dashboardApi'


const store = configureStore({
  reducer: {
    dashboard: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

export default store

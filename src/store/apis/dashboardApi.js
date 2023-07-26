// dashboardApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auth } from 'aws-amplify';

const getHeaders = async () => {
  const session = await Auth.currentSession();
  const token = session.getIdToken().getJwtToken();

  const headers = new Headers();
  headers.append('token', `${token}`);
  
  return headers;
};

export const dashboardApi = createApi({
  reducerPath: 'dashboard',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://b0j5sktbua.execute-api.ap-south-1.amazonaws.com/dev',
    prepareHeaders: async () => {
      return getHeaders();
    },
  }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => ({
        url: '/dashboard',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;

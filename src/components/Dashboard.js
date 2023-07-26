// Dashboard.js
import React from 'react';
import { useGetDashboardDataQuery } from '../store/apis/dashboardApi';

function Dashboard() {
  const { data, error, isLoading } = useGetDashboardDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching dashboard data</div>;
  }

  return (
    <div>
      <h2>Welcome to the Dashboard, {data}!</h2>
      {/* Display the dashboard data here */}
    </div>
  );
}

export default Dashboard;

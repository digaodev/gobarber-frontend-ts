import React from 'react';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      <button type="button" onClick={signOut}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;

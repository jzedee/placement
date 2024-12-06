"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/protected');
        setUser(response.data.user); // User data if authenticated
      } catch (error) {
        console.error('Not authenticated', error);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  if (user) {
    return <div>Welcome, {user.name}!</div>;
  } else {
    return <div>Please log in to access this page.</div>;
  }
};

export default ProtectedPage;

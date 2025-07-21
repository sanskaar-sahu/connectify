import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import CallPage from './pages/CallPage';
import ChatPage from './pages/ChatPage';
import Onboarding from './pages/Onboarding';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      return await res.json();
    },
  });

  console.log(data);

  return (
    <div className="h-screen" data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;

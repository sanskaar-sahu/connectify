import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import CallPage from './pages/CallPage';
import ChatPage from './pages/ChatPage';
import Onboarding from './pages/Onboarding';
import useAuthUser from './hooks/useAuthUser';
import PageLoader from '../components/PageLoader';

const App = () => {
   const {isLoading , authUser} = useAuthUser();
   const isAuthenticated = Boolean(authUser)

   const isOnboarderd = isAuthenticated?.isOnboarderd;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-white" data-theme="night">
        <PageLoader/>
      </div>
    );
  }

  if (isError) {
    console.error("Auth Error:", error);
  }

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={isAuthenticated && isOnboarderd  ? (<HomePage />) : <Navigate 
        to={isAuthenticated ? '/login' : "/onboarding"}
         />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/notification" element={isAuthenticated ? <NotificationPage /> : <Navigate to="/login" />} />
        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/onboarding" element={isAuthenticated ? <Onboarding /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster position="top-right" />
    </div>
  );
};

export default App;

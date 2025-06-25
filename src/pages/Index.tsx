
import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import Header from '../components/Header';
import VideoGrid from '../components/VideoGrid';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    // Check if user is logged in and if session is still valid
    const checkAuth = () => {
      const loginData = localStorage.getItem('algotAcademyLogin');
      if (loginData) {
        const { user, timestamp, expiryDate, expiryTime } = JSON.parse(loginData);
        const now = new Date();
        const expiry = new Date(`${expiryDate} ${expiryTime}`);
        
        if (now < expiry) {
          setIsAuthenticated(true);
          setCurrentUser(user);
        } else {
          // Session expired
          localStorage.removeItem('algotAcademyLogin');
          setIsAuthenticated(false);
        }
      }
    };

    checkAuth();
    
    // Check expiry every minute
    const interval = setInterval(checkAuth, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (username: string) => {
    const loginData = {
      user: username,
      timestamp: new Date().toISOString(),
      expiryDate: '2025-06-30',
      expiryTime: '08:00:00'
    };
    
    localStorage.setItem('algotAcademyLogin', JSON.stringify(loginData));
    setIsAuthenticated(true);
    setCurrentUser(username);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} currentUser={currentUser} />
      <main className="pb-20">
        <VideoGrid activeTab={activeTab} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

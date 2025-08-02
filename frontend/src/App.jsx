import React from 'react'
import { Route, Routes } from 'react-router';
import HomePage from "./pages/HomePage.jsx"
import SignUpPage from './pages/SignUpPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import CallPage from './pages/CallPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/notifications" element={<NotificationsPage/>}></Route>
        <Route path="/call" element={<CallPage/>}></Route>
        <Route path="/chat" element={<ChatPage/>}></Route>
        <Route path="/onboarding" element={<OnboardingPage/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App;

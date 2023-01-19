import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LodingPage from './pages/LodingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SharePage from './pages/SharePage';
import ColorSelectPage from './pages/ColorSelectPage';
import ItemModal from './components/Modal/ItemModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LodingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/lookgood" element={<MainPage />} />
        <Route path="/lookgood/color" element={<ColorSelectPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/test" element={<ItemModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingPage, LoginPage, SignupPage, MainPage, SearchPage, SharePage, ColorSelectPage, MyPage } from './pages';
import ItemModal from './components/Modal/ItemModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/lookgood" element={<MainPage />} />
        <Route path="/lookgood/color" element={<ColorSelectPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/test" element={<ItemModal />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

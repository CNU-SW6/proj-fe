import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  LoadingPage,
  LoginPage,
  SignupPage,
  MainPage,
  SearchPage,
  SharePage,
  ColorSelectPage,
  MyPage,
  DetailPage,
} from './pages';
import ItemModal from './components/Modal/ItemModal';
import CameraTest from './pages/CameraTest';

function App() {
  const items = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/lookgood" element={<MainPage items={items} />} />
        <Route path="/lookgood/color" element={<ColorSelectPage items={items} />} />
        <Route path="/search" element={<SearchPage items={items} />} />
        <Route path="/detail/:postNo" element={<DetailPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/test" element={<ItemModal />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cameraTest" element={<CameraTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

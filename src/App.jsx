import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinginPage from './components/SinginPage';
import PhoneLogin from './components/PhoneLogin';
import OTPVerification from './components/OTPVerification';
import Loading from './components/Loading';
import ServerError from './components/ServerError';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SinginPage />} />

        <Route path="/phone" element={<PhoneLogin />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/error" element={<ServerError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';         
import Registro from './components/Registro';     

export default function App() {
  const user = localStorage.getItem('user');

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
    </Routes>
  );
}

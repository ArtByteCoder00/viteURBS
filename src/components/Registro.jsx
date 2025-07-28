import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../App.module.css'; // Assuming you have a CSS module for styles

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();

    const cadastro = { email, password };
    localStorage.setItem('cadastro', JSON.stringify(cadastro));

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className={style.wrapLogin}>
      <div className={style.cardlogin}>
        <div className={style.wrapForm}>
          <form onSubmit={handleRegistro}>
            <h2 style={{color: '#003C6E'}}>Cadastro</h2><br />
            <label className={style.label}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
            
            <label className={style.label}>Senha</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

            <button type="submit" className={style.botao}>Cadastrar</button>
            <p className={style.userCad}>Já tem conta? <a href="/login">Faça login</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

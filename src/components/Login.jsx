import style from '../App.module.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Eye from '../assets/icons8-visível.png'

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      navigate('/dashboard')
    }
  }, [navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    const savedUser = JSON.parse(localStorage.getItem('cadastro'))

    if (savedUser?.email === email && savedUser?.password === password) {
      localStorage.setItem('user', JSON.stringify(savedUser))
      navigate('/dashboard')
    } else {
      setMessage('Email ou senha incorretos')
    }
  }

  return (
    <div className={style.wrapLogin}>
      <div className={style.cardlogin}>
        <div className={style.wrapForm}>
          <form onSubmit={handleLogin}>
            <h2 style={{color: '#003C6E'}}>Login</h2><br />
            <label className={style.label}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
            
            <label className={style.label}>Senha</label>
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                className={style.olho}
                onClick={() => setShowPassword(prev => !prev)}
                src={Eye}
                alt="Mostrar senha"
              />
            </div>
            <br />
            <button type='submit' className={style.botao}>Entrar</button>
            <p className={style.userCad}>Não tem conta? <a href="/registro">Cadastre-se</a></p>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

import { useNavigate, Link } from 'react-router-dom';
import styles from './Dashboard.module.css'; // crie um CSS para estilizar o menu

export default function Dashboard() {
  const navigate = useNavigate();

  const sair = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className={styles.dashboardContainer}>
      <nav className={styles.menuLateral}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/dashboard">Painel</Link></li>
          <li><Link to="/onibus">Linhas de Ônibus</Link></li>
          <li><Link to="/recarga">Recarga</Link></li>
          <li><Link to="/historico">Histórico</Link></li>
        </ul>
        <button className={styles.sairButton} onClick={sair}>Sair</button>
      </nav>
      <main className={styles.conteudo}>
        <h1>Bem-vindo ao Painel</h1>
        <p>Selecione uma opção no menu para começar.</p>
      </main>
    </div>
  );
}

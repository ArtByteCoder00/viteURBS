import { useNavigate } from "react-router";
import MenuImg from '../assets/menuIcon.png';
import styles from './menu.module.css';
import { useState } from "react";
import Hist from '../assets/historical.png';
import Oni from '../assets/onibus.png';
import Rec from '../assets/recarregar.png';

export const Menu = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <nav className={open ? styles.navBar : styles.navBarClosed}>
            <div className={styles.wrapimg}>
                <div className={styles.img}>
                    <img
                        className={styles.image}
                        src={MenuImg}
                        alt="Menu Icon"
                        onClick={() => setOpen(prev => !prev)}
                    />
                </div>
            </div>
            <p onClick={() => navigate('/dashboard')}>Dashboard</p>
            <p onClick={() => navigate('/historico')}>Historico de Pagamento</p>
            <p onClick={() => navigate('/recarga')}>Recarga do Cartão Transporte</p>
            <p onClick={() => navigate('/onibus')}>Linhas de Onibus</p>

            <p
                onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/');
                }}
            >
                Sair
            </p>
        </nav>
    );
};

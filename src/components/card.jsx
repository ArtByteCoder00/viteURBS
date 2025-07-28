import { useState } from 'react';
import style from './card.module.css';
import { Modal } from './Modal.jsx'; // novo componente

export const Card = ({ linha }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  return (
    <>
      <section className={style.tela}>
        <div className={style.carta}>
          <div className={style.ttTexto}>
            <h3>{linha.nome}</h3><br />
            <p><strong>Cor da Linha:</strong><br />{linha.cor_da_linha}</p>
            <button onClick={toggleModal}>mais informações</button>
          </div>
        </div>
      </section>

      {mostrarModal && <Modal linha={linha} onClose={toggleModal} />}
    </>
  );
};

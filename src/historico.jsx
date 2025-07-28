// src/HistoricoRecargas.jsx
import React, { useState, useEffect } from 'react';
import historicoStyles from './Historico.module.css';
import { Menu } from './components/menu';

const STORAGE_KEY = '@app:recargas';

const formatarValor = valor =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

export const HistoricoRecargas = () => {
  const [recargas, setRecargas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setRecargas(JSON.parse(data));
  }, []);

  return (
    <main className={historicoStyles.wrap}>
      <section
        className={historicoStyles.container}
        aria-label="Histórico de Recargas"
      >
        <div className={historicoStyles.menu}>
          <Menu />
        </div>

        <h2 className={historicoStyles.title}>Histórico de Recargas</h2>

        <ul className={historicoStyles.lista}>
          {recargas.length > 0 ? (
            recargas.map(rec => (
              <li key={rec.id} className={historicoStyles.item}>
                <div className={historicoStyles.info}>
                  <strong>{rec.nomeCartao}</strong>
                  <span>{rec.metodo} — {rec.data}</span>
                </div>
                <div className={historicoStyles.valor}>
                  {formatarValor(rec.valor)}
                </div>
              </li>
            ))
          ) : (
            <li className={historicoStyles.item}>
              <div className={historicoStyles.info}>
                <span>Nenhuma recarga registrada.</span>
              </div>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
};

export default HistoricoRecargas;

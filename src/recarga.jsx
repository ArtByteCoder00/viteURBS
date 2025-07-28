// src/Recarga.jsx
import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import styles from './recarga.module.css';
import { Menu } from './components/menu';

const STORAGE_KEY = '@app:recargas';

const formatarValor = valor =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

export const Recarga = () => {
  const [nomeCartao, setNomeCartao] = useState('');
  const [valorRecarga, setValorRecarga] = useState('');
  const [metodo, setMetodo] = useState('PIX');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(false);

  const handlePagar = async e => {
    e.preventDefault();
    setMensagem('');
    setErro(false);

    if (!nomeCartao || Number(valorRecarga) <= 0) {
      setMensagem('Por favor, preencha nome do cartão e valor maior que zero.');
      setErro(true);
      return;
    }

    // Monta o DOCX
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'Comprovante de Recarga', bold: true, size: 32 }),
              ],
            }),
            new Paragraph({ text: `Cartão: ${nomeCartao}` }),
            new Paragraph({ text: `Método: ${metodo}` }),
            new Paragraph({ text: `Valor: ${formatarValor(Number(valorRecarga))}` }),
            new Paragraph({ text: `Data: ${new Date().toLocaleString()}` }),
          ],
        },
      ],
    });

    try {
      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'comprovante_recarga.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      // Novo registro de recarga
      const novoRegistro = {
        id: Date.now(),
        nomeCartao,
        metodo,
        valor: Number(valorRecarga),
        data: new Date().toLocaleDateString('pt-BR'),
      };

      const historicoAtual = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const historicoAtualizado = [novoRegistro, ...historicoAtual];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(historicoAtualizado));

      setMensagem(`Recarga de ${formatarValor(novoRegistro.valor)} via ${metodo} registrada!`);
      setNomeCartao('');
      setValorRecarga('');
    } catch (err) {
      console.error('Erro ao gerar comprovante:', err);
      setMensagem('Ocorreu um erro ao gerar o comprovante.');
      setErro(true);
    }
  };

  const isDisabled = !nomeCartao || Number(valorRecarga) <= 0;

  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Menu />
        </div>

        <h1 className={styles.title}>Recarga de Crédito</h1>

        <div className={styles.opcoes}>
          <form>
            {['PIX', 'Debito', 'Credito'].map(option => (
              <div key={option} className={styles.radioItem}>
                <input
                  type="radio"
                  id={option}
                  name="metodo"
                  value={option}
                  checked={metodo === option}
                  onChange={e => setMetodo(e.target.value)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </form>
        </div>

        <input
          type="text"
          placeholder="Nome do Cartão"
          value={nomeCartao}
          onChange={e => setNomeCartao(e.target.value)}
          className={styles.input}
          aria-label="Nome do cartão"
        />

        <input
          type="number"
          placeholder="Inserir Valor da Recarga (R$)"
          value={valorRecarga}
          onChange={e => setValorRecarga(e.target.value)}
          className={styles.input}
          aria-label="Valor da recarga"
          min="0"
          step="0.01"
        />

        <button
          onClick={handlePagar}
          className={styles.payButton}
          disabled={isDisabled}
        >
          Pagar
        </button>

        {mensagem && (
          <p
            className={erro ? styles.errorMessage : styles.successMessage}
            aria-live="polite"
          >
            {mensagem}
          </p>
        )}
      </div>
    </section>
  );
};

export default Recarga;

import style from './modal.module.css';
import close from '../assets/close.png'
import icon from '../assets/onibus.png'

export const Modal = ({ linha, onClose }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modalContent}>

      


        <button className={style.fechar} onClick={onClose}><img src={close} alt="Fechar modal" style={{width: "30px", marginLeft:"60px"}}/></button><br /><br />
        <img src={icon} alt="icone de onibus" width={150}/>
        <h2>{linha.nome}</h2>
        <p><strong>Tipo de Pagamento:</strong><br />{linha.pagamento}</p>
        <p><strong>Abrangência:</strong><br />{linha.abrangencia}</p>
        <p><strong>Categoria:</strong><br />{linha.categoria}</p>
        <p><strong>Tipo de Linha:</strong><br />{linha.tipo_de_linha}</p>
        <p><strong>Data de Implantação:</strong><br />{linha.data_de_implantacao}</p>
      </div>
    </div>
  );
};

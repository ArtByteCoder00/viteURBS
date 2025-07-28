import style from './onibus.module.css';
import { Menu } from "./components/menu";
import { linhasOnibus } from './api/onibus';
import { Card } from './components/card.jsx'; // Certifique-se de que o caminho está correto

function Onibus() {
  return (
    <main className={style.s1}>
      <section>
        <div className={style.menu}>
          <Menu />
        </div>

        <div>
         <br /><br /><br /><br /><br /><h1 className={style.texto}>Linhas de Ônibus</h1><br />
          <div className={style.card}>
          {linhasOnibus.map(linha => (
            <Card key={linha.id} linha={linha} />
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Onibus;

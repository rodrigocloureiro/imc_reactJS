import { useState } from 'react'
import Input from './components/Input'
import Cards from './components/Cards'
import styles from './App.module.css'

function App() {
  const [ height, setHeight ] = useState(0);
  const [ weight, setWeight ] = useState(0);
  const [ imc, setImc ] = useState(null);

  const handleHeight = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleWeight = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleIMC = () => {
    setImc(weight / (height*height));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.imc_area}>
          <div className={styles.imc_calculation}>
            <h1>Calcule seu IMC</h1>
            <p className={styles.description}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de casa pessoa.</p>
            <Input
              type={'number'}
              placeholder={'Digite a sua altura. ex: 1.5 (em metros)'}
              event={handleHeight}
            />
            <Input
              type={'number'}
              placeholder={'Digite o seu peso. ex: 75.3 (em kg)'}
              event={handleWeight}
            />
            <button className={styles.btn_calculate} onClick={handleIMC}>Calcular</button>
          </div>
          <Cards imc={imc} />
        </div>
      </div>
    </main>
  );
}

export default App

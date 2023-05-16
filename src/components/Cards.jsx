import Card from './Card'
import styles from './Cards.module.css'
import icon from '../../public/like.png'

export default function Cards({imc}) {
  return (
    <div className={styles.cards}>
      <Card
        icon={icon}
        bgColor={imc !== null && imc < 18.6 ? '#a0adb5' : '#5c5c5c'}
        title={'Magreza'}
        text={'O IMC está menor 18.5'}
        invert={'rotate(180deg)'}
        imc={imc !== null && imc < 18.6 ? imc : null}
      />
      <Card
        icon={icon}
        bgColor={imc >= 18.6 && imc < 25 ? '#0db675' : '#5c5c5c'}
        title={'Normal'}
        text={'O IMC está entre 18.5 e 24.9'}
        imc={imc >= 18.6 && imc < 25 ? imc: null}
      />
      <Card
        icon={icon}
        bgColor={imc >= 25 && imc < 30 ? '#e6b741' : '#5c5c5c'}
        title={'Sobrepeso'}
        text={'O IMC está entre 25 e 29.9'}
        invert={'rotate(180deg)'}
        imc={imc >= 25 && imc < 30 ? imc : null}
      />
      <Card
        icon={icon}
        bgColor={imc > 30 ? '#ca4a49' : '#5c5c5c'}
        title={'Obesidade'}
        text={'O IMC está maior 30'}
        invert={'rotate(180deg)'}
        imc={imc > 30 ? imc : null}
      />
    </div>
  );
}
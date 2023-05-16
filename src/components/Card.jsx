import styles from './Card.module.css'

export default function Card({icon, bgColor, title, text, invert, imc}) {
  return (
    <div className={styles.card} style={{backgroundColor: bgColor}}>
      <img src={icon} alt={`IMC ${title}`} className={styles.icon} style={{transform: invert}} draggable={false} />
      <h3>{title}</h3>
      <p>{text}</p>
      {imc !== null && <p className={styles.result}>{imc.toFixed(2)}</p>}
    </div>
  );
}
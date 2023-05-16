import styles from './Input.module.css'

export default function Input({type, placeholder, value, event}) {
  return <input type={type} inputMode='decimal' placeholder={placeholder} value={value} onChange={(e) => event(e)} className={styles.input} />
}
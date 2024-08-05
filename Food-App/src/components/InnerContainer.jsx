import styles from './innerContainer.module.css'
export default function InnerContaier({children}) {
    return <div className={styles.innerContainer}>
        {children}
    </div>
}
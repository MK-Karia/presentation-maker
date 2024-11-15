import styles from './Button.module.css'

type ButtonProps = {
    text: string,
    icon: string,
    onClick: () => void,
    className: string,
}

function Button({text, icon, onClick, className}: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            <img className={styles.icon} src={icon}/>
            <p className={styles.buttonName}>{text}</p>
        </button>
    )
}

export {
    Button
}
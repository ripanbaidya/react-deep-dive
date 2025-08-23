import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = () => {

    const buttons = [
        'C', '1', '2',
        '3', '4', '5',
        '6', '7', '8',
        '9', '0', '.',
        '+', '-', '*',
        '/', '%', '=',
    ]

    return <div className={styles.buttonsContainer}>
        {
            buttons.map((button, idx) => (
                <button key={idx} className={styles.button}>{button}</button>
            ))
        }
    </div>
};

export default ButtonsContainer
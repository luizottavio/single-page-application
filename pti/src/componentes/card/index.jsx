import React, {useState} from 'react'
import styles from './Card.module.css'

function Card({text, price, image}) {
    const [add, setadd] = useState(0)

    const addToCart = () => {
        setadd(add + 1)
    } 

    return (
        <section className={styles.pCard}>
            <div className={styles.card}>
                <img src={image} alt={text} style={{width:'180px', borderRadius: '18px'}}/>
                <p>{text}</p>
                <div className={styles.card_footer}>
                    <div className={styles.Card_icones}>
                    {price}
                    </div>
                    <button className={styles.btn} onClick={addToCart}> 
                        +
                    </button>
                </div>
            </div>
        </section>    
    ) 
}

export default Card

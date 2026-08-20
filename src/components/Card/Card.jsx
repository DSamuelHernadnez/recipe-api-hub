import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, name, image, difficulty, rating, onClose }) => {
   return (
      <article className={styles.cardContainer}>
         {/* Botón de cierre */}
         <button 
            onClick={() => onClose(id)} 
            className={styles.closeBtn}
            title="Eliminar tarjeta"
         >
            X
         </button>

         <div className={styles.cardImageWrapper}>
            <img src={image} alt={name} className={styles.cardImg} />
         </div>

         <div className={styles.cardContent}>
            <h3 className={styles.cardName}>{name}</h3>
            
            <div className={styles.cardInfo}>
               <span className={styles.difficulty}>Dificultad: {difficulty}</span>
               <span className={styles.rating}>★ {rating}</span>
            </div>

            <Link to={`/recipe/${id}`} className={styles.detailBtn}>
               VER DETALLE
            </Link>
         </div>
      </article>
   );
};

export default Card;
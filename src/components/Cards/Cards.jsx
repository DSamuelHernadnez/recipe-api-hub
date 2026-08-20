import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = ({ recipes, onClose }) => {
   return (
      <div className={styles.cardsGrid}>
         {recipes?.map((recipe) => (
            <Card
               key={recipe.id}
               id={recipe.id}
               name={recipe.name}
               image={recipe.image}
               difficulty={recipe.difficulty}
               rating={recipe.rating}
               onClose={onClose} 
            />
         ))}
      </div>
   );
};

export default Cards;
import React from 'react';
import styles from './SearchBar.module.css'; 

export default function SearchBar() {
   return (
      <div className={styles.bar}>
         <input 
            type='search' 
            placeholder="Buscar receta..." 
            className={styles.searchInput}
         />
         <button className={styles.searchButton}>
            BUSCAR
         </button>
      </div>
   );
}
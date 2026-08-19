import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

const Nav= () => {
   return (
      <nav className={styles.navContainer}>
         <div className={styles.brandWrapper}>
            <span className={styles.brandLogo}>WorderMark</span>
         </div>

         <div className={styles.linksGroup}>
            <NavLink to="/home" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>INICIO</button>
            </NavLink>

            <NavLink to="/recipes" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>RECETARIO</button>
            </NavLink>

            <NavLink to="/create" className={({ isActive }) => isActive ? styles.activeLink : ""}>
               <button className={styles.navBtn}>CREAR RECETA</button>
            </NavLink>


         </div>

         <div className={styles.searchWrapper}>
            <SearchBar />
         </div>

         <button className={styles.logoutBtn}>SALIR</button>
      </nav>
   );
};

export default Nav;
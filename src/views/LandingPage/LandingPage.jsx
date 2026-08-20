import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
   // Imagen de alta cocina con tonos oscuros para mantener la armonía
   const heroImg = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop";

   return (
      <main className={styles.landingContainer}>

         {/* Botón superior derecho para ir al Home */}
         <header className={styles.topHeader}>
            <Link to="/home" className={styles.recetarioBtn}>
               RECETARIO
            </Link>
         </header>
         
         {/* Fondo sutil en lugar de scanlines para un toque más limpio */}
         <div className={styles.ambientGlow}></div>

         <article className={styles.heroCard}>
            {/* --- HEADER CON IMAGEN GASTRONÓMICA --- */}
            <header className={styles.header}>
               <div className={styles.imageWrapper}>
                  <img src={heroImg} alt="Plato insignia" className={styles.heroImg} />
                  <div className={styles.imageOverlay}></div>
               </div>

               <div className={styles.titleGroup}>
                  <h1 className={styles.appName}>RECETARIO EXCLUSIVO</h1>
                  <p className={styles.subtitle}>ALTA COCINA </p>
                  <div className={styles.statusIndicator}>
                     <span className={styles.statusDot}></span>
                     COLECCIÓN ACTUALIZADA // 2026
                  </div>
               </div>
            </header>

            {/* --- CONTENIDO DE LA LANDING --- */}
            <div className={styles.content}>
               <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>[ LA EXPERIENCIA ]</h3>
                  <p className={styles.introText}>
                     Una selección cuidada de recetas premium para paladares exigentes.
                     Diseñado con un enfoque moderno y elegante, respaldado por la calidad de <span className={styles.brand}>WorderMark</span>.
                  </p>
               </section>

               {/* Posibles Categorias del Recetario */}

               {/* <section className={styles.tagsSection}>
                  <h3 className={styles.sectionTitle}>[ CATEGORÍAS PRINCIPALES ]</h3>
                  <div className={styles.tagGrid}>
                     <div className={styles.tag}><span>{'>'}</span> PESCADOS Y CEVICHES</div>
                     <div className={styles.tag}><span>{'>'}</span> CARNES Y CORTES</div>
                     <div className={styles.tag}><span>{'>'}</span> POSTRES DE AUTOR</div>
                  </div>
               </section> */}
            </div>

            {/* --- FOOTER ELEGANTE --- */}
            <footer className={styles.footer}>
               <div className={styles.authorTag}>CHEF & DEV: DAVID HERNÁNDEZ</div>
               <div className={styles.versionTag}>V1.0 // DARK_ELEGANCE</div>
            </footer>

            {/* Decoración sutil de esquina en color azafrán */}
            <div className={styles.cornerDecor}></div>
         </article>
      </main>
   );
}

export default LandingPage;
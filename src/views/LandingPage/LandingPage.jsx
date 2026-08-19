import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
   // Imagen de alta cocina con tonos oscuros para mantener la armonía
   const heroImg = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop";

   return (
      <div className={styles.landingContainer}>
         {/* Fondo sutil en lugar de scanlines para un toque más limpio */}
         <div className={styles.ambientGlow}></div>

         <div className={styles.heroCard}>
            {/* --- HEADER CON IMAGEN GASTRONÓMICA --- */}
            <div className={styles.header}>
               <div className={styles.imageWrapper}>
                  <img src={heroImg} alt="Plato insignia" className={styles.heroImg} />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.premiumBadge}>GOURMET</div>
               </div>

               <div className={styles.titleGroup}>
                  <h1 className={styles.appName}>RECETARIO EXCLUSIVO</h1>
                  <p className={styles.subtitle}>ALTA COCINA </p>
                  <div className={styles.statusIndicator}>
                     <span className={styles.statusDot}></span>
                     COLECCIÓN ACTUALIZADA // 2026
                  </div>
               </div>
            </div>

            {/* --- CONTENIDO DE LA LANDING --- */}
            <div className={styles.content}>
               <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>[ LA EXPERIENCIA ]</h3>
                  <p className={styles.introText}>
                     Una selección cuidada de recetas premium para paladares exigentes. 
                     Diseñado con un enfoque moderno y elegante, respaldado por la calidad de <span className={styles.brand}>WorderMark</span>.
                  </p>
               </div>

               {/* <div className={styles.tagsSection}>
                  <h3 className={styles.sectionTitle}>[ CATEGORÍAS PRINCIPALES ]</h3>
                  <div className={styles.tagGrid}>
                     <div className={styles.tag}><span>{'>'}</span> PESCADOS Y CEVICHES</div>
                     <div className={styles.tag}><span>{'>'}</span> CARNES Y CORTES</div>
                     <div className={styles.tag}><span>{'>'}</span> POSTRES DE AUTOR</div>
                  </div>
               </div> */}
            </div>

            {/* --- FOOTER ELEGANTE --- */}
            <div className={styles.footer}>
               <div className={styles.authorTag}>CHEF & DEV: DAVID HERNÁNDEZ</div>
               <div className={styles.versionTag}>V1.0 // DARK_ELEGANCE</div>
            </div>

            {/* Decoración sutil de esquina en color azafrán */}
            <div className={styles.cornerDecor}></div>
         </div>
      </div>
   );
}

export default LandingPage;
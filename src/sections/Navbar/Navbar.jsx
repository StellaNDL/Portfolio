import styles from './NavbarStyles.module.css'

function Navbar() {
  return (
   <header className={styles.nav}>
    <div className={styles.navInner}> 
        <span>
            <a href="#">
                Portfolio
                </a>
                </span>
        <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
        <label htmlFor="menuToggle" className={styles.hamburger}>
            <span></span>
        </label>

        <ul className={styles.menu}>
            <li><a href="#hero">Hero</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
   </header>
  );
}

export default Navbar
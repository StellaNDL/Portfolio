import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram2.png';
import instagramDark from '../../assets/instagram.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : 
    instagramDark;
    const githubIcon = theme === 'light' ? githubLight : 
    githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : 
    linkedinDark;

  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of Bongeka Ndlakuse" 
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme}
        />
        </div>
        <div className={styles.info}>
        <h1>
            Bongeka 
                <br />
            Ndlakuse
        </h1>
        <h2>Software Developer</h2>
        <span>
            <a href="https://www.instagram.com/bongeka_ndlakuse/?hl=en" target="_blank">
            <img src={instagramIcon} alt="Instagram Icon" />
            </a>
             <a href="https://github.com/StellaNDL" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
            </a>
             <a href="https://www.linkedin.com/in/bongeka-ndlakuse-0001112b3/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>
            A Developer with a passion for developing modern web pages. <br />
            Lifelong learner| Tech enthusiast
            </p>
            <a href={CV} download>
                <button className="hover">
                    My CV
                </button>
            </a>
        </div>
  </section>
  );
}

export default Hero;
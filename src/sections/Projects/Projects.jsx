import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.jpg'
import poemGenerator from '../../assets/poemGenerator.jpg';
import worldclock from '../../assets/worldclock.jpg';
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return ( 
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">
        Projects
    </h1>
    <div className={styles.projectsContainer}>
       <ProjectCard  src={weather} link="https://github.com/StellaNDL/weather-forecast" h3="Weather Forecast" p="Weather Forecast App Project" />
       <ProjectCard  src={poemGenerator} link="https://github.com/StellaNDL/ai-poem-project" h3="Poem Generator" p="AI Poem Generator Project" />
       <ProjectCard  src={worldclock} link="https://github.com/StellaNDL/WorldClockProject" h3="World Clock" p="World Clock Project" />
       <ProjectCard  src={fitLift} link="https://github.com/StellaNDL/ai-poem-project" h3="Fit Lift" p="Fitness App" />
    </div>
       </section>
  );
  
}

export default Projects;
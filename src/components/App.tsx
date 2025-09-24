import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Obfuscate from 'react-obfuscate';
import { career, education, homePreview, projects } from "../data";
import github_logo from '../images/github_logo.png';
import linkedin_logo from '../images/linkedin_logo.png';
import '../styles/App.scss';
import './Header';
import Header from './Header';
import Main from './Main';
import Preview from './Preview';

export enum Sections {
  Home = 'home',
  Projects = 'projects',
  Education = 'education',
  Career = 'career'
}

export interface HoveredSection {
  section: Sections
  on: boolean
}

export interface PreviewElement {
  section: Sections
  id: number
}

function App() {
  const [section, setSection] = useState<Sections>(Sections.Home);
  useEffect(() => {
    Object.values(Sections).forEach(sec => {
      document.body.classList.remove(sec)
    });

    document.body.classList.add(section);
  }, [section]);

  const [hoveredSection, setHoveredSection] = useState<HoveredSection>({ section: Sections.Home, on: false });
  useEffect(() => {
    if (hoveredSection.on) {
      document.body.classList.add(hoveredSection.section + 'Hover');
    } else {
      document.body.classList.remove(hoveredSection.section + 'Hover');
    }
  }, [hoveredSection.section, hoveredSection.on]);

  const [preview, setPreview] = useState<PreviewElement>({ section: Sections.Home, id: 0 });
  function showPreview() {
    switch (preview.section) {
      case Sections.Home: {
        return homePreview;
      }
      case Sections.Projects: {
        return projects.map((x) => x.itemPreview)[preview.id]
      }
      case Sections.Education: {
        return education.map((x) => x.itemPreview)[preview.id]
      }
      case Sections.Career: {
        return career.map((x) => x.itemPreview)[preview.id]
      }
      default: {
        return <div></div>
      }
    }
  }

  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="I am Dominik Künkele. Computational Linguist and Developer." />
      </Helmet>
      <Header
        changeSection={(section: Sections) => setSection(section)}
        setPreview={(previewElement: PreviewElement) => setPreview({ section: previewElement.section, id: previewElement.id })}
      />
      <div className="content">
        <Preview content={showPreview} />
        <Main
          projects={projects.map((x) => x.itemMeta)}
          education={education.map((x) => x.itemMeta)}
          career={career.map((x) => x.itemMeta)}
          changeSection={(section: Sections) => setSection(section)}
          hoverSection={(hoveredSection: HoveredSection) => setHoveredSection({ section: hoveredSection.section, on: hoveredSection.on })}
          setPreview={(previewElement: PreviewElement) => setPreview({ section: previewElement.section, id: previewElement.id })}
        />
      </div>
      <footer>
        <small>
          ©{new Date().getFullYear()} Dominik Künkele.
          All Rights Reserved. <br />
          <span className="material-symbols-outlined">mail</span> <Obfuscate email="contact@dominik-kuenkele.de" /> &bull;
          <a href="https://github.com/DominikKuenkele" target="_blank" rel="noreferrer"> <img src={github_logo} alt="" className='inline-logo' /> GitHub</a>	&bull;
          <a href="https://www.linkedin.com/in/dominik-k%C3%BCnkele-01270724a/" target="_blank" rel="noreferrer"> <img src={linkedin_logo} alt="" className='inline-logo' /> LinkedIn</a>
        </small>
      </footer>
      <script src="scripts/index.js"></script>
    </div>
  );
}

export default App;

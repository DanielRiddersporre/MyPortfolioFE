import './LinaPage.css';
// import 'react-dropdown/style.css';
import NavBar from './NavBar/NavBar';
import FirstPage from './FirstPage';
import ProjectPage from './ProjectPage/ProjectPage';
import ContactPage from './ContactPage/ContactPage';
import AboutPage from './AboutPage/AboutPage';

const LinaPage = () => {

  return (
    <div className="App">
      <FirstPage />
      <NavBar />
      <ProjectPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default LinaPage
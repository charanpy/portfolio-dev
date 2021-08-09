import React, { useEffect } from 'react';
import ContactComponent from '../components/Contact/Contact.component';
import Intro from '../components/Intro/Intro';
import Container from '../layout/Container/Container.component';
import ClipboardComponent from '../components/Clipboard/Clipboard.component';
import AboutComponent from '../components/About/About.component';
import SkillComponent from '../components/Skills/Skills.component';
import ProjectOverviewComponent from '../components/ProjectOverview/ProjectOverview.component';
import Seo from '../layout/Seo/Seo';

const Home = () => {
  useEffect(() => {
    fetch('/api/visitor')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Seo />
      <Container>
        <Intro />
        <ContactComponent />
        <ClipboardComponent />
        <SkillComponent />
        <AboutComponent />
        <ProjectOverviewComponent />
      </Container>
    </>
  );
};

export default Home;

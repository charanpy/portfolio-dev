import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '../../layout/Container/Container.component';
import { projects } from '../../data/projects';
import ProjectDetailComponent from '../../components/ProjectDetail/ProjectDetail.component';

const ProjectId = () => {
  const [projectData, setProjectData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const id = router.query?.id;
    if (!id) {
      setProjectData(null);
      return;
    }
    const projectData = projects[id];
    console.log(projectData);
    if (!projectData) {
      setProjectData(null);
      return;
    }
    setProjectData(projectData);
  }, [router]);

  return (
    <Container>
      {projectData !== null ? (
        <ProjectDetailComponent project={projectData} />
      ) : (
        ''
      )}
    </Container>
  );
};

export default ProjectId;

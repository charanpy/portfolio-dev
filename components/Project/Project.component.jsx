import React, { useState } from 'react';
import ProjectContainerComponent from '../ProjectOverview/ProjectContainer.component';
import { category } from '../../data/projects';
import CategoryComponent from './Category.component';

const ProjectComponent = () => {
  const [projectCategory, setProjectCategory] = useState('react');

  const changeProjectCategory = (name) => {
    setProjectCategory(name);
  };
  return (
    <>
      <CategoryComponent
        current={projectCategory}
        changeProjectCategory={changeProjectCategory}
      />

      <ProjectContainerComponent projects={category[projectCategory]} />
    </>
  );
};

export default ProjectComponent;

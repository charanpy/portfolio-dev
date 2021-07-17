import React from 'react';
import {
  Button,
  ButtonContainer,
  ImageContainer,
  ProjectDetails,
  ProjectImage,
  ProjectName,
} from './ProjectOverview.style';
import GithubComponent from '../svg/Github/Github.component';
import WebsiteComponent from '../svg/Website/Website.component';

const ProjectComponent = ({ src, alt, link, github }) => {
  const navigate = () => {
    console.log();
    if (window.innerWidth >= 790) {
      window.open(link, '_blank');
    }
    return;
  };
  return (
    <>
      <ImageContainer className='cursor' role='button'>
        <div onClick={navigate}>
          <ProjectImage
            alt={alt}
            src={`/${src}`}
            layout='fill'
            objectFit='contain'
            quality={100}
            className='z'
          />
        </div>
        <ButtonContainer>
          <Button
            onClick={() => console.log('hi')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            More...
          </Button>
        </ButtonContainer>
        <ProjectDetails>
          <ProjectName>{alt}</ProjectName>
          <div style={{ display: 'flex' }}>
            <a href={github} target='_blank' rel='noreferrer'>
              <GithubComponent />
            </a>
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              style={{ marginLeft: '1.5rem' }}
            >
              <WebsiteComponent />
            </a>
          </div>
        </ProjectDetails>
      </ImageContainer>
    </>
  );
};

export default ProjectComponent;

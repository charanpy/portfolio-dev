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
import LinkComponent from '../Link/Link.component';

const ProjectComponent = ({
  src,
  alt,
  link,
  github,
  description,
  navigate: path,
}) => {
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
            src={`${src}`}
            layout='fill'
            objectFit='contain'
            quality={100}
            className='z'
            placeholder='blur'
            blurDataURL='/shopify.png'
          />
        </div>
        {description ? (
          <LinkComponent path={`/projects/${path}`}>
            <ButtonContainer>
              <Button
                onClick={() => console.log('hi')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                More...
              </Button>
            </ButtonContainer>
          </LinkComponent>
        ) : (
          ''
        )}
        <ProjectDetails>
          <ProjectName>{alt}</ProjectName>
          <div style={{ display: 'flex' }}>
            {github ? (
              <a href={github} target='_blank' rel='noreferrer'>
                <GithubComponent />
              </a>
            ) : (
              ''
            )}
            {link ? (
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                style={{ marginLeft: '1.5rem' }}
              >
                <WebsiteComponent />
              </a>
            ) : (
              ''
            )}
          </div>
        </ProjectDetails>
      </ImageContainer>
    </>
  );
};

export default ProjectComponent;

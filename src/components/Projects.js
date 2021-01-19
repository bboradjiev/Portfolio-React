import React from 'react';
import RenderList from '../components/RenderList';
import Fade from 'react-reveal/Fade'


function Projects({projects}) {
    return (
        
            <div className='projects-section'>
                <Fade left duration={1000}>
                {projects.map((project, index) => <RenderList key={index} el={project}/>)}
                </Fade>
            </div>
     );
};

export default Projects;

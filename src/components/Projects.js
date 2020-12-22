import React from 'react';
import RenderList from '../components/RenderList';

function Projects({projects}) {
    return (
        <div className='projects-section'>
            {projects.map((project, index) => <RenderList key={index} el={project}/>)}
        </div>
    );
};

export default Projects;

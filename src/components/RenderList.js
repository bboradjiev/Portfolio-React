import React from 'react';
import Fade from 'react-reveal/Fade'


function RenderList({el}) {

    return (
        <Fade bottom cascade duration={1000}>
            <li>
                <p>{el.name}</p>
                {/* <p >{el.description ? `${el.description}` : ''}</p> */}
                <div className='project-links'>
                    {el.link ? <a className="github-link" rel="noreferrer" target='_blank' href={el.github}>GitHub</a> : ''}
                    {/* {el.github ? <a rel="noreferrer" target='_blank' href={el.link}>Go to App</a> : ''} */}
                </div>
                <a href={el.link} target='_blank' rel="noreferrer"><img src={el.img}  alt={el.name}/></a>                     
            </li>
        </Fade>
    );
};

export default RenderList;

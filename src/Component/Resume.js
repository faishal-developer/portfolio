import React, { useState } from 'react';
import { experties, familiar, tools } from './skillsData'

const Resume = ( props ) => {
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {props.skills.map( ( skill, i ) => (
                <div key={i} class="col custom-card text-justify p-3 ">
                    <div className='pink-color'><i className={`skill-icon ${skill.icon} fs-1`}></i></div>
                    <div>
                        <h3>{skill.name}</h3>
                        <p style={{ textAlign: 'justify' }}>{skill.description}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

const Skills = () => {
    const [skills, setSkills] = useState( { skill: 'experties' } )

    const skillHandler = ( skill ) => {
        let newSkill = { skill }
        setSkills( newSkill )
    }

    const findClassName = ( skill ) => {
        if ( skill === skills.skill ) {
            return `box-shadow px-4 py-3 btn-lg btn-active`
        } else {
            return `box-shadow px-4 py-3 btn-lg`
        }
    }

    const skillsName = () => {
        if ( skills.skill === 'experties' ) {
            return experties
        }
        else if ( skills.skill === 'familiar' ) {
            return familiar
        }
        if ( skills.skill === 'tools' ) {
            return tools
        }
    }
    return (
        <div className="my-5 py-5 text-center">
            <div>
                <button onClick={() => skillHandler( 'experties' )} className={findClassName( 'experties' )}>Experties</button>
                <button onClick={() => skillHandler( 'familiar' )} className={findClassName( 'familiar' )}>Familiar</button>
                <button onClick={() => skillHandler( 'tools' )} className={findClassName( 'tools' )}>Tools</button>
            </div>
            <div className="container my-5">
                <Resume skills={skillsName()} />
            </div>
        </div>
    );
};

export default Skills;
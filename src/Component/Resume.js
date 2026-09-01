import React, { useState } from 'react';
import { coreExpertise, workingKnowledge, cloudInfra, devTools } from './skillsData';

const SkillCardList = (props) => {
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {props.skills.map((skill, i) => (
                <div key={i} className="col">
                    <div className="custom-card text-start p-3 p-md-4 h-100 skills_icons">
                        <div className='pink-color mb-3'>
                            {skill.image ? (
                                <>
                                    <img className='visible_icon' style={{ width: "38px", height: "38px" }} src={skill.image} alt={skill.name} />
                                    <img className='hidden_icon' style={{ width: "38px", height: "38px" }} src={skill.black_img} alt={skill.name} />
                                </>
                            ) : (
                                <i className={`skill-icon ${skill.icon} fs-2`}></i>
                            )}
                        </div>
                        <div>
                            <h3 className="fs-5 fw-bold mb-2">{skill.name}</h3>
                            <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                                {skill.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Skills = () => {
    const [selectedTab, setSelectedTab] = useState('Core Expertise');

    const skillHandler = (tabName) => {
        setSelectedTab(tabName);
    };

    const findClassName = (tabName) => {
        const active = tabName === selectedTab;
        return `box-shadow px-3 px-sm-4 py-2 py-sm-3 btn fw-semibold mb-2 ${active ? 'btn-active' : 'bg-transparent text-dark'}`;
    };

    const getSkillsData = () => {
        switch (selectedTab) {
            case 'Core Expertise':
                return coreExpertise;
            case 'Working Knowledge':
                return workingKnowledge;
            case 'Cloud & Infrastructure':
                return cloudInfra;
            case 'Engineering Tools':
                return devTools;
            default:
                return coreExpertise;
        }
    };

    return (
        <div className="container-fluid px-0 my-4 my-md-5 py-3 py-md-4 text-center">
            <p className="pink-color fw-semibold mb-1" style={{ letterSpacing: '2px' }}>TECHNICAL PROFICIENCY</p>
            <h2 className="fw-bold mb-4">Skills & Capabilities</h2>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4 mb-md-5">
                <button onClick={() => skillHandler('Core Expertise')} className={findClassName('Core Expertise')}>
                    Core Expertise
                </button>
                <button onClick={() => skillHandler('Working Knowledge')} className={findClassName('Working Knowledge')}>
                    Working Knowledge
                </button>
                <button onClick={() => skillHandler('Cloud & Infrastructure')} className={findClassName('Cloud & Infrastructure')}>
                    Cloud & Infrastructure
                </button>
                <button onClick={() => skillHandler('Engineering Tools')} className={findClassName('Engineering Tools')}>
                    Dev & AI Tools
                </button>
            </div>
            <div>
                <SkillCardList skills={getSkillsData()} />
            </div>
        </div>
    );
};

export default Skills;
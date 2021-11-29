import React from 'react';

const DownLoadResume = () => {
    return (
        <div className="my-5 text-center">
            <h2 className="text-center">MY RESUME</h2>
            <a className="btn btn-bg btn-lg" href='https://drive.google.com/file/d/1XRUz6SRvw_ZxR8VmmlEZ2SwCsNcyHhcY/view?usp=sharing' target="_blank" rel="noreferrer">
                <h3>Download Resume</h3>
                <div><i class="far fa-arrow-alt-circle-down"></i></div>
            </a>
        </div>
    );
};

export default DownLoadResume;
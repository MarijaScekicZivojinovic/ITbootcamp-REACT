import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectProvider';

const MyProjectsList = () => {
    const { projects, dispatch } = useContext(ProjectContext);

    const addProject = () => {
        dispatch({
            type: 'ADD_PROJECT',
            payload: {
                title: 'Movie app',
                id: 1,
            }
        })
    }
    return (<div>
        <h1>
            My projects list:
        </h1>
        {projects.map(project => <p key={project.id}>{project.title}</p>)}

        <button onClick={addProject}>Add project</button>
    </div>);
}

export default MyProjectsList;
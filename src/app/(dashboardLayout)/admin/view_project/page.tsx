import React from 'react'
import { getAllProject } from '../project/_actions'
import ProjectTable from '@/components/Table/ProjectTable'

const ViewProjectPage = async () => {
    const projects = await getAllProject();

    console.log(projects)
    return (
        <div>
            <ProjectTable data={projects}/>
        </div>
    )
}

export default ViewProjectPage
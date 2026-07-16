import UpdateProjectForm from '@/components/From/UpdateProjectForm'
import { getProjectByID } from '../../project/_actions';

const UpdateProjectPage = async ({ params, }: { params: Promise<{ id: string }>; }) => {
    const { id } = await params;

    const project = await getProjectByID(id as string)

    return (
        <div>
            <h1 className='text-2xl font-bold font-mono pb-4 border-b-2'>Update Profile</h1>
            <UpdateProjectForm project={project} />
        </div>
    )
}

export default UpdateProjectPage
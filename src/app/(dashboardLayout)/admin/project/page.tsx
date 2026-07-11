import CreateProjectForm from "@/components/From/CreateProjectForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ProjectPage = () => {
  return (
    <div>
         <div className='flex justify-end mb-2 '>
          <Button>
            <Link href={"/admin/update_project"}>Update Project</Link>
          </Button>
        </div>
        <CreateProjectForm/>
    </div>
  )
}

export default ProjectPage
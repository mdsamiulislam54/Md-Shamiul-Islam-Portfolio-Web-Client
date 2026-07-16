import UpdateSkill from "@/components/From/SkillUpdateFrom";
import { getSkillById } from "../../_actions";
import { Card, CardHeader } from "@/components/ui/card";


const UpdatePage = async ({ params, }: { params: Promise<{ id: string }>; }) => {
    const { id } = await params;

    const skill = await getSkillById(id)
    return (
        <Card>
            <CardHeader>
                Update Skill
            </CardHeader>
            
            <UpdateSkill skill={skill} />
        </Card>
    )
}

export default UpdatePage
import { SkillTable } from '@/components/Table/SkillTable'
import { deleteSkill, getSkill } from './_actions'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateSkillForm from '@/components/From/CreateSkillFrom';
import SkillFilter from '@/components/model/SkillFilter';
interface SkillPageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}
const SkillPage = async ({ searchParams }: SkillPageProps) => {
    const { category } = await searchParams;
    const skill = await getSkill()

    const filterSkill = category && category !== "All" ? skill.filter((item) => item.category === category) : skill
    return (
        <div>
            <div className='flex justify-end'>
                <SkillFilter />
                <Dialog>
                    <DialogTrigger>
                        <Button className={"mb-4"}>
                            Create Skill
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <CreateSkillForm />
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <SkillTable skill={filterSkill} />
            </div>
        </div>
    )
}

export default SkillPage
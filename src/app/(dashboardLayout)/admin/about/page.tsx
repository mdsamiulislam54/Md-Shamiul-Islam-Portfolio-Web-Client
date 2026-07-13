
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getAbout } from './_actions'
import { Card, CardContent } from '@/components/ui/card'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UpdateAboutFrom from '@/components/From/UpdateAboutFrom'
const AboutPage = async () => {
    const about = await getAbout()
    return (
        <div className='space-y-10'>

            <div className='flex justify-end gap-5'>
                <div>
                    <Button>
                        <Link href={"/admin/about/createAbout"}>
                            Create About
                        </Link>
                    </Button>
                </div>
                <div>

                    <Dialog>
                        <DialogTrigger> <Button>
                            <Link href={""}>
                                Update About
                            </Link>
                        </Button></DialogTrigger>
                        <DialogContent className={"!max-w-4xl !mt-2"}>
                            <DialogHeader>
                                <DialogTitle>Update Your About Description</DialogTitle>
                                <DialogDescription>
                                   <UpdateAboutFrom about={about}/>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Card>
                <CardContent>
                    <article>
                        {about.description.split("/n").map((p,i) => {
                            return <p key={i} className="mb-4">{p}</p>
                        })}
                    </article>
                </CardContent>
            </Card>

        </div>
    )
}

export default AboutPage
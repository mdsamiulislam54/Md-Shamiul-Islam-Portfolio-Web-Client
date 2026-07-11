import CreateProfileFrom from '@/components/From/CreateProfile'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'


const ProfilePage = () => {
  return (
    <Card className='p-2'>
        <div className='flex justify-end mb-2 '>
          <Button>
            <Link href={"/admin/updateProfile"}>Update Profile</Link>
          </Button>
        </div>
        <CreateProfileFrom/>
    </Card>
  )
}

export default ProfilePage
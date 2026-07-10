import CreateProfileFrom from '@/components/From/CreateProfile'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
        <div className='flex justify-end mb-2 '>
          <Button>
            <Link href={"/admin/updateProfile"}>Update Profile</Link>
          </Button>
        </div>
        <CreateProfileFrom/>
    </div>
  )
}

export default ProfilePage
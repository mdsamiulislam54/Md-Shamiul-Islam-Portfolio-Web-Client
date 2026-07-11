import ProfileUpdateForm from '@/components/From/ProfileUpdateFrom'
import { getProfileData } from '../profile/_action'
import { Card } from '@/components/ui/card'


const UpdateProfile = async () => {
    const res = await getProfileData()
    return (
        <Card className='p-2'>
            <h1 className='text-2xl font-bold font-mono pb-4 border-b-2'>Update Profile</h1>
            <ProfileUpdateForm data={res.data} />
        </Card>
    )
}

export default UpdateProfile
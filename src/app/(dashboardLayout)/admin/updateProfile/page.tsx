import ProfileUpdateForm from '@/components/From/ProfileUpdateFrom'
import { getProfileData } from '../profile/_action'


const UpdateProfile = async () => {
    const res = await getProfileData()
    return (
        <div>
            <h1 className='text-2xl font-bold font-mono pb-4 border-b-2'>Update Profile</h1>
            <ProfileUpdateForm data={res.data} />
        </div>
    )
}

export default UpdateProfile
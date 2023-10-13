import logoUrl from '../assets/logo.png'
import Notifications from './Notifications'

function Header() {
    return <>
        <div className="flex justify-between items-center shadow-md p-4 w-full h-20">
            <img src={logoUrl} alt="logo" className='max-h-full' />
            <div className='text-3xl'>
                Store's name
            </div>
            <Notifications />
        </div>
    </>
}

export default Header
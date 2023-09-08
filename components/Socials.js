import Link from 'next/link';
import {RiFacebookBoxLine, RiInstagramLine, RiTwitterLine} from 'react-icons/ri'

const Socials = () => {
    return (
        <div className='flex items-center gap-x-5 text-lg'>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiFacebookBoxLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiTwitterLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiInstagramLine />
            </Link>
        </div>
    );
}

export default Socials;
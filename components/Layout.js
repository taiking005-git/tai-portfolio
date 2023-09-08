'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Transition from '../components/Transition'
import { AnimatePresence, motion } from 'framer-motion'

const Layout = ({ children }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div key={true} className='h-full'>
                    <Transition />
                    <div className='w-full h-full'>{children}</div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Layout
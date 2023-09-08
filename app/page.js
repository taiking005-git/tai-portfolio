'use client'
import Image from "next/image";

import { motion } from 'framer-motion'
import ProjectBtn from './../components/ProjectBtn';
import { fadeIn } from './../variants';
import Avatar from './../components/Avatar';
import ParticlesContainer from './../components/ParticlesContainer';

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
          <motion.h1
            variants={fadeIn('down', 0.2)} initial='hidden' animate='show'
            className='h1'>
            Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)} initial='hidden' animate='show'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            loren This sis soso a soas
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' className="hidden xl:flex">
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)} initial='hidden' animate='show'
          transition={{duration:1, ease:"easeInOut"}}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default page